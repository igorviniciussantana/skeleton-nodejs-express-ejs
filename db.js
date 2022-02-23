let connect = function( ){
if ( golbal.connection){
return global.connection.connect();
}

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: "postgres://dzlcbnkl:tGc-ZbtAoTVGomMQJ4ptlPF1FxNGhTlQ@kesavan.db.elephantsql.com/dzlcbnkl"

  
});

global.connection = pool
  return pool.connect();
  
}

module.exports = { connect }