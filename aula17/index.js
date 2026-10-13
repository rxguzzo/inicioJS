/* //funções -> executa ações 
function saudacao(nome) {
 return `Bom dia! ${nome}!`;
}

/* saudacao('Luiz'); */
/* const variavel = saudacao('Luiz');
console.log(variavel); */

function soma(x, y) {
  const resultado = x + y;
  return resultado; //return fim da function
}

/* console.log(soma(2,2)); */
const resultado = soma(2, 2);
console.log(resultado);

const raiz = (n) => n ** 0.5; //isso é uma function: => faz a função do "function"
console.log(raiz(9));
