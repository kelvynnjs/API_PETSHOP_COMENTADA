/*Define a forma de "rodar o servidor do aplicativo, utilizando bibliotecas como express,
e permite a leitura do JSON no corpo de responses e requests. Também instrui ao consign a 
construir o app com determinados controladores da pasta "controllers"*/

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
 
module.exports = () => {
//executa o servidor express
 const app = express()
 
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
 consign()
   .include('controllers')
   .into(app)
 
 return app
 // retorna os valore de execução do Aplicativo com as definições explicitadas ateriormente.
}