// Router, Multer and uploadConfig Import
const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

// Controllers Import and Initialization
const UsersController = require("../controllers/UsersController")
const UserAvatarController = require("../controllers/UserAvatarController");

const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

// Middleware Import
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

// Initializing Router and Upload
const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

// Users Routes
usersRoutes.post("/",usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

// Export
module.exports = usersRoutes;