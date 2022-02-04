let listaDeCartas = [];
let renderizarCartas = document.querySelector('section');
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let cartasMarcadas = [];
let teste = undefined;
// poderia também, botar todos os nomes das imagens num array,
// e chamar eles com os índices dos números baralhados...
// tipo... nome = nomes[indicesBaralhados[i]]
let bancoDeImagens = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];
let imagem = undefined;
// img src="bancoDeImagens[${i}]"
// FUNÇÃO DE ESCOLHER NÚMERO DE CARTAS, FAZER PARES E EMBARALHAR
function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
        numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
    // renderizarCartas = document.querySelector('section');
    // for (let n = 0; n < 2; n++) {
    for (let i = 0; i < numeroCartas; i = i + 1) {
        renderizarCartas.innerHTML += `
        <figure class= "carta-pai carta-${i}" data-identifier="card" onclick="virarCarta(${i})">
            <div class="carta-frente carta-frente-${i} carta" data-identifier="front-face"><h2>FRENTE ${i}</h2><img class="imagem imagem-${i}" src="${bancoDeImagens[i % (numeroCartas / 2)]}"></div>
            <div class="carta-costas carta-costas-${i} carta" data-identifier="back-face"><h2>COSTAS ${i}</h2></div>
        </figure>
        `;
    }
    for (i = 0; i < numeroCartas; i++) {
        imagem = renderizarCartas.querySelector(`.carta-${i}`);
        listaDeCartas.push(imagem);
    }
    listaDeCartas.sort(comparador);
    console.log(renderizarCartas);
    // if (parseInt(numeroCartas) === parseInt(listaDeCartas.length)) {
    //     listaDeCartas.sort(comparador);
    //     console.log(listaDeCartas);
    // }

    // console.log(imagem);
    // console.log(listaDeCartas);
    // renderizarCartas.innerHTML = "";
    for (let i = 0; i < listaDeCartas.length; i++) {
        // teste = listaDeCartas[i].innerHTML;
        // console.log(teste);
        teste = renderizarCartas.querySelector(`.carta-${i}`);
        let teste2 = `${listaDeCartas[i]}`;
        console.log(teste);
        // renderizarCartas.innerHTML += `${listaDeCartas[i]}`;
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

