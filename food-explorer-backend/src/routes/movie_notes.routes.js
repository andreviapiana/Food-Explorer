const { Router } = require('express');

const MovieNotesController = require("../controllers/MovieNotesController")

const movie_notesRoutes = Router();

const movie_notesController = new MovieNotesController();


movie_notesRoutes.post("/", movie_notesController.create);


module.exports = movie_notesRoutes;
