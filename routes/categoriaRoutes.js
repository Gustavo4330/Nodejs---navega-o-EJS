const express = require("express");

const router = express.Router();

// ========================================
// DADOS
// ========================================

let categorias = [
  {
    id: 1,
    nome: "Roupas",
    descricao: "Produtos de vestuário"
  },
  {
    id: 2,
    nome: "Eletrônicos",
    descricao: "Produtos eletrônicos"
  },
  {
    id: 3,
    nome: "Games",
    descricao: "Jogos eletrônicos"
  }
];

router.get("/", (req, res) => {
  res.render("categorias/index", {
    categorias: categorias
  });
});

router.get("/cadastro", (req, res) => {
  res.render("categorias/form-cadastro");
});

router.post("/", (req, res) => {
  const { nome, descricao } = req.body;
  const novaCategoria = {
    id: categorias.length + 1,
    nome: nome,
    descricao: descricao
  };
  categorias.push(novaCategoria);
  res.redirect("/categorias");
});

module.exports = router;