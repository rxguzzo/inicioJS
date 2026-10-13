/* 
* ARITMÉTICOS 
* + Adição / Concatenação 
* - /
* ** POTENCIAÇÃO
* % resto da divisão
* 
* --------- PRECEDENCIA ---------- (ORDEM DE PRIORIDADE)
* ()
* **
* * / %
* + -
* */

/* const num1 = 2;
const num2 = 10
console.log(num1 ** num2); */

/* let contador = 1;
contador++; // 2 // incremento
contador++; // 3
++contador; //4 // decremento
++contador; //5
contador--;
console.log(contador); */

const passo = 2;
let contador = 1;
/* OPERADOR DE ATRIBUIÇÃO '=+' -> */contador += passo; /* contador = contador + passo; */
console.log(contador);

// NaN - Not a number
//parse int converte para inteiro
//parse float converte para decimais
//number é mais fácil 

const num1 = 10;
const num2 = Number('5');
console.log(num1 + num2);
console.log(typeof num2);