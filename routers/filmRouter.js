const express = require('express');
const router = express.Router();
const FilmController = require('../controllers/FilmController.js');

// Route untuk menampilkan semua film
router.get('/films', FilmController.getAllFilms);

// Route untuk menampilkan film berdasarkan ID
router.get('/films/:id', FilmController.getFilmById);

// Route untuk menampilkan semua kategori
router.get('/categories', FilmController.getAllCategories);

// Route untuk menampilkan film berdasarkan kategori
router.get('/categories/:categoryId/films', FilmController.getFilmsByCategory);

module.exports = router;
