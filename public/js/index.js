async function completarCampos(cep) {
    let cepTratado = cep.replace(/\D/g, "")

    let resposta = await fetch(`https://viacep.com.br/ws/${cepTratado}/json/`);
    let dadosJSON = await resposta.json();
    
    if(dadosJSON.erro) {
        alert('CEP Inválido')
        return
    }
    document.getElementById('ipt_logradouro').value = dadosJSON.logradouro;
    document.getElementById('ipt_cidade').value = dadosJSON.localidade;
    document.getElementById('ipt_uf').value = dadosJSON.uf;
    document.getElementById('ipt_bairro').value = dadosJSON.bairro;
}