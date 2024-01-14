const { check, oneOf } = require("express-validator");

exports.validateGetMovies = [
  check("page").isNumeric().withMessage("Page must be a number"),
  check("limit")
    .isNumeric()
    .withMessage("Limit must be a number")
    .isInt({ min: 1, max: 50 })
    .withMessage("Limit must be between 1 and 50"),
  check("sortField")
    .isIn(["title", "year", "lastupdated", "genres"])
    .withMessage(
      'SortField must be one of these: "title", "year", "lastupdated", "genres"'
    ),
  check("sortOrder")
    .isIn(["asc", "desc"])
    .withMessage("SortOrder must be one of these: asc, desc"),
];

exports.validateMovieId = [
  check("id").isMongoId().withMessage("Id must be a valid MongoId"),
];

exports.validateCreateMovie = [
  // Validar título
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Title is required")
    .isString()
    .withMessage("Title must be a string"),

  // Validar trama
  check("plot").optional().isString().withMessage("Plot must be a string"),

  // Validar géneros
  check("genres")
    .optional()
    .isArray()
    .withMessage("Genres must be an array")
    .custom((genres) => genres.every((genre) => typeof genre === "string"))
    .withMessage("Each genre must be a string"),

  // Validar duración
  check("runtime")
    .optional()
    .isNumeric()
    .withMessage("Runtime must be a number"),

  // Validar elenco
  check("cast")
    .optional()
    .isArray()
    .withMessage("Cast must be an array")
    .custom((cast) => cast.every((member) => typeof member === "string"))
    .withMessage("Each cast member must be a string"),

  // Validar póster
  check("poster").optional().isURL().withMessage("Poster must be a valid URL"),

  // Validar idiomas
  check("languages")
    .optional()
    .isArray()
    .withMessage("Languages must be an array")
    .custom((languages) =>
      languages.every((language) => typeof language === "string")
    )
    .withMessage("Each language must be a string"),

  // Validar año
  check("year").optional().isNumeric().withMessage("Year must be a number"),

  // Validar calificación IMDB
  check("imdb.rating")
    .optional()
    .isFloat({ min: 0, max: 10 })
    .withMessage("IMDB rating must be a number between 0 and 10"),

  // Validar votos IMDB
  check("imdb.votes")
    .optional()
    .isNumeric()
    .withMessage("IMDB votes must be a number"),

  // Validar tipo
  check("type")
    .optional()
    .isIn(["movie", "series", "other"])
    .withMessage("Type must be either movie, series, or other"),

  // Otras validaciones pueden ser agregadas aquí
];

exports.validateUpdateMovie = [
  check("id").isMongoId().withMessage("Id must be a valid MongoId"),

  // Validar título (opcional en actualización)
  check("title").optional().isString().withMessage("Title must be a string"),

  // Validar trama (opcional)
  check("plot").optional().isString().withMessage("Plot must be a string"),

  // Validar géneros (opcional)
  check("genres")
    .optional()
    .isArray()
    .withMessage("Genres must be an array")
    .custom((genres) => genres.every((genre) => typeof genre === "string"))
    .withMessage("Each genre must be a string"),

  // Validar duración (opcional)
  check("runtime")
    .optional()
    .isNumeric()
    .withMessage("Runtime must be a number"),

  // Validar elenco (opcional)
  check("cast")
    .optional()
    .isArray()
    .withMessage("Cast must be an array")
    .custom((cast) => cast.every((member) => typeof member === "string"))
    .withMessage("Each cast member must be a string"),

  // Validar póster (opcional)
  check("poster").optional().isURL().withMessage("Poster must be a valid URL"),

  // Validar idiomas (opcional)
  check("languages")
    .optional()
    .isArray()
    .withMessage("Languages must be an array")
    .custom((languages) =>
      languages.every((language) => typeof language === "string")
    )
    .withMessage("Each language must be a string"),

  // Validar año (opcional)
  check("year").optional().isNumeric().withMessage("Year must be a number"),

  // Validar calificación IMDB (opcional)
  check("imdb.rating")
    .optional()
    .isFloat({ min: 0, max: 10 })
    .withMessage("IMDB rating must be a number between 0 and 10"),

  // Validar votos IMDB (opcional)
  check("imdb.votes")
    .optional()
    .isNumeric()
    .withMessage("IMDB votes must be a number"),

  // Validar tipo (opcional)
  check("type")
    .optional()
    .isIn(["movie", "series", "other"])
    .withMessage("Type must be either movie, series, or other"),

  // Otras validaciones pueden ser agregadas aquí
];
