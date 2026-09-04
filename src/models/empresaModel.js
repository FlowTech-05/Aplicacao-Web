var database = require("../database/config");

function cadastrarEmpresa(cnpj, razao_social, nome_fantasia) {
  var instrucaoSql = `CALL cadastrarEmpresa('${cnpj}', '${razao_social}', '${nome_fantasia}');`;
  return database.executar(instrucaoSql);
}

module.exports = { cadastrarEmpresa };
