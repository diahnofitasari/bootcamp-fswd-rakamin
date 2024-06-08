const { Todo } = require('../../models');

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({ where: { deleted: false } });
    res.json(todos);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch todos' });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      res.json(todo);
    } else {
      res.status(400).send('Todo not found');
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch todo' });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({ title: req.body.title });
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create todo' });
  }
};

const softDeleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (todo) {
      todo.deleted = true;
      await todo.save();
      res.status(200).send();
    } else {
      res.status(400).send('Todo not found');
    }
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete todo' });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  softDeleteTodo
};
