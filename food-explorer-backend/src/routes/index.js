const { Router } = require('express');

const usersRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");
const ingredientsRouter = require("./ingredients.routes");
const ordersRouter = require("./orders.routes");
const movie_notesRouter = require("./movie_notes.routes");


const routes = Router();

routes.use("/users", usersRouter);
routes.use("/dishes", dishesRouter);
routes.use("/ingredients", ingredientsRouter);
routes.use("/orders", ordersRouter);
routes.use("/movie_notes", movie_notesRouter);

module.exports = routes;