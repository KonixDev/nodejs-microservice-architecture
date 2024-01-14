const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

module.exports = {
  getAllMovies,
};
