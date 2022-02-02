let listaCartas = undefined;
let numeroCartas = undefined;
function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
	for(let contador = 0; contador < numeroCartas; contador = contador + 1) {
		listaCartas = document.querySelector('section');
		listaCartas.innerHTML += `
        <figure data-identifier="card" onclick="virarCarta(this)">
            <div class="carta-frente carta" data-identifier="front-carta"></div>
            <div class="carta-costas carta" data-identifier="back-carta"></div>
        </figure>
        `;
	}
    // MÉTODO ORIGINAL
    // numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    // if (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    //     escolherNumeroCartas();
    // }
}

function virarCarta() {
    
}