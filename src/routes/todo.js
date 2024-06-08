const express = require('express');
const {
  getAllTodos,
  getTodoById,
  createTodo,
  softDeleteTodo
} = require('../controllers/todoController');
const router = express.Router();

router.get('/todos', getAllTodos);
router.get('/todos/:id', getTodoById);
router.post('/todos', createTodo);
router.delete('/todos/:id', softDeleteTodo);

module.exports = router;
