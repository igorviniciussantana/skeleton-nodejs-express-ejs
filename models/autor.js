const db = require("../db");

class Autor {

  static async inserirAutor(data){
    const connect = await db.connect();
    const sql = "INSERT INTO autores(nome, sobrenome, datanascimento) values($1, $2, $3)";
    const values = [data.nome, data.sobrenome, data.datanascimento]
    return await connect.query(sql, values);
  }
  
  static async selecionarAutor(){
   const connect = await db.connect();
   return  await connect.query("SELECT * FROM autores");
  }

  static atualizarAutor(){

    
  }

  static deleteAutor(){

    
  }



  
}

module.exports = Autor;