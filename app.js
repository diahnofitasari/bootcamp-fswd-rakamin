import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize from './config/database.js';
import movieRoutes from './routes/movieRoutes.js';
import userRoutes from './routes/userRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Menyajikan direktori 'public' sebagai direktori statis
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use('/api', movieRoutes);
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.log('Error: ' + err));
