import express from 'express';
import multer from 'multer';
import path from 'path';
import movieController from '../controllers/movieController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Menggunakan timestamp untuk nama file
  }
});

const upload = multer({ storage: storage });

router.get('/movies', movieController.getAllMovies);
router.get('/movies/:id', movieController.getMovieById);
router.post('/movies', upload.single('movie_poster'), movieController.createMovie);
router.patch('/movies/:id', upload.single('movie_poster'), movieController.updateMovie); // Gunakan endpoint ini untuk pembaruan parsial
router.delete('/movies/:id', movieController.deleteMovie);

export default router;
