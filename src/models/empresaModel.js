var database = require("../database/config");

function cadastrarEmpresa(cnpj, razao_social, nome_fantasia) {
  var instrucaoSql = `INSERT INTO empresas(cnpj, razao_social, nome_fantasia) VALUES ('${cnpj}', '${razao_social}', '${nome_fantasia}')`;

  return database.executar(instrucaoSql);
}

module.exports = { cadastrarEmpresa };
