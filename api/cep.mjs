async function buscarCep(cep) {
  // async function Avisa que a função vai esperar coisas que demoram,
  //como uma resposta da internet
  const url = `https://viacep.com.br/ws/${cep}/json`;

  const resposta = await fetch(url); //Faz o mesmo GET que o curl fez e espera a resposta chegar.
  // Sem o await, o código seguiria antes da resposta
  console.log("Status: ", resposta.status);

  const dados = await resposta.json(); //Pega o corpo (texto JSON) e transforma num objeto JavaScript, que você consegue usar no código
  console.log(`O CEP ${dados.cep} tem DDD ${dados.ddd}`);
}

buscarCep("13339555");

/* 1. monta a URL
2. faz a requisição  → espera (await)
3. confere o status
4. lê o corpo        → espera (await)
5. usa os dados */

/* Se você nunca vai fazer conta com o valor, ele não é número. */