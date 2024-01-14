const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/MoviesController.js");
const {
  validateGetMovies,
  validateMovieId,
  validateCreateMovie,
  validateUpdateMovie,
} = require("../middlewares/validators.js");
const validationErrorHandler = require("../middlewares/validationErrorHandler.js");

// GET ALL
router.get(
  "/",
  validateGetMovies,
  validationErrorHandler,
  MoviesController.getAllMovies
);

// GET ONE
router.get(
  "/:id",
  validateMovieId,
  validationErrorHandler,
  MoviesController.getMovieById
);

// POST
router.post(
  "/",
  validateCreateMovie,
  validationErrorHandler,
  MoviesController.createMovie
);

// PUT
router.put(
  "/:id",
  validateUpdateMovie,
  validationErrorHandler,
  MoviesController.updateMovie
);

// DELETE
router.delete(
  "/:id",
  validateMovieId,
  validationErrorHandler,
  MoviesController.deleteMovie
);

module.exports = router;
