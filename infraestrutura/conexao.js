//Gerenciador de conexão com o banco de dados


//Utiliza o pacote mysql do npm para criar e gerenciar a conexão com o banco de dados
const mysql = require('mysql')


//cria uma conexão com o banco de dados, passando certos parãmetros de acesso, como porta, usuário e senha e o nome do host e banco de dados.
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda-petshop'
})

//"Torna esta conexão acessível por outros arquivos"
module.exports = conexao
