const db = require("../db");

class Livro {

  static async inserirLivro(data) {
    const connect = await db.connect();
    const sql = "INSERT INTO livros(titulo, autor, editora, data_publicacao, preco) values($1, $2, $3, $4, $5)";
    const values = [data.titulo, data.autor, data.editora, data.data_publicacao, data.preco]
    return await connect.query(sql, values);
  }

  static async selecionarLivro() {
    const connect = await db.connect();
    return await connect.query("SELECT * FROM livros ORDER BY id");
  }

  static async atualizarLivro(data) {
    const connect = await db.connect();
    const sql = "UPDATE livros SET titulo=$1, autor=$2, editora=$3, data_publicacao=$4, preco=$5 WHERE id=$6";
    const values = [data.titulo, data.autor, data.editora, data.data_publicacao, data.preco, data.id];
    return await connect.query(sql, values);

  }

  static async deletarLivro(data) {
    const connect = await db.connect(); 
    const sql = "DELETE FROM livros WHERE id=$1"; 
    const values = [data.id];
    return await connect.query(sql, values);


  }



}

module.exports = Livro;