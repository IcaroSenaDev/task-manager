const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Para servir arquivos estáticos
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos a partir da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para processar dados JSON no corpo das requisições
app.use(bodyParser.json());

// Rota para listar todas as tarefas
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Rota para criar uma nova tarefa
app.post('/tasks', (req, res) => {
  const task = req.body;
  task.id = tasks.length + 1;  // Gerando ID simples
  tasks.push(task);
  res.status(201).json(task);
});

// Rota para atualizar uma tarefa existente
app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedTask = req.body;

  let task = tasks.find(t => t.id === taskId);
  if (task) {
    task.title = updatedTask.title || task.title;
    task.completed = updatedTask.completed !== undefined ? updatedTask.completed : task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Rota para deletar uma tarefa
app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(t => t.id === taskId);

  if (index !== -1) {
    tasks.splice(index, 1);
    res.status(200).json({ message: 'Task deleted' });
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Rota para servir a página inicial (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let tasks = [];  // Array para armazenar as tarefas

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
