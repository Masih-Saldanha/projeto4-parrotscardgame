let renderizarCartas = undefined;
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let cartasMarcadas = [];
let contador = undefined;
function virarCarta(numero) {
    virarFrente = document.querySelector(`.carta-frente-${numero}`);
    virarCostas = document.querySelector(`.carta-costas-${numero}`);
    virarFrente.classList.add("virar-frente");
    virarCostas.classList.add("virar-costas");
    cartasMarcadas.push(numero);
    if (cartasMarcadas[0] === cartasMarcadas[1]) {
        cartasMarcadas.splice(1);
    } 
    // else {
        // stop;
    // }
    console.log(cartasMarcadas);
    if (cartasMarcadas.length >= 2) {
        // virarCarta().removeAttribute('onclick');
        let cartaFrente1 = document.querySelector(`.carta-frente-${cartasMarcadas[0]}`);
        let cartaFrente2 = document.querySelector(`.carta-frente-${cartasMarcadas[1]}`);
        let cartaCostas1 = document.querySelector(`.carta-costas-${cartasMarcadas[0]}`);
        let cartaCostas2 = document.querySelector(`.carta-costas-${cartasMarcadas[1]}`);
        cartasMarcadas = [];
        setTimeout(() => {
            cartaFrente1.classList.remove("virar-frente");
            cartaFrente2.classList.remove("virar-frente");
            cartaCostas1.classList.remove("virar-costas");
            cartaCostas2.classList.remove("virar-costas");
            // virarCarta().addAttribute('onclick');
        }, 1000);
    }
}

function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
	for(contador = 0; contador < numeroCartas; contador = contador + 1) {
		renderizarCartas = document.querySelector('section');
		renderizarCartas.innerHTML += `
        <figure data-identifier="card" onclick="virarCarta(${contador})">
            <div class="carta-frente carta-frente-${contador} carta" data-identifier="front-face"><h2>FRENTE ${contador}</h2></div>
            <div class="carta-costas carta-costas-${contador} carta" data-identifier="back-face"><h2>COSTAS ${contador}</h2></div>
        </figure>
        `;
	}
    // MÉTODO ORIGINAL
    // numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    // if (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    //     escolherNumeroCartas();
    // }
}