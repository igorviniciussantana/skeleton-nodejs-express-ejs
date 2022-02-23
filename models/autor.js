const db = require("../db");


class Autor {

  static inserirAutor(){

    
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