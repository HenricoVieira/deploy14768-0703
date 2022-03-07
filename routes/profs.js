module.exports = (app)=>{
    app.get('/profs',(req,res)=>{
        res.render("professores.ejs")
    })
}

app.post('/profs',(req,res)=>{
    var conexao = require('../config/bancodedados')
    var professores = require('../models/professores')
    var documento = new professores({
        nome:req.body.nome,
        disciplina:req.body.disciplina,
        email:req.body.email
    }).save()
    .then((result)=>{
        res.redirect('/profs')
    })
    .catch((err)=>{
        console.log('Nã foi prossivel gravar os dados no BD')
    })
})