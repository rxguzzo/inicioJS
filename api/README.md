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

> ✍️ *Preencha com suas palavras — é exatamente o que um entrevistador vai perguntar.*

**Por que `Math.max(...ids) + 1` e não `obras.length + 1` para gerar o id?**
✍️ _____

**Por que o DELETE responde 204 sem corpo, e não com `responderJSON`?**
✍️ _____

**Por que `findIndex` no PUT/DELETE e `find` no GET?**
✍️ _____

**Por que a API "falha fechada" quando a chave não existe? O que acontecia antes?**
✍️ _____

**Por que construir com `node:http` puro em vez de usar Express?**
✍️ _____

---

## 🗺️ Próximos passos

- [ ] Persistir as obras em banco de dados (PostgreSQL)
- [ ] Testes automatizados das rotas
- [ ] Reescrever com Express e comparar
- [ ] Separar rotas e validações em módulos
