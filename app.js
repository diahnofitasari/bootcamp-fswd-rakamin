const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const db = require('./models');

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Movies API',
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/users', require('./routes/users'));
app.use('/movies', require('./routes/movies'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
