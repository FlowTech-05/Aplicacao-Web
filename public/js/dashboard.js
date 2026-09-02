let elementoPainel = document.getElementById("painel");

function exibirPainel() {
    elementoPainel.classList.remove("hidden");
}

function fecharPainel() {
    elementoPainel.classList.add("hidden");
}