// const nodemailer = require('nodemailer')

// // mail.ru
// const transporter = nodemailer.createTransport(
//     {
//         pool: true,
//         host: 'smtp.mail.ru', // https://help.mail.ru/mail/mailer/popsmtp
//         port: 465,
//         secure: true, // true for 465, false for other
//         auth: {
//             user: 'artemiking@mail.ru',
//             pass: 'bPRt7aKvZwGEu1J7ktBf', // https://help.mail.ru/mail/security/protection/external https://doc.camkubik.com/ru:info:smtp_passwords
//         },
//     },
//     {
//         from: `Mailer Test <${process.env.USER}>`,
//     },
// );

// // gmail
// // https://nodemailer.com/usage/using-gmail/
// // https://www.youtube.com/watch?v=wevmV9iZswI

// transporter.verify((error, success) => {
//     error ? console.log(error) : console.log('Server is ready to take our messages: ', success);
// });

// const mailer = (message) => {
//     transporter.sendMail(message, (err, info) => {
//         if (err) return console.log(err);
//         console.log('Email sent: ', info);
//     });
// };

// module.exports = mailer;
