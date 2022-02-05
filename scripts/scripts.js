let listaDeCartas = [];
let renderizarCartas = document.querySelector('section');
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let cartasMarcadas = [];
let paresEncontrados = 0;
let jogadas = 0;
let bancoDeImagens = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];
let imagem = undefined;
let intervalo = undefined;
let vitoria = false;
let relogio = undefined;
// FUNÇÃO DE ESCOLHER NÚMERO DE CARTAS, FAZER PARES E EMBARALHAR
function escolherNumeroCartas() {
    while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
        numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
    for (let i = 0; i < numeroCartas; i = i + 1) {
        renderizarCartas.innerHTML += `
        <figure class= "carta-pai carta-${i}" data-identifier="card" onclick="virarCarta(${i})">
            <div class="carta-frente carta-frente-${i} carta" data-identifier="front-face"><h2></h2><img class="imagem par-${i % (numeroCartas / 2)}" src="${bancoDeImagens[i % (numeroCartas / 2)]}"></div>
            <div class="carta-costas carta-costas-${i} carta" data-identifier="back-face"><h2></h2><h2></h2></div>
        </figure>
        `;
    }
    for (i = 0; i < numeroCartas; i++) {
        imagem = renderizarCartas.querySelector(`.carta-${i}`).outerHTML;
        listaDeCartas.push(imagem);
    }
    listaDeCartas.sort(comparador);
    renderizarCartas.innerHTML = "";
    for (let i = 0; i < listaDeCartas.length; i++) {
        renderizarCartas.innerHTML += `${listaDeCartas[i]}`;
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
    //  DETECÇÃO DE CLIQUE NA MESMA CARTA
    cartasMarcadas.push(numero);
    if ((cartasMarcadas[0]) === (cartasMarcadas[1])) {
        [i % (numeroCartas / 2)]
        cartasMarcadas.splice(1);
    }
    console.log(cartasMarcadas);
    // BUG QUE NÃO SEI MOTIVO NA LINHA ABAIXO (SE APAGAR BUGA O JOGO)
    carta200 = renderizarCartas.children[(cartasMarcadas[1] % 7)].children[0].children[1].classList.value; //POR ALGUM MOTIVO BUGA SE TIRAR ISSO

    if (cartasMarcadas.length >= 2 && renderizarCartas.children[cartasMarcadas[0] % (numeroCartas / 2)].children[0].children[1].classList.value === renderizarCartas.children[cartasMarcadas[1] % (numeroCartas / 2)].children[0].children[1].classList.value) {
        // BUG QUE NÃO SEI MOTIVO NA LINHA ABAIXO (SE APAGAR BUGA O JOGO)
        // document.getElementById("virarCarta(1)")
        console.log(cartasMarcadas);
        // DESATIVA ONCLICK DAS CARTAS VIRADAS IGUAIS
        document.querySelector(`.carta-${cartasMarcadas[0]}`).setAttribute('onclick', '');
        document.querySelector(`.carta-${cartasMarcadas[1]}`).setAttribute('onclick', '');
        // CONTROLE DE NÚMERO DE JOGADAS E PARES ENCONTRADOS
        paresEncontrados++;
        jogadas++;
        console.log("Foram encontrados: " + paresEncontrados);
        console.log(jogadas);
        cartasMarcadas = [];
        setTimeout(alertaVitoria, 1000);
    } else {
        desvirarAutomático();
        jogadas++;
        console.log(jogadas);
        cartasMarcadas = [];
    }
}
// FUNÇÃO PARA DESVIRAR CARTAS AUTOMATICAMENTE
function desvirarAutomático() {
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
    }, 1000);
}
//FUNÇÃO PARA DETECTAR E DECLARA A VITÓRIA
function alertaVitoria() {
    if (parseInt(paresEncontrados) === parseInt(numeroCartas / 2)) {
        vitoria = true;
        alert(`Você ganhou em ${jogadas} jogadas em ${relogio.innerHTML} segundos!`);
        // BÔNUS DE JOGAR NOVAMENTE BUGANDO COM CARTAS DUPLICANDO
        // let jogarNovamente = prompt("Gostaria de jogar novamente?");
        // if (jogarNovamente === "sim") {
        //     reset();
        //     // escolherNumeroCartas();
        // }
    }
}
// FUNÇÃO DE RESETAR O JOGO
function reset() {
    renderizarCartas.innerHTML = ``;
    numeroCartas = undefined;
    virarFrente = undefined;
    virarCostas = undefined;
    cartasMarcadas = [];
    paresEncontrados = 0;
    jogadas = 0;
    imagem = undefined;
    vitoria = false;
}
// FUNÇÃO DO RELOGIO
function tempoPassando() {
    if (vitoria === true) {
        clearInterval(intervalo);
    } else {
        relogio = document.querySelector("time");
        relogio.innerHTML = parseInt(relogio.innerHTML) + 1;
    }
}
intervalo = setInterval(tempoPassando, 1000);
// MODELO

// `
// <figure class= "carta-pai carta-${i}" data-identifier="card" onclick="virarCarta(${i})">
//     <div class="carta-frente carta-frente-${i} carta" data-identifier="front-face"><h2>FRENTE ${i}</h2><img class="imagem par-${i % (numeroCartas / 2)}" src="${bancoDeImagens[i % (numeroCartas / 2)]}"></div>
//     <div class="carta-costas carta-costas-${i} carta" data-identifier="back-face"><h2>COSTAS ${i}</h2><h2>PAR ${i % (numeroCartas / 2)}</h2></div>
// </figure>
// `