import http from "node:http";

const obras = [
  { id: 1, nome: "Obra Renato", etapa: "Contramarco" },
  { id: 2, nome: "Obra Ana", etapa: "Medição" },
];

// Função: um bloco de código com nome, que pode ser reutilizado.
// Os parâmetros (res, status, dados) são as "lacunas" preenchidas a cada chamada.
// A função foi criada para evitar repetição e poluição no código
function responderJSON(res, status, dados) {
  res.writeHead(status, { "Content-Type": "application/json" }); //monta o cabeçalho da resposta, o status "200 ou outro" e o json que eu vejo quando o terminal me retorna.
  res.end(JSON.stringify(dados)); // end envia o texto e encerra a resposta o json stringiffy transforma o dado em JSON de js pra JSON
  //Pense numa carta: writeHead é o envelope, stringify é escrever a carta, end é colocar no correio.
}

// roda a cada requisição que chega.
const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url); //mostra no terminal oq chegou. é o meu olho!
  //req é a requisição (oq o cliente mandou) e dentro dela está o methodo e a url //res é a resposta que vc monta de devolve.
  if (req.method === "GET" && req.url === "/obras") {
    responderJSON(res, 200, obras); //chamada da função
    return;
  } else if (req.method === "GET" && req.url.startsWith("/obras/")) {
    //STARTS with: Pergunta “a URL começa com /obras/?
    //req.url é o obras/2 que chegou o .split gera [',', 'obras', '2'] o number transforma no número 2
    const id = Number(req.url.split("/")[2]);
    //validação -- o id precisa ser um numero inteiro e diferente de 0 para ser encontrado na matriz

    if (!Number.isInteger(id) || id <= 0) {
      return responderJSON(res, 400, { erro: "Id Inválido!" });
    }

    //Para cada obra o da lista, ele pergunta “o.id é igual ao id pedido?” e devolve a primeira que bater, ou undefined se nenhuma bater.
    const obra = obras.find((o) => o.id === id);

    //validação -- não existe obra?
    if (!obra) {
      return responderJSON(res, 404, { erro: "Obra não encontrada!" });
    }

    //retorno das obras
    return responderJSON(res, 200, obra);
  } else if (req.method === "POST" && req.url === "/obras") {
    let corpo = "";

    req.on("data", (pedaco) => {
      corpo += pedaco;
    });

    // ── PARTE 1: o texto é um JSON válido? ─────────────────────────
    // vai guardar o corpo já convertido em objeto
    req.on("end", () => {
      // vai guardar o corpo já convertido em objeto
      let dados;

      try {
        dados = JSON.parse(corpo); // texto → objeto
      } catch (erro) {
        return responderJSON(res, 400, { erro: "JSON Inválido!" });
      }

      //PARTE 2: os campos obrigatórios vieram certos?
      // Para cada campo: 1º "é texto?", 2º "está vazio?".
      // Com o ||, se o 1º já falhar, o 2º nem roda (assim o .trim() nunca roda em undefined).
      if (
        typeof dados.nome !== "string" ||
        dados.nome.trim() === "" ||
        typeof dados.etapa !== "string" ||
        dados.etapa.trim() === ""
      ) {
        return responderJSON(res, 400, {
          erro: "Nome e Etapa são obrigatórios!",
        });
      }

      // ── PARTE 3: criar e salvar ─────────────────────────────────────
      // Math.max e não length: o length conta QUANTAS obras existem,
      // não qual é o maior id. Depois de uma exclusão, os dois deixam de ser iguais.
      const novoId = Math.max(...obras.map((o) => o.id)) + 1;

      //4. Montar uma obra nova
      const novaObra = { 
        id: novoId, 
        nome: dados.nome.trim(),
        etapa: dados.etapa.trim(), }
        ;

      //5. Salvar na lista e responder // push: adiciona no fim da lista
      obras.push(novaObra);
      responderJSON(res, 201, novaObra); // 201 = criado, devolvendo a obra nova
    });

    //validações métodos e páginas inválidas.
  } else if (req.url === "/obras" && req.method !== "GET") {
    responderJSON(res, 405, { erro: "Método inválido!" });
  } else {
    responderJSON(res, 404, { erro: "Página não encontrada!" });
  }
});

servidor.listen(3000, () => {
  //Abre a porta 3000 e fica escutando. O callback roda uma vez só, quando o servidor sobe, e é por isso que aparece "API rodando".
  console.log("API rodando em http://localhost:3000");
});
