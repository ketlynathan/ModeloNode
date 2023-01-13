const sql = require('mssql')
require('dotenv').config();

async function getAdapter() {
  try {
    let adpter = await sql.connect('');
    return adpter;
  } catch(err) {
    console.log('falhou conectar ao banco');
    console.log(err);
    process.exit(7);
  }
  return adpter;
}

module.exports = getAdapter