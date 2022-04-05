let connect = function( ){
if ( global.connection){
return global.connection.connect();
}

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://fpeglbvb:O_KqM5tReXSDrUxP8OdoaSAU8VzyWYYJ@kesavan.db.elephantsql.com/fpeglbvb"

  
});

global.connection = pool
  return pool.connect();
  
}

module.exports = { connect }