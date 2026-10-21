const express = require("express");

const router = express.Router();

let clientes = [
  {
    id: 1,
    nome: "Rafael Sodré",
    email: "rafael.sodre@etec.com",
    telefone: "(11) 99999-9999",
    cidade: "Itu"
  },
  {
    id: 2,
    nome: "Gustavo Moreira",
    email: "gustavo.moreira@etec.com",
    telefone: "(11) 99999-9999",
    cidade: "Salto"
  }
];

router.get("/", (req, res) => {
  res.render("clientes/index", {
    clientes: clientes
  });
});

router.get("/cadastro", (req, res) => {
  res.render("clientes/form-cadastro");
});

router.post("/", (req, res) => {
  const { nome, email, telefone, cidade } = req.body;

  const novoCliente = {
    id: clientes.length + 1,
    nome,
    email,
    telefone,
    cidade
  };

  clientes.push(novoCliente);
  res.redirect("/clientes");
});

router.get("/:id/editar", (req, res) => {
  const cliente = clientes.find((item) => item.id === Number(req.params.id));

  if (!cliente) {
    return res.redirect("/clientes");
  }

  res.render("clientes/form-edicao", { cliente });
});

router.post("/:id/editar", (req, res) => {
  const { nome, email, telefone, cidade } = req.body;
  const id = Number(req.params.id);
  const clienteIndex = clientes.findIndex((item) => item.id === id);

  if (clienteIndex === -1) {
    return res.redirect("/clientes");
  }

  clientes[clienteIndex] = {
    ...clientes[clienteIndex],
    nome,
    email,
    telefone,
    cidade
  };

  res.redirect("/clientes");
});

router.post("/:id/excluir", (req, res) => {
  const id = Number(req.params.id);
  clientes = clientes.filter((item) => item.id !== id);
  res.redirect("/clientes");
});

module.exports = router;
