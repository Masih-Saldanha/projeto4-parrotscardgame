let numeroCartas = undefined;
function escolherNumeroCartas() {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    if (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
        escolherNumeroCartas();
    }
}