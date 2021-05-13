const port = 3003;

const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const bancoDeDados = require("./bancoDeDados");

//criando um metodo que será aplicado em todas as rotas
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/products", (req, res, next) => {
  //o objeto abaixo será convertido para json automaticamente
  res.send(bancoDeDados.getProducts());
});

app.get("/products/:id", (req, res, next) => {
  res.send(bancoDeDados.getProduct(req.params.id));
});

app.post("/products", (req, res, next) => {
  const product = bancoDeDados.saveProduct({
    nome: req.body.name,
    preco: req.body.preco
  });
  res.send(product); //JSON
});

app.put("/products/:id", (req, res, next) => {
  const product = bancoDeDados.saveProduct({
    id: req.params.id,
    nome: req.body.name,
    preco: req.body.preco
  });
  res.send(product);
});

app.delete("/products/:id", (req, res, next) => {
  const product = bancoDeDados.deleteProduct(req.params.id);
  res.send(product);
});

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
