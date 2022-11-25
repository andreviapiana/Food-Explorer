// Router, Multer and uploadConfig Import
const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

// Controllers Import and Initialization
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');
const DishesController = require("../controllers/DishesController")

const dishesController = new DishesController();

// Initializing Router and Upload
const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER);

// Requiring Authentication
dishesRoutes.use(ensureAuthenticated);

// Dishes Routes
dishesRoutes.post("/", upload.single("image"), dishesController.create);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.delete("/:id", dishesController.delete);
dishesRoutes.put("/:id", upload.single("image"), dishesController.update);

// Export
module.exports = dishesRoutes;