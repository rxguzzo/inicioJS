async function buscarCep(cep) {
  // async function Avisa que a função vai esperar coisas que demoram,
  //como uma resposta da internet
  // PORTA 1: formato inválido → nem chama a API - é colocado aqui para nem rodar o código com um CEP inválido.
  if (!/^\d{8}$/.test(cep)){
    console.log("CEP Inválido!"); /* / ... / → abre e fecha a regra ^ → “começa aqui” \d → “um dígito (0 a 9)” {8} → “exatamente 8 vezes” $ → “termina aqui” */
    return;

  }
  const url = `https://viacep.com.br/ws/${cep}/json`;

  const resposta = await fetch(url); //Faz o mesmo GET que o curl fez e espera a resposta chegar.
  // Sem o await, o código seguiria antes da resposta
  console.log("Status: ", resposta.status);


  //PORTA 2: o ViaCEP respondeu, mas o CEP não existe
  const dados = await resposta.json(); //Pega o corpo (texto JSON) e transforma num objeto JavaScript, que você consegue usar no código

  if(dados.erro){
    console.log("CEP Inexistente!")
    return;
  }
  
  console.log(`O CEP ${dados.cep} tem DDD ${dados.ddd}`);
}

buscarCep("1333955");

/* 1. monta a URL
2. faz a requisição  → espera (await)
3. confere o status
4. lê o corpo        → espera (await)
5. usa os dados */

/* Se você nunca vai fazer conta com o valor, ele não é número. */