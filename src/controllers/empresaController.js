var empresaModel = require("../models/empresaModel");

function cadastrarEmpresa(req, res) {
  var cnpj = req.body.cnpj;
  var razao_social = req.body.razao_social;
  var nome_fantasia = req.body.nome_fantasia;
  var cep = req.body.cep;
  var logradouro = req.body.logradouro;
  var bairro = req.body.bairro;
  var localidade = req.body.localidade;
  var uf = req.body.uf;

  empresaModel.cadastrarEmpresa(cnpj, razao_social, nome_fantasia, cep, logradouro, bairro, localidade, uf).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    cadastrarEmpresa
};
