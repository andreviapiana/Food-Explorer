const { Router } = require('express');

const usersRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");
const ordersRouter = require("./orders.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/dishes", dishesRouter);
routes.use("/orders", ordersRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;