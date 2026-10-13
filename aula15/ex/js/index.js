//ENTRADA - USUÁRIO ESCOLHE E PASSA O NUMERO
const numero = Number(prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = document.getElementById('raiz');
const int = document.getElementById('int');
const nan = document.getElementById('nan')
const baixo = document.getElementById('baixo')
const cima = document.getElementById('cima')
const duasCasas = document.getElementById('duascasas')


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número - 2 é ${numero - 2}`
raiz.innerHTML =`<p>Raiz quadrada: ${numero ** (1/2)}`
int.innerHTML =`<p>É inteiro: ${Number.isInteger(numero)}`
nan.innerHTML =`<p>É nan: ${Number.isNaN(numero)}`
baixo.innerHTML =`<p>Arredondando para baixo: ${Math.floor(numero)}`
cima.innerHTML =`<p>Arredondando para cima: ${Math.ceil(numero)}`
duasCasas.innerHTML =`<p>Com duas casas decimais: ${numero.toFixed(2)}`

