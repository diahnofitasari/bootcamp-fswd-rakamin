const express = require('express');
const todoRoutes = require('./routes/todo');
const sequelize = require('./database');

const app = express();
app.use(express.json());
app.use('/api', todoRoutes);

sequelize.sync();

module.exports = app;
