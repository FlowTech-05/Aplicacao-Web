let elementoPainel = document.getElementById("painel");

function exibirPainel(acaoTexto, cor) {
    elementoPainel.classList.remove("hidden");
    document.getElementById('textoAcao').innerHTML = acaoTexto;
    document.getElementById('botaoAcao').classList.add(`bg-${cor}-600/50`, `border-${cor}-600`)
}

function fecharPainel() {
    elementoPainel.classList.add("hidden");
}