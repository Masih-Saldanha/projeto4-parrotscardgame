let renderizarCartas = undefined;
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let contador = undefined;
function virarCarta(numero) {
    virarFrente = document.querySelector(`.carta-frente-${numero}`);
    virarCostas = document.querySelector(`.carta-costas-${numero}`);
    // console.log(virarFrente, virarCostas);
    virarFrente.classList.toggle("virar-frente");
    virarCostas.classList.toggle("virar-costas");
}

function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
	for(contador = 0; contador < numeroCartas; contador = contador + 1) {
		renderizarCartas = document.querySelector('section');
		renderizarCartas.innerHTML += `
        <figure data-identifier="card" onclick="virarCarta(${contador})">
            <div class="carta-frente carta-frente-${contador} carta" data-identifier="front-carta"></div>
            <div class="carta-costas carta-costas-${contador} carta" data-identifier="back-carta"></div>
        </figure>
        `;
	}
    // MÉTODO ORIGINAL
    // numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    // if (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    //     escolherNumeroCartas();
    // }
}