// Router Import
const { Router } = require('express');

// Controllers Import and Initialization
const SessionsController = require("../controllers/SessionsController");
const sessionsController = new SessionsController();

// Initializing Router
const sessionsRoutes = Router();

// Sessions Routes
sessionsRoutes.post("/", sessionsController.create);

// Export
module.exports = sessionsRoutes;