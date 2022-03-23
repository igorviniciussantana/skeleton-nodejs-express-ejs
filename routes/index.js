var express = require('express');
var router = express.Router();
const Autor = require('../models/autor')



/* GET home page. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionarAutor();
  res.json(autores.rows)
});

router.post('/inserir', async function(req, res, next) {
  // const autor = {
  //   nome: "Luiz",
  //   sobrenome: "Picolo",
  //   datanascimento: "2000/01/01"
  // }

  const autores = await Autor.inserirAutor(req.body)
  res.json(autores)
  
});

router.put('/atualizar', async function(req, res, next) {
  // const autor = {
  //   nome: "Nome",
  //   sobrenome: "Novo",
  //   datanascimento: "2000/02/01",
  //   id:"2"
  // }

  const autores = await Autor.atualizarAutor(req.body)
  res.json(autores)
});

router.delete('/deletar', async function(req, res, next) {
  // const autor = {
  //   id:"5"
  // }

  const autores = await Autor.deletarAutor(req.body)
  res.json(autores)
});



module.exports = router;
