var express = require('express');
var app = express();

let alunos = [
  { id: 0, nome: "Jose"},
  { id: 1, nome: "Maria"},
  { id: 2, nome: "Joao"},
  { id: 3, nome: "Marcos"}
]

app.use(express.urlencoded())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/alunos", (req, res) => {

  

  res.json(JSON.stringify(alunos))

})

app.get("/aluno", (req, res) => {
  console.log(req.body)
  console.log(req.query)
  // let aluno = alunos[req.body.id]
  let aluno2 = alunos[req.query.id]
  res.send(aluno)
})

app.get("/aluno/:id", (req, res) => {
  console.log(req.params.id)
  let aluno = alunos[req.params.id]
  res.send(aluno)
})

const PORT = 5000;

app.listen(PORT, () => { console.log(`Server Runnig on Port: ${PORT}`) })



// const express = require('express');
// // const path = require('path');

// const app = express();

// // app.use("/meusite", express.static(path.join(__dirname, 'client')))

// const consoleBody = (req, res, next) => {
//   console.log(req.body);
//   next();
//   //next("Erro de qualquer coisa"); //se ele tiver um parametro ele vai simples retorna um erro e não vai seguir para a nova função
// }

// const hello = (req, res) => {
//   res.send("Hello World");
// }

// // app.get("/", consoleMethod, hello) //executa consoleMethod paenas no get
// //app.use executa os comandos colocados em qualquer tipo de requisição (get, post, put)
// app.use("/", express.json())
// app.use("/", consoleBody)
// app.get("/", hello)

// app.post("/", hello)



// const PORT = 5000;

// app.listen(PORT, () => { console.log(`Server Runnig on Port: ${PORT}`) })

// app.get("/", (req, res) => {

  // res.set("Content-Type", "text/plain")
  // res.type("txt")
  // console.log(req)
  // res.send("<h1>Hello World From GET</h1>");

  //MAIS USADOS ##################################333
// res.type('.html') => 'text/html'
// res.type('html') => 'text/html'
// res.type('txt') => 'text/plain'
// res.type('json') => 'application/json'
// res.type('application/json') => 'application/json'
// res.type('png') => 'image/png'

// })
// 
// app.post("/", (req, res) => {
//   res.send("<h1>Hello World From POST</h1>");
// })

// app.put("/", (req, res) => {
//   res.send("<h1>Hello World From PUT</h1>");
// })

// app.delete("/", (req, res) => {
//   res.send("<h1>Hello World From DELETE</h1>");
// // })

// const PORT = 5000;

// app.listen(PORT, () => { console.log(`Server Runnig on Port: ${PORT}`) })