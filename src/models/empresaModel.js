var database = require("../database/config");

function cadastrarEmpresa(cnpj, razao_social, nome_fantasia, cep, logradouro, bairro, localidade, uf) {
  var instrucaoSql = `CALL cadastrarEmpresa('${cnpj}', '${razao_social}', '${nome_fantasia}', '${cep}', '${logradouro}', '${bairro}', '${localidade}', '${uf}');`;
  return database.executar(instrucaoSql);
}

module.exports = { cadastrarEmpresa };
