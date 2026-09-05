var express = require("express");
var router = express.Router();

var crudController = require("../controllers/crudController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarPortico", function (req, res) {
    crudController.cadastrarPortico(req, res);
})

router.delete("/apagarPortico", function (req, res) {
    crudController.apagarPortico(req, res);
});

router.post("/editarPortico", function (req, res) {
    crudController.editarPortico(req, res);
});

module.exports = router;