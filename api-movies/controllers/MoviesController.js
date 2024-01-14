const Movie = require("../models/Movie");

exports.getAllMovies = async (req, res) => {
  try {
    const { page, limit, sortField, sortOrder } = req.query;
    const sort = {};
    sort[sortField] = sortOrder === "asc" ? 1 : -1;
    const skip = (page - 1) * limit;

    const totalPages = await Movie.countDocuments();

    const movies = await Movie.find().sort(sort).skip(skip).limit(limit);

    const response = {
      page: parseInt(page),
      next: parseInt(page) + 1,
      limit: parseInt(limit),
      totalPages: Math.ceil(totalPages / limit),
      movies,
    };

    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await Movie.findById(id);
  res.json(movie);
};

exports.createMovie = async (req, res) => {
  const {
    title,
    year,
    runtime,
    director,
    actors,
    plot,
    posterUrl,
    genres,
    countries,
    imdbRating,
    imdbId,
    type,
    lastUpdated,
  } = req.body;

  const movie = new Movie({
    title,
    year,
    runtime,
    director,
    actors,
    plot,
    posterUrl,
    genres,
    countries,
    imdbRating,
    imdbId,
    type,
    lastUpdated,
  });

  await movie.save();
  res.json(movie);
};


exports.updateMovie = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    year,
    runtime,
    director,
    actors,
    plot,
    posterUrl,
    genres,
    countries,
    imdbRating,
    imdbId,
    type,
    lastUpdated,
  } = req.body;

  const movie = await Movie.findByIdAndUpdate(
    id,
    {
      title,
      year,
      runtime,
      director,
      actors,
      plot,
      posterUrl,
      genres,
      countries,
      imdbRating,
      imdbId,
      type,
      lastUpdated,
    },
    { new: true }
  );

  res.json(movie);
};

exports.deleteMovie = async (req, res) => {
  const { id } = req.params;
  //await Movie.findByIdAndDelete(id);
  res.json({ message: "Movie deleted" });
};