var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');
const Livro = require('../models/livro');


/* GET home page Autores. */
router.get('/', async function(req, res, next) {
  const autores = await Autor.selecionarAutor();
  res.json(autores.rows)
});

router.get('/autorLivros', async function(req, res, next) {

  const autorLivro = await Autor.livros(req.body)
  res.json(autorLivro.rows)
  
});

router.post('/inserirAutor', async function(req, res, next) {

  const autores = await Autor.inserirAutor(req.body)
  res.json(autores)
  
});

router.put('/atualizarAutor', async function(req, res, next) {

  const autores = await Autor.atualizarAutor(req.body)
  res.json(autores)
});

router.delete('/deletarAutor', async function(req, res, next) {


  const autores = await Autor.deletarAutor(req.body)
  res.json(autores)
});





/* GET home page Livros. */
router.get('/livros', async function(req, res, next) {
  const livros = await Livro.selecionarLivro();
  res.json(livros.rows)
});


router.post('/inserirLivro', async function(req, res, next) {

  const livros = await Livro.inserirLivro(req.body)
  res.json(livros)
  
});

router.put('/atualizarLivro', async function(req, res, next) {

  const livros = await Livro.atualizarLivro(req.body)
  res.json(livros)
});

router.delete('/deletarLivro', async function(req, res, next) {


  const livros = await Livro.deletarLivro(req.body)
  res.json(livros)
});


module.exports = router;
