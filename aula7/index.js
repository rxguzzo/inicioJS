/*
REGRAS
não podemos CRIAR CONSTANTES com palavras reservadas
CONSTANTES precisam ter nomes significativos
Não pde começar o nome de uma CONSTANTE com um numero 
Não podem conter espaço ou traçõs
utilizamos camelcase
case-sensitive
NÃO UTILIZE VAR, UTILIZE Const. */

//correto
/* const nome = 'João'; 
console.log(nome); */

//errado
/* nome = 'Otpavio'; */ // CONST , CONSTANTES,,não pode ter o valor alterado

//com numeros 

const primeiroNumero = 5; //Number 
const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof primeiroNumero);



