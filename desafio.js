alert('Boas vindas ao nosso site!');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

let mensagemDeErro = alert('Erro, preencha todos os campos');

nome = prompt('Qual o nome do Usuário?')
idade = prompt('Qual sua idade');


if (idade > 18) {
    alert('Pode tirar a habilitacao');
}