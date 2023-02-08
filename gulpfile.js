const {
    src,
    dest,
    series,
    watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const del = require('del');

//svg sprites
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');

//scss
const sass = require('sass');
const gulpSass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const gulpif = require('gulp-if');
const notify = require('gulp-notify');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');

//js
const webpackStream = require('webpack-stream');

//fonts
const ttf2woff2 = require('gulp-ttf2woff2');
const ttfToWoff = require("gulp-ttf-to-woff");

//image
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

//html
const fileInclude = require('gulp-file-include');
const typograf = require('gulp-typograf');
const htmlmin = require('gulp-htmlmin');

//path
const path = require('path');
const zip = require('gulp-zip');
const rootFolder = path.basename(path.resolve());

// paths
const srcFolder = './src';
const buildFolder = './app';

const paths = {
    srcSvg: `${srcFolder}/img/svg/**.svg`,
    srcImgFolder: `${srcFolder}/img`,
    srcScss: `${srcFolder}/scss/**/*.scss`,
    srcCss: `${srcFolder}/css`,
    srcFullJs: `${srcFolder}/js/**/*.js`,
    srcMainJs: `${srcFolder}/js/main.js`,
    srcPartialsFolder: `${srcFolder}/partials`,
    resourcesFolder: `${srcFolder}/resources`,


    buildImgFolder: `${buildFolder}/img`,
    buildCssFolder: `${buildFolder}/css`,
    buildJsFolder: `${buildFolder}/js`,
    buildResourcesFolder: `${buildFolder}/resources`,
};

let isProd = false; // dev by default

const clean = () => {
    return del([buildFolder])
}

//svg sprite
const svgSprites = () => {
    return src(paths.srcSvg)
        .pipe(
            svgmin({
                js2svg: {
                    pretty: true,
                },
            })
        )
        .pipe(
            cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: {
                    xmlMode: true
                },
            })
        )
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(dest(paths.buildImgFolder))
}

// scss styles
const styles = () => {
    return src(paths.srcScss, {
            sourcemaps: !isProd
        })
        .pipe(plumber(
            notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(gulpSass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            cascade: false,
            grid: true,
            overrideBrowserslist: ["last 5 versions, > 1%, ie 8, ie 7"]
        }))
        .pipe(gulpif(isProd, cleanCSS({
            level: 2,
            compatibility: 'ie8'
        })))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
        }))
        .pipe(dest(paths.buildCssFolder, {
            sourcemaps: '.'
        }))
        .pipe(browserSync.stream());
};

// scripts
const scripts = () => {
    return src(paths.srcMainJs)
        .pipe(plumber(
            notify.onError({
                title: "JS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(webpackStream({
            mode: isProd ? 'production' : 'development',
            output: {
                filename: 'main.js',
            },
            module: {
                rules: [{
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {
                                    targets: "defaults"
                                }]
                            ]
                        }
                    }
                }]
            },
            devtool: false
        }))
        .on('error', function (err) {
            console.error('WEBPACK ERROR', err);
            this.emit('end');
        })
        .pipe(dest(paths.buildJsFolder))
        .pipe(browserSync.stream());
}

const fontsWoff = () => {
    return src(`${paths.resourcesFolder}/fonts/*.ttf`)
        .pipe(ttfToWoff())
        .pipe(dest(`${paths.resourcesFolder}/fonts`))
}

const fontsWoff2 = () => {
    return src(`${paths.resourcesFolder}/fonts/*.ttf`)
        .pipe(ttf2woff2())
        .pipe(dest(`${paths.resourcesFolder}/fonts`))
}

//fonts e.t.c
const resources = () => {
    return src(`${paths.resourcesFolder}/**`)
        .pipe(dest(paths.buildResourcesFolder))
}

//images
const images = () => {
    return src(`${paths.srcImgFolder}/**/**.{png, jpg, jpeg, gif}`)
        .pipe(plumber(
            notify.onError({
                title: "IMAGES",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(imagemin([
            imagemin.gifsicle({
                optimizationLevel: 3,
                interlaced: true,
            }),
            imagemin.optipng({
                optimizationLevel: 5,
            }),
            imagemin.mozjpeg({
                quality: 100,
                progressive: true
            }),
        ], {
            verbose: true
        }))
        .pipe(dest(paths.srcImgFolder))
        .pipe(dest(paths.buildImgFolder))
};

const webpImages = () => {
    return src([`${paths.srcImgFolder}/**/**.{jpg,jpeg,png}`])
        .pipe(webp())
        .pipe(dest(paths.srcImgFolder))
        .pipe(dest(paths.buildImgFolder))
};

//html include
const htmlInclude = () => {
    return src([`${srcFolder}/*.html`])
        .pipe(fileInclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(typograf({
            locale: ['ru', 'en-US']
        }))
        .pipe(dest(buildFolder))
        .pipe(browserSync.stream());
}

const htmlMinify = () => {
    return src(`${buildFolder}/**/*.html`)
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(dest(buildFolder));
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: `${buildFolder}`
        },
    });

    watch(paths.srcScss, styles);
    watch(paths.srcFullJs, scripts);
    watch(`${paths.srcPartialsFolder}/*.html`, htmlInclude);
    watch(`${srcFolder}/*.html`, htmlInclude);
    watch(`${paths.resourcesFolder}/**`, resources);
    watch(`${paths.srcImgFolder}/**/**.{jpg,jpeg,png,gif}`, images);
    watch(`${paths.srcImgFolder}/**/**.{jpg,jpeg,png}`, webpImages);
    watch(paths.srcSvg, svgSprites);
}

const zipFiles = (done) => {
    del.sync([`${buildFolder}/*.zip`]);
    return src(`${buildFolder}/**/*.*`, {})
      .pipe(plumber(
        notify.onError({
          title: "ZIP",
          message: "Error: <%= error.message %>"
        })
      ))
      .pipe(zip(`${rootFolder}.zip`))
      .pipe(dest(buildFolder));
  }

const toProd = (done) => {
    isProd = true;
    done();
};

//functions
exports.fonts = series(fontsWoff, fontsWoff2);
exports.default = series(clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, watchFiles);
exports.build = series(toProd, clean, htmlInclude, scripts, styles, resources, images, webpImages, svgSprites, htmlMinify);
exports.zip = zipFiles;