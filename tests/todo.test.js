const request = require('supertest');
const app = require('../src/app');
const sequelize = require('../src/database');
const Todo = require('../src/models/todo');

beforeAll(async () => {
    await sequelize.sync({ force: true });
});

afterEach(async () => {
    await Todo.destroy({ where: {}, truncate: true });
});

describe('Todo API', () => {
    test('should create a new todo', async () => {
        const response = await request(app)
            .post('/api/todos')
            .send({ title: 'New Todo' });
        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe('New Todo');
    });

    test('should list all todos', async () => {
        await Todo.create({ title: 'Test Todo' });
        const response = await request(app).get('/api/todos');
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(1);
    });

    test('should get a todo by id', async () => {
        const todo = await Todo.create({ title: 'Test Todo' });
        const response = await request(app).get(`/api/todos/${todo.id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.title).toBe('Test Todo');
    });

    test('should soft delete a todo', async () => {
        const todo = await Todo.create({ title: 'Test Todo' });
        const response = await request(app).delete(`/api/todos/${todo.id}`);
        expect(response.statusCode).toBe(204);
        const deletedTodo = await Todo.findByPk(todo.id);
        expect(deletedTodo.deleted).toBe(true);
    });
});
