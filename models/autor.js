const db = require("../db");

class Autor {

  static async inserirAutor(data) {
    const connect = await db.connect();
    const sql = "INSERT INTO autores(nome, sobrenome, datanascimento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql, values);
  }

  static async selecionarAutor() {
    const connect = await db.connect();
    return await connect.query("SELECT * FROM autores ORDER BY id");
  }

  static async atualizarAutor(data) {
    const connect = await db.connect();
    const sql = "UPDATE autores SET nome=$1, sobrenome=$2, datanascimento=$3 WHERE id=$4";
    const values = [data.nome, data.sobrenome, data.datanascimento, data.id];
    return await connect.query(sql, values);

  }

  static async deletarAutor(data) {
    const connect = await db.connect(); const sql = "DELETE FROM autores WHERE id=$1"; const values = [data.id];
    return await connect.query(sql, values);


  }




}

module.exports = Autor;