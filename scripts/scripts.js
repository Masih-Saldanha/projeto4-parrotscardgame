let listaDeCartas = [];
let renderizarCartas = document.querySelector('section');
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let cartasMarcadas = [];
// FUNÇÃO DE ESCOLHER NÚMERO DE CARTAS, FAZER PARES E EMBARALHAR
function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
    // renderizarCartas = document.querySelector('section');
	for(let i = 0; i < numeroCartas; i = i + 1) {
		renderizarCartas.innerHTML += `
        <figure class= "carta-${i}" data-identifier="card" onclick="virarCarta(${i})">
            <div class="carta-frente carta-frente-${i} carta" data-identifier="front-face"><h2>FRENTE ${i}</h2></div>
            <div class="carta-costas carta-costas-${i} carta" data-identifier="back-face"><h2>COSTAS ${i}</h2></div>
        </figure>
        `;
        listaDeCartas.push(`${i}`);
        if (parseInt(numeroCartas) === parseInt(listaDeCartas.length)) {
            listaDeCartas.sort(comparador);
            console.log(listaDeCartas);
        }
    }
        renderizarCartas.innerHTML = "";
        for (let n = 0; n < listaDeCartas.length; n++) {
            renderizarCartas.innerHTML += `
            <figure class= "carta-${listaDeCartas[n]}" data-identifier="card" onclick="virarCarta(${listaDeCartas[n]})">
                <div class="carta-frente carta-frente-${listaDeCartas[n]} carta" data-identifier="front-face"><h2>FRENTE ${listaDeCartas[n]}</h2></div>
                <div class="carta-costas carta-costas-${listaDeCartas[n]} carta" data-identifier="back-face"><h2>COSTAS ${listaDeCartas[n]}</h2></div>
            </figure>
            `;
        }
}
escolherNumeroCartas();
// FUNÇÃO PARA EMBARALHAR ARRAY DE CARTAS
function comparador() {
    return Math.random() - 0.5;
}
// FUNÇÃO PARA VIRAR AS CARTAS AO CLICK
function virarCarta(numero) {
    virarFrente = document.querySelector(`.carta-frente-${numero}`);
    virarCostas = document.querySelector(`.carta-costas-${numero}`);
    virarFrente.classList.add("virar-frente");
    virarCostas.classList.add("virar-costas");
    cartasMarcadas.push(numero);
    if (cartasMarcadas[0] === cartasMarcadas[1]) {
        cartasMarcadas.splice(1);
    } 
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

