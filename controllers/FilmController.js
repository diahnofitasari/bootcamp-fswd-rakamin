const { Film, Category } = require('../models/index.js'); // Mengimport model Film dan Category

class FilmController {
  // Menampilkan data seluruh list film
  static async getAllFilms(req, res) {
    try {
      const films = await Film.findAll();
      res.json(films);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Menampilkan data film tertentu berdasarkan id
  static async getFilmById(req, res) {
    try {
      const film = await Film.findByPk(req.params.id);
      if (!film) return res.status(404).json({ error: 'Film not found' });
      res.json(film);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Menampilkan data list category
  static async getAllCategories(req, res) {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  // Menampilkan data list film berdasarkan category
  static async getFilmsByCategory(req, res) {
    try {
      const category = await Category.findByPk(req.params.categoryId, {
        include: Film // Include Film dalam hasil query
      });
      if (!category) return res.status(404).json({ error: 'Category not found' });
      res.json(category.Films); // Mengakses property Films dari hasil query category
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = FilmController;
