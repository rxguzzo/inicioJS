//array -> lista de coisas = []

//                 0       1       2
const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
/* console.log(alunos); */
/* console.log(alunos[2]); //joão que é o indice 2 */
/* alunos[0] = "Eduardo";
console.log(alunos[0]);
console.log(alunos.length); */ //tamanho do array 
//alunos.push('Nicoly') -> enfia algo no fim da array
//alunos.unshift -> adiciona no começo da array
                        //shift remove no começo
/* const removido = alunos.pop(); // -> remove no final do array, altera os indices
console.log(removido); // 
console.log(alunos);
console.log(alunos.slice(0,3)); */

console.log (alunos instanceof Array) //alunos é um array?
console.log(typeof alunos);

//Com const, você pode alterar o conteúdo de um objeto/array, mas não pode reatribuir a variável para outro valor.
//pessoa.idade = 21; // ✅
//pessoa.nome = 'João'; // ✅

/* Isso pode

const array = [1, 2, 3, 4, 5];
array.pop();
array[0] = 1024;
console.log(array); // [ 1024, 2, 3, 4 ]
 
Isso NÃO pode

const array = [1, 2, 3, 4, 5];
array = 'Legal'; // Assignment to constant variable. */