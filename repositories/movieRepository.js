import Movie from '../models/movie.js';

class MovieRepository {
  async getAllMovies() {
    return await Movie.findAll();
  }

  async getMovieById(id) {
    return await Movie.findByPk(id);
  }

  async createMovie(movieData) {
    return await Movie.create(movieData);
  }

  async updateMovie(id, movieData) {
    return await Movie.update(movieData, { where: { id } });
  }

  async deleteMovie(id) {
    return await Movie.destroy({ where: { id } });
  }
}

export default new MovieRepository();
