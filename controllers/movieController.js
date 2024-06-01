import movieRepository from '../repositories/movieRepository.js';

class MovieController {
  async getAllMovies(req, res) {
    try {
      const movies = await movieRepository.getAllMovies();
      movies.forEach(movie => {
        if (movie.movie_poster) {
          movie.movie_poster = `${req.protocol}://${req.get('host')}/images/${movie.movie_poster}`;
        }
      });
      res.json(movies);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to fetch movies' });
    }
  }

  async getMovieById(req, res) {
    try {
      const movie = await movieRepository.getMovieById(req.params.id);
      if (movie) {
        if (movie.movie_poster) {
          movie.movie_poster = `${req.protocol}://${req.get('host')}/images/${movie.movie_poster}`;
        }
        res.json(movie);
      } else {
        res.status(400).json({ error: 'Movie not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to fetch movie' });
    }
  }

  async createMovie(req, res) {
    try {
      const movieData = req.body;
      if (req.file) {
        movieData.movie_poster = req.file.filename; // Simpan nama file relatif dari file gambar
      }
      const movie = await movieRepository.createMovie(movieData);
      if (movie.movie_poster) {
        movie.movie_poster = `${req.protocol}://${req.get('host')}/images/${movie.movie_poster}`;
      }
      res.status(201).json(movie);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to create movie' });
    }
  }

  async updateMovie(req, res) {
    try {
      const movieData = req.body;
      if (req.file) {
        movieData.movie_poster = req.file.filename; // Simpan nama file relatif dari file gambar
      }
      const existingMovie = await movieRepository.getMovieById(req.params.id);
      if (!existingMovie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      const updatedMovie = {
        ...existingMovie.dataValues, // Mengambil data lama
        ...movieData // Menggabungkan dengan data baru
      };
      await movieRepository.updateMovie(req.params.id, updatedMovie);
      if (updatedMovie.movie_poster) {
        updatedMovie.movie_poster = `${req.protocol}://${req.get('host')}/images/${updatedMovie.movie_poster}`;
      }
      res.status(200).json(updatedMovie);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to update movie' });
    }
  }

  async deleteMovie(req, res) {
    try {
      await movieRepository.deleteMovie(req.params.id);
      res.sendStatus(200);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: 'Failed to delete movie' });
    }
  }
}

export default new MovieController();
