const { Router } = require('express');

const DishesController = require("../controllers/DishesController")

const dishesRoutes = Router();

const dishesController = new DishesController();

dishesRoutes.post("/", dishesController.create);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.get("/", dishesController.index);

module.exports = dishesRoutes;