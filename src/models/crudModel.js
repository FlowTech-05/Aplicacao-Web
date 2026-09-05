function cadastrarPortico(nome, portico, endereco, status, idUsuario, idEmpresa) {

    var instrucaoSql = `
        insert into porticos (fk_empresa, codigo_identificacao) values ('${idEmpresa}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function apagarPortico(titulo, autor, idUsuario) {

    var instrucaoSql = `
        DELETE FROM livro_biblioteca
        WHERE titulo = '${titulo}'
        AND autor = '${autor}'
        AND fk_usuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}