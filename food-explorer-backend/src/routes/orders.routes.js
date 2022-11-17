const { Router } = require('express');

const OrdersController = require("../controllers/OrdersController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const ensureUserIsAdmin = require("../middlewares/ensureUserIsAdmin");

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.post("/", ordersController.create);
ordersRoutes.get("/:id", ordersController.show);
ordersRoutes.get("/", ensureUserIsAdmin, ordersController.index);
ordersRoutes.put("/", ensureUserIsAdmin, ordersController.update);

module.exports = ordersRoutes;