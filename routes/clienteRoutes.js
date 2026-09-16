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

module.exports = router;
