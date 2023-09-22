// require('dotenv').config()
// const express = require('express')
// const mailer = require('./nodemailer')

// const app = express()

// const port = 3001

// app.use('/css', express.static(__dirname + '/css'))

// app.post('/registration', (req, res) => {
//     const message = {
//         to: "artemiking@mail.ru",
//         subject: 'Congratulations! You are successfully registered on our site',
//         //или text для обычного текста
//         html: `
//         <h2>Грац</h2>
//         <ul>
//             <li>login: test</li>
//             <li>pass: test</li>
//         </ul>
//         `

//     }
//     mailer(message)
//     user = req.body
//     res.redirect('/')
// })

// app.get('/', (req, res) => {
//     return res.sendFile(__dirname + '/index.html')
// })

// app.listen(port, () => console.log(`server listening at http://localhost:${port}/registration`))