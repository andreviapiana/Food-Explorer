const { Router } = require('express');

const IngredientsController = require("../controllers/IngredientsController")

const ingredientsRoutes = Router();

const ingredientsController = new IngredientsController();

ingredientsRoutes.get("/:dish_id", ingredientsController.index);

module.exports = ingredientsRoutes;