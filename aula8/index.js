const name = "Gustavo Guzzo Sanches";
const year = 20;
const height = 1.71;
const weight = 75;
const anoNascimento = 2005;
let imc;

imc = weight / (height * height);

/* console.log(
  name,
  "tem",
  year,
  "anos",
  "pesa",
  weight,
  "tem",
  height,
  "de altura",
  "e seu imc é de: ",
  imc,
  name,
  "nasceu em:",
  anoNascimento,
); */

//template string

console.log(
  `${name},
  tem,
  ${year},
  anos,
  pesa,
  ${weight} kg,
  tem,
  ${height} m,
  de altura,
  e seu ${imc} é de:,
  ${imc},
  ${name},
  nasceu em:,
  ${anoNascimento},`,
);
