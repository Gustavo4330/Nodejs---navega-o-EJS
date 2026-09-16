const express = require("express");

const router = express.Router();

let fornecedores = [
  {
    id: 1,
    razaoSocial: "Talent Desk",
    cnpj: "12.345.678/0001-99",
    email: "contato@talentdesk.com.br",
    telefone: "(11) 1111-1111",
    cidade: "Salto"
  },
  {
    id: 2,
    razaoSocial: "Agenda Mais Perfeita",
    cnpj: "11.111.111/0001-11",
    email: "agendamais.perfeita@contatinho.com.br",
    telefone: "(11) 1111-1111",
    cidade: "Salto"
  }
];

router.get("/", (req, res) => {
  res.render("fornecedores/index", {
    fornecedores: fornecedores
  });
});

router.get("/cadastro", (req, res) => {
  res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) => {
  const { razaoSocial, cnpj, email, telefone, cidade } = req.body;

  const novoFornecedor = {
    id: fornecedores.length + 1,
    razaoSocial,
    cnpj,
    email,
    telefone,
    cidade
  };

  fornecedores.push(novoFornecedor);
  res.redirect("/fornecedores");
});

module.exports = router;
