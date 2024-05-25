const db = require('../models');

exports.getAllMovies = async (req, res) => {
  const limit = 10;
  const offset = (req.query.page - 1) * limit;
  try {
    const movies = await db.Movie.findAll({ limit, offset });
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching movies' });
  }
};

exports.createMovie = async (req, res) => {
  const { title, genre, year } = req.body;
  try {
    const movie = await db.Movie.create({ title, genre, year });
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error creating movie' });
  }
};

exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, year } = req.body;
  try {
    const movie = await db.Movie.findByPk(id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    movie.title = title;
    movie.genre = genre;
    movie.year = year;
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error updating movie' });
  }
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await db.Movie.findByPk(id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });

    await movie.destroy();
    res.json({ message: 'Movie deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting movie' });
  }
};
