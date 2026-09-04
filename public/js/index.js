async function completarCampos(cep) {
    let cepTratado = cep.replace(/\D/g, "")

    let resposta = await fetch(`https://viacep.com.br/ws/${cepTratado}/json/`);
    let dadosJSON = await resposta.json();
    
    if(dadosJSON.erro) {
        alert('CEP Inválido')
        return
    }
    document.getElementById('ipt_logradouro').value = dadosJSON.logradouro;
    document.getElementById('ipt_localidade').value = dadosJSON.localidade;
    document.getElementById('ipt_uf').value = dadosJSON.uf;
    document.getElementById('ipt_bairro').value = dadosJSON.bairro;
}

function cadastrarEmpresa() {
    let cnpj = document.getElementById('ipt_cnpj').value;
    let razao_social = document.getElementById('ipt_razao_social').value;
    let nome_fantasia = document.getElementById('ipt_nome_fantasia').value;
    let cep = document.getElementById('ipt_cep').value;
    let logradouro = document.getElementById('ipt_logradouro').value;
    let bairro = document.getElementById('ipt_bairro').value;
    let localidade = document.getElementById('ipt_localidade').value;
    let uf = document.getElementById('ipt_uf').value;

    fetch('/empresas/cadastrarEmpresa', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            cnpj: cnpj,
            razao_social: razao_social,
            nome_fantasia: nome_fantasia,
            cep: cep,
            logradouro: logradouro,
            bairro: bairro,
            localidade: localidade,
            uf: uf
        })
    })
}