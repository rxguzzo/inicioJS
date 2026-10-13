let varA = 'A';
let varB = 'B';
let varC = 'C';

/* const varATemp = varA;
varA = varB; //B
varB = varC; //C
varC = varATemp; //B */
[varA, varB, varC] = [varB, varC, varA]

console.log( varA + varB + varC);