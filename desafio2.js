console.log('Boa vindas');

let nome = 'Gabriel';
alert(`Ola ${nome}`);
console.log(`Ola ${nome}`);

let linguagemProgramacao = prompt('Qual a linguagem de programacao voce mais gosta?');
console.log(linguagemProgramacao);

let valor1 = 19;
let valor2 = 5;

let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}`);

valor1 = 23;
valor2 = 5;
resultado = valor1 - valor2;
console.log(`A diferente entre ${valor1} + ${valor2} é igual a ${resultado}`)

let idade = prompt('Digite a sua idade');

let verificaIdade = idade > 18 ? 'Maior de Idade' : 'Menor de idade';
console.log(verificaIdade);

let numero = parseFloat(prompt('Digite um numero'));
let verificaNumero = numero > 0 ? 'Positivo' : 'Negativo';

while (numero <= 10) {
    console.log(numero);
    numero++;
}

let nota = 8;
let verificaNota = nota >= 7 ? 'Aprovado' : 'Reprovado';

let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);

let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(numeroAleatorio2);

let numeroAleatorio3 = parseInt(Math.random() * 1000 + 1);