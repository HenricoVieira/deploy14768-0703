module.exports = (app)=>{
    app.get('/cadastro',(req,res)=>{
        res.render('formulario.ejs')
    })

    app.get('/',(req,res)=>{
        res.render('formulario.ejs')
    })

}

app.post('/create',(req,res)=>{
    var conexao = require('../config/bancodedados')
    conexao()
    var alunos = require('../models/alunos')
})
