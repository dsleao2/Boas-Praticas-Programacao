//Desafios finais
//Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log ('Bem vindo!');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = 'Daniele';
console.log (`Olá ${nome}`);

//Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

let linguagemProg = prompt ('Qual a linguagem de programação que você mais gosta?');

console.log (linguagemProg);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 0;
let valor2 = 1;

let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = 50;
let valor2 = 1;

let resultado = valor1 - valor2;

console.log(`A subtração de ${valor1} e ${valor2} é igual a ${resultado}`);


//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt ('Qual é sua idade?');

if (idade > 17){
    console.log ('Maior de idade');
} else {
    console.log('Menor de idade');
}
 

//Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt ('Digite um valor:');
if (numero > 0) {
    alert ('O numero que você escolheu é positivo');

} else if ( numero <0 ) {
    alert ('O numero que você escolheu é negativo');

} else {
    alert(' O numero que você escolheu é zero.');
}

//Use um loop while para imprimir os números de 1 a 10 no console.

let numero = 1;
while (numero <= 10) {
    console.log(numero);
    numero++;
}

//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 8;

if (nota >= 7) {
    console.log('aprovado');
} else {
    console.log ('reprovado');

}


//Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let numero - Math.random ()
console.log (numero);

//Use o Math.ramdon para gerar um número inteiro entre 1 e 10 e exiba esse número no console.


let numero2 = parseInt(Math.random () * 10) + 1;

console.log(numero2);

//Use o Math.ramdon para gerar um número inteiro entre 1 e 1000 e exiba esse número no consol


let numero3 = parseInt(Math.random () * 1000) + 1;

console.log(numero3);
