/* nome = 'Luiz'; */ //não faça isso
/* let nome = "Gustavo" - não pode ser redeclarado, mas pode ter o valor alterado*/
/* console.log(nome); */
     

const nome = "Gustavo"; // não será reatribuído
let idade = 20; // pode mudar
var cidade = "Indaiatuba"; //variavel global

console.log(nome);   // Gustavo
console.log(idade);  // 20
console.log(cidade); // Indaiatuba

idade = 21;
cidade = "Campinas";

console.log(idade);  // 21
console.log(cidade); // Campinas

/* | Palavra | Pode mudar? | Escopo     |
| ------- | ----------- | ---------- |
| `const` | ❌ Não       | bloco `{}` |
| `let`   | ✅ Sim       | bloco `{}` |
| `var`   | ✅ Sim       | função     | */
