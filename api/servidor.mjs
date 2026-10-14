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
  //req é a requisição (oq o cliente mandou) e dentro dela está o methodo e a url //res é a resposta que vc monta de devolve.
  console.log(req.method, req.url); //mostra no terminal oq chegou. é o meu olho!
  if (req.method === "GET" && req.url === "/obras") {
    responderJSON(res, 200, obras); //chamada da função

    return;
  } else if (req.url === "/obras" && req.method !== "GET") {
    responderJSON(res, 405, {erro: "Método inválido!"});
  } else {
    responderJSON(res, 404, {erro: "Página não encontrada!"});
  }
});

servidor.listen(3000, () => {
  //Abre a porta 3000 e fica escutando. O callback roda uma vez só, quando o servidor sobe, e é por isso que aparece "API rodando".
  console.log("API rodando em http://localhost:3000");
});
