const express = require('express')
const app = express()

const porta = process.env.PORT || 4040

//configurar o tranporte de dados do formulario para o script
app.use(express.urlencoded({extended:false}))

module.exports = {app, porta}
