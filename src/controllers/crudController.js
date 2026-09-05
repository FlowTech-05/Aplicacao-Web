var crudModel = require("../models/crudModel");

function cadastrarPortico(req, res) {
    var portico = req.body.porticoServer;
    var nome = req.body.nomeServer;
    var status = req.body.statusServer;
    var endereco = req.body.enderecoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Validações dos valores
    if (portico == undefined) {
        res.status(400).send("Portico indefinido!");
    } else if (nome == undefined) {
        res.status(400).send("Nome indefinido!");
    } else if (endereco == undefined) {
        res.status(400).send("Endereço indefinido!");
    } else if (status == undefined) {
        res.status(400).send("Status indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        crudModel.cadastrarPortico(portico, nome, endereco, status, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function editarPortico(req, res) {
    var portico = req.body.porticoServer;
    var nome = req.body.nomeServer;
    var status = req.body.statusServer;
    var endereco = req.body.enderecoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Validações dos valores
    if (portico == undefined) {
        res.status(400).send("Portico indefinido!");
    } else if (nome == undefined) {
        res.status(400).send("Nome indefinido!");
    } else if (endereco == undefined) {
        res.status(400).send("Endereço indefinido!");
    } else if (status == undefined) {
        res.status(400).send("Status indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        crudModel.editarPortico(portico, nome, endereco, status, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagarPortico(req, res) {
    var portico = req.body.porticoServer;
    var nome = req.body.nomeServer;
    var idUsuario = req.body.idUsuarioServer;

        if (nome == undefined) {
        res.status(400).send("Nome indefinido!");
    } else if (portico == undefined) {
        res.status(400).send("Portico indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        crudModel.apagarPortico(nome, portico, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao apagar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarPortico,
    editarPortico,
    apagarPortico
};