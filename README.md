# 📦 API – App Mobile de Produtos

API desenvolvida em **Node.js**, utilizando **Express**, **MySQL** e **Sequelize**, com o objetivo de fornecer dados para consumo em um aplicativo **React Native**.

Este projeto é utilizado como **API educacional**, servindo de backend para a disciplina de **Computação Móvel**.

API rodando em: https://api-tmh.onrender.com/
---

## 🎯 Objetivo do Projeto

Disponibilizar uma API simples para:

* Cadastro de categorias
* Cadastro de produtos
* Listagem de produtos
* Filtragem de produtos por categoria

⚠️ **Observação:**

* Não há autenticação de usuários
* Não há pagamento ou pedidos
* O carrinho de compras é gerenciado apenas no aplicativo mobile

---

## 🛠️ Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* Sequelize (ORM)
* CORS

---

## 📁 Estrutura do Projeto

```
src/
 ├─ config/
 │   └─ database.js
 ├─ models/
 │   ├─ index.js
 │   ├─ Produto.js
 │   └─ Categoria.js
 ├─ controllers/
 │   ├─ ProdutoController.js
 │   └─ CategoriaController.js
 ├─ routes/
 │   ├─ produto.routes.js
 │   └─ categoria.routes.js
 ├─ app.js
 └─ server.js
```

---

## ⚙️ Configuração do Banco de Dados

1. Criar um banco de dados MySQL:

```sql
CREATE DATABASE mobile_api;
```

2. Ajustar as credenciais no arquivo:

```
src/config/database.js
```

```js
const sequelize = new Sequelize('mobile_api', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
```

---

## ▶️ Executando o Projeto

1. Instalar as dependências:

```bash
npm install
```

2. Executar a aplicação:

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 📂 Rotas da API

### 🔹 Categorias

#### Listar categorias

```
GET /categorias
```

#### Cadastrar categoria

```
POST /categorias
```

**Exemplo de JSON:**

```json
{
  "nome": "Eletrônicos"
}
```

#### Listar produtos por categoria

```
GET /categorias/:id/produtos
```

---

### 🔹 Produtos

#### Listar produtos

```
GET /produtos
```

#### Buscar produto por ID

```
GET /produtos/:id
```

#### Cadastrar produto

```
POST /produtos
```

**Exemplo de JSON:**

```json
{
  "nome": "Tênis Esportivo",
  "descricao": "Tênis confortável para corrida",
  "preco": 299.90,
  "imagem": "https://via.placeholder.com/150",
  "link_externo": "https://wa.me/55999999999",
  "CategoriumId": 1
}
```

⚠️ **Importante:**
O campo `CategoriumId` foi gerado automaticamente pelo Sequelize devido à convenção de nomes do ORM.

---

## 📱 Consumo pelo App Mobile

Esta API foi projetada para ser consumida por um aplicativo **React Native**, utilizando:

* `fetch` ou `axios`
* Listagem de produtos
* Detalhes de produto
* Filtragem por categoria

---

## 🎓 Observação Didática

Este projeto tem finalidade **educacional**, simulando um backend real para consumo em aplicações mobile, permitindo que o aluno foque em:

* Navegação
* Estado
* Listas
* Integração com API

---

## 👨‍🏫 Autor

Projeto desenvolvido para uso acadêmico na disciplina de **Computação Móvel**.
