const express = require("express");

const router = express.Router();

let produtos = [
  {
    id: 1,
    nome: "GTA 6",
    descricao: "Jogo de ação em mundo aberto",
    preco: 450,
    estoque: 1000,
    categoria: "Games"
  },
  {
    id: 2,
    nome: "EA FC 27",
    descricao: "Jogo de futebol para console",
    preco: 299,
    estoque: 1000,
    categoria: "Games"
  }
];

router.get("/", (req, res) => {
  res.render("produtos/index", {
    produtos: produtos
  });
});

router.get("/cadastro", (req, res) => {
  res.render("produtos/form-cadastro");
});

router.post("/", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    descricao,
    preco: Number(preco),
    estoque: Number(estoque),
    categoria
  };

  produtos.push(novoProduto);
  res.redirect("/produtos");
});

module.exports = router;
