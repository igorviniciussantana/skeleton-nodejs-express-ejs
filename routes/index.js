var express = require('express');
var router = express.Router();
const Autor = require('../models/autor')



/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionarAutor();
  res.json(autores.rows)
});

router.get('/inserir', async function(req, res, next) {
  const autor = {
    nome: "Luiz",
    sobrenome: "Picolo",
    datanascimento: "2000/01/01"
  }

  const autores = await Autor.inserirAutor(autor)
  res.json(autores)
});

router.get('/atualizar', async function(req, res, next) {
  const autor = {
    nome: "Nome",
    sobrenome: "Novo",
    datanascimento: "2000/02/01",
    id:"2"
  }

  const autores = await Autor.atualizarAutor(autor)
  res.json(autores)
});



module.exports = router;
