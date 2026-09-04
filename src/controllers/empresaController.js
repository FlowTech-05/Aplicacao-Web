var empresaModel = require("../models/empresaModel");

function cadastrarEmpresa(req, res) {
  var cnpj = req.body.cnpj;
  var razao_social = req.body.razao_social;
  var nome_fantasia = req.body.nome_fantasia;

  console.log("OLHA AQUI MATHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEUS" + razao_social);

  empresaModel.cadastrarEmpresa(cnpj, razao_social, nome_fantasia).then((resultado) => {
    res.status(200).json(resultado);
  });
}

module.exports = {
    cadastrarEmpresa
};
