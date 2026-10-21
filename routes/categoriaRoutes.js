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

router.get("/:id/editar", (req, res) => {
  const categoria = categorias.find((item) => item.id === Number(req.params.id));

  if (!categoria) {
    return res.redirect("/categorias");
  }

  res.render("categorias/form-edicao", { categoria });
});

router.post("/:id/editar", (req, res) => {
  const { nome, descricao } = req.body;
  const id = Number(req.params.id);
  const categoriaIndex = categorias.findIndex((item) => item.id === id);

  if (categoriaIndex === -1) {
    return res.redirect("/categorias");
  }

  categorias[categoriaIndex] = {
    ...categorias[categoriaIndex],
    nome,
    descricao
  };

  res.redirect("/categorias");
});

router.post("/:id/excluir", (req, res) => {
  const id = Number(req.params.id);
  categorias = categorias.filter((item) => item.id !== id);
  res.redirect("/categorias");
});

module.exports = router;