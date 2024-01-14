const express = require("express");
const router = express.Router();
const MoviesController = require("../controllers/MoviesController.js");

// GET ALL
router.get("/", MoviesController.getAllMovies);

// GET ONE
router.get("/:id", (req, res) => {
  res.json("Hello World from API Movies!");
});

// POST
router.post("/", (req, res) => {
  res.json("Hello World from API Movies!");
});

// PUT
router.put("/:id", (req, res) => {
  res.json("Hello World from API Movies!");
});

// DELETE
router.delete("/:id", (req, res) => {
  res.json("Hello World from API Movies!");
});

module.exports = router;
