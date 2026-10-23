# 🏗️ API de Obras — Node.js puro

API REST para cadastrar e acompanhar obras, construída **sem frameworks** — só o módulo nativo `node:http` — para entender o que o Express e o Next.js fazem por baixo dos panos.

> Projeto de estudo. Os dados ficam **em memória** (um array): ao reiniciar o servidor, voltam ao estado inicial.

---

## ▶️ Como rodar

Pré-requisito: Node.js 20.12+.

1. Na raiz do repositório, crie um arquivo `.env` com a chave da API:
   ```
   API_KEY=sua-chave-secreta
   ```
2. Suba o servidor (também a partir da raiz):
   ```bash
   node --watch api/servidor.mjs
   ```
3. Acesse `http://localhost:3000/obras`.

Sem `API_KEY` definida, o servidor **não sobe** e mostra um erro.

---

## 📚 Rotas

| Método | Rota | O que faz | Precisa de chave? | Respostas |
| --- | --- | --- | --- | --- |
| `GET` | `/obras` | Lista todas as obras | Não | 200 |
| `GET` | `/obras/:id` | Busca uma obra | Não | 200 · 400 · 404 |
| `POST` | `/obras` | Cria uma obra | **Sim** | 201 · 400 · 401 |
| `PUT` | `/obras/:id` | Edita nome e etapa | **Sim** | 200 · 400 · 401 · 404 |
| `DELETE` | `/obras/:id` | Remove uma obra | **Sim** | 204 · 400 · 401 · 404 |

Outras rotas respondem **404**; outros métodos em `/obras` respondem **405**.

### Exemplos

```bash
# Listar (aberto)
curl -i localhost:3000/obras

# Criar
curl -i -X POST localhost:3000/obras \
  -H "Content-Type: application/json" \
  -H "x-api-key: sua-chave-secreta" \
  -d '{"nome":"Obra Centro","etapa":"Medição"}'

# Editar
curl -i -X PUT localhost:3000/obras/1 \
  -H "Content-Type: application/json" \
  -H "x-api-key: sua-chave-secreta" \
  -d '{"nome":"Obra Renato","etapa":"Instalação"}'

# Remover
curl -i -X DELETE localhost:3000/obras/2 -H "x-api-key: sua-chave-secreta"
```

---

## 🚦 Códigos de status usados

| Código | Quando |
| --- | --- |
| 200 OK | Leitura ou edição com sucesso |
| 201 Created | Obra criada (devolve a obra nova) |
| 204 No Content | Obra removida (sem corpo na resposta) |
| 400 Bad Request | Id inválido, JSON inválido ou campos obrigatórios faltando |
| 401 Unauthorized | Chave de API ausente ou errada |
| 404 Not Found | Obra ou rota inexistente |
| 405 Method Not Allowed | Método não suportado em `/obras` |

---

## 🔐 Segurança

- Rotas que **alteram dados** (POST, PUT, DELETE) exigem o cabeçalho `x-api-key`.
- A chave fica em variável de ambiente (`.env`), **fora do código** — e o `.env` está no `.gitignore`.
- **Fail closed:** sem `API_KEY` configurada, o servidor se recusa a iniciar.

---

## 🧠 Decisões e aprendizados

**Por que `Math.max(...ids) + 1` e não `obras.length + 1` para gerar o id?**
✍️ O `Math.max` sempre procura o maior id do array, já o `length` conta quantas obras existem. Depois de um DELETE, isso pode gerar **id duplicado**:
- Apaga a obra 1 → sobra `[{ id: 2 }]`
- `length + 1` = 1 + 1 = **2** → id repetido! ❌
- `Math.max(2) + 1` = **3** ✅

**Por que o DELETE responde 204 sem corpo, e não com `responderJSON`?**
✍️ O 204 "No Content" não possui corpo de resposta: não há nada a devolver depois de apagar o item, e o `responderJSON` sempre envia um corpo JSON.

**Por que `findIndex` no PUT/DELETE e `find` no GET?**
✍️ O `find` retorna o item, mas o `findIndex` devolve a **posição** da obra no array. O PUT e o DELETE precisam da posição para editar (`obras[posicao]`) ou remover (`splice`) o item com o id correto.

**Por que a API "falha fechada" quando a chave não existe? O que acontecia antes?**
✍️ Antes, sem `API_KEY` definida no servidor, qualquer pessoa conseguia apagar os dados (`undefined !== undefined` dava `false` e a checagem passava). Agora, sem chave configurada, o servidor nem sobe e avisa que a chave não existe: na dúvida, bloqueia.

**Por que construir com `node:http` puro em vez de usar Express?**
✍️ Para entender como o Node e os frameworks trabalham por baixo do código. Agora sei o que o Express automatiza: ler o corpo, rotear e responder JSON.

---

## 🗺️ Próximos passos

- [ ] Persistir as obras em banco de dados (PostgreSQL)
- [ ] Testes automatizados das rotas
- [ ] Reescrever com Express e comparar
- [ ] Separar rotas e validações em módulos
