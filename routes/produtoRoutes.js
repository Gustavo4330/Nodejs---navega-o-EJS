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

router.get("/:id/editar", (req, res) => {
  const produto = produtos.find((item) => item.id === Number(req.params.id));

  if (!produto) {
    return res.redirect("/produtos");
  }

  res.render("produtos/form-edicao", { produto });
});

router.post("/:id/editar", (req, res) => {
  const { nome, descricao, preco, estoque, categoria } = req.body;
  const id = Number(req.params.id);
  const produtoIndex = produtos.findIndex((item) => item.id === id);

  if (produtoIndex === -1) {
    return res.redirect("/produtos");
  }

  produtos[produtoIndex] = {
    ...produtos[produtoIndex],
    nome,
    descricao,
    preco: Number(preco),
    estoque: Number(estoque),
    categoria
  };

  res.redirect("/produtos");
});

router.post("/:id/excluir", (req, res) => {
  const id = Number(req.params.id);
  produtos = produtos.filter((item) => item.id !== id);
  res.redirect("/produtos");
});

module.exports = router;
