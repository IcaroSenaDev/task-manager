# Gerenciador de Tarefas (Task Manager)

Este projeto consiste em um aplicativo simples para gerenciar uma lista de tarefas. O sistema permite realizar operações básicas de CRUD (Criar, Listar, Atualizar e Deletar tarefas). Foi desenvolvido utilizando **Node.js** com o framework **Express** para o backend, e **HTML**, **CSS** e **JavaScript** para o frontend.

## Tecnologias Usadas

- **Node.js** com o framework **Express** para o backend.
- **HTML** para a estrutura da página web.
- **CSS** para o design da interface.
- **JavaScript** para a manipulação do DOM e comunicação com a API.

## Funcionalidade

O sistema permite ao usuário:
- **Criar** uma nova tarefa.
- **Listar** todas as tarefas.
- **Editar** o título de uma tarefa existente.
- **Deletar** uma tarefa.

## Como Rodar o Projeto

### 1. Clone o Repositório

Primeiro, clone este repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/task-manager.git
cd task-manager
```

### 2. Instale as Dependências

Antes de rodar o projeto, é necessário instalar as dependências do Node.js. No terminal, execute o seguinte comando:

```bash
npm install
```

### 3. Rodando o servidor

Para iniciar o servidor, execute:

```bash
node server.js
```

### 4. Acessando a Página Web

Abra o navegador e acesse http://localhost:3000.A página exibirá um formulário onde você pode criar novas tarefas e verá uma lista das tarefas existentes.

### 5. Usando o Gerenciador de Tarefas

- **Adicionar Tarefa: Digite o título de uma tarefa no campo de entrada e clique no botão "Adicionar Tarefa".**
- **Editar Tarefa: Clique no botão "Editar" ao lado de uma tarefa para editar seu título.**
- **Deletar Tarefa: Clique no botão "Deletar" ao lado de uma tarefa para removê-la da lista.**
- **Visualizar Tarefas: As tarefas serão exibidas em uma lista abaixo do formulário, com a opção de editar ou excluir.**