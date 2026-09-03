function exibirPainel(id, acaoTexto, cor) {
    document.getElementById(id).classList.remove("hidden");
    document.getElementById('textoAcao').innerHTML = acaoTexto;
    document.getElementById('botaoAcao').className = 'w-fit border-1 p-1 rounded-sm';
    document.getElementById('botaoAcao').classList.add(`bg-${cor}-600/50`, `border-${cor}-600`)
}

function exibirDelete(id) {
    document.getElementById(id).classList.remove("hidden");
}

function fecharPainel(id) {
    document.getElementById(id).classList.add("hidden");
}