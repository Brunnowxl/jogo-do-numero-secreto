let listaNumeroSorteado = [];
let limiteDaLista = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
        let msgTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`; 
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', msgTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else { 
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    } 
}

msgInicial()
function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function msgInicial() {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function numeroAleatorio() {
        let gerarNumero = parseInt(Math.random() * limiteDaLista + 1);
        let quantidadeDeElementosNaLista = listaNumeroSorteado.length;

        if (quantidadeDeElementosNaLista == limiteDaLista) {
            listaNumeroSorteado = [];
        }

        if (listaNumeroSorteado.includes(gerarNumero)) {
            return numeroAleatorio();
        } else {
            listaNumeroSorteado.push(gerarNumero);
            console.log(listaNumeroSorteado)
            return gerarNumero;
        }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ('')
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
