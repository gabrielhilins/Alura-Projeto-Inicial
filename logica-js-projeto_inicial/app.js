alert('Bem vindo ao jogo do numero secreto')
let numeroMaximo = 400;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    }
    else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }

        tentativas++;
    }
}

// Operador ternario
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Voce descobriu o numero secreto! (${numeroSecreto} após ${tentativas} ${palavraTentativa})`);


// if (tentativas > 1) {
    alert(`Voce descobriu o numero secreto! (${numeroSecreto} após ${tentativas} tentativas)`);
    console.log('Resultado da comparação:', chute == numeroSecreto);
// } else {
    //alert(`Voce descobriu o numero secreto! (${numeroSecreto} após ${tentativas} tentativa)`);
    //console.log('Resultado da comparação:', chute == numeroSecreto);
//}


