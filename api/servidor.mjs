import http from "node:http";

const obras = [
  { id: 1, nome: "Obra Renato", etapa: "Contramarco" },
  { id: 2, nome: "Obra Ana", etapa: "Medição" },
];

// roda a cada requisição que chega.
const servidor = http.createServer((req, res) => {
  //req é a requisição (oq o cliente mandou) e dentro dela está o methodo e a url //res é a resposta que vc monta de devolve.
  console.log(req.method, req.url); //mostra no terminal oq chegou. é o meu olho!
  if (req.method === "GET" && req.url === "/obras") {
    res.writeHead(200, { "Content-Type": "application/json" }); //monta o cabeçalho da resposta, o status 200 e o json que eu vejo quando o terminal me retorna.
    res.end(JSON.stringify(obras)); //converte o array JavaScript em texto JSON, porque pela rede só trafega texto. Depois o end envia esse texto e encerra a resposta.
    //o return encerra a função logo depois de responder, para nada mais rodar
    //Sem ele, ou sem um else, o código segue em frente e tenta responder duas vezes. Uma requisição só pode ter uma resposta.
    return;
  } else if (req.url === "/obras" && req.method !== "GET") {
    //define o status e os cabeçalhos
    res.writeHead(405, { "Content-Type": "application/json" });
    // end envia o texto e encerra a resposta o json stringiffy transforma o dado em JSON de js pra JSON
    res.end(JSON.stringify({ erro: "Método errado" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ erro: "Página não encontrada" }));
  }
  //Pense numa carta: writeHead é o envelope, stringify é escrever a carta, end é colocar no correio.
});

servidor.listen(3000, () => {
  //Abre a porta 3000 e fica escutando. O callback roda uma vez só, quando o servidor sobe, e é por isso que aparece "API rodando".
  console.log("API rodando em http://localhost:3000");
});
