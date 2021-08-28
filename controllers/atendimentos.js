
//"IMPORTA" O Atendimento de models
const Atendimento = require('../models/atendimentos')


//Compartilha o App com outros arquivos.
module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })



    //Função get: lê atendimentos
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)
    })

    //Função post: Criar Atendimento com valores
    app.post('/atendimentos', (req, res) => {
       const atendimento = req.body

        Atendimento.adiciona(atendimento, res)
    }) 

    //Função patch:  Atualizar valores do atendimento baseado em um id, e os valores indicados
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
    //Função delete: exclui um atendimento baseado no id
    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}