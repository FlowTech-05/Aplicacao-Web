async function cadastro() {
    let nome = cadNome.value;
    let email = cadEmail.value;
    let senha = cadSenha.value;
    let codigo = cadCodigo.value;

    let requisicao = await fetch('/usuarios/cadastrar', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
            codigo: codigo
        })
    })

    if(requisicao.ok) {
        alert('Conta cadastrada com sucesso!')
    }
}

async function login() {
    let email = loginEmail.value;
    let senha = loginSenha.value;   

    let requisicao = await fetch(`/usuarios/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })

    if(requisicao.ok) {
        window.location = './dashboard/embarcado.html'
    }
}