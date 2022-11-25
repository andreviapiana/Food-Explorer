// Router Import
const { Router } = require('express');

// Routes Import
const usersRouter = require("./users.routes");
const dishesRouter = require("./dishes.routes");
const ordersRouter = require("./orders.routes");
const sessionsRouter = require("./sessions.routes");

// Initializing Router
const routes = Router();

// Application Routes
routes.use("/users", usersRouter);
routes.use("/dishes", dishesRouter);
routes.use("/orders", ordersRouter);
routes.use("/sessions", sessionsRouter);

// Export
module.exports = routes;