const Router = require("express").Router;
const UserController = require("../controllers/user-controller.js");
const ImageController = require("../controllers/image-controller.js")

const router = new Router();

router.post("/users", UserController.createUser)
router.get("/users" , UserController.getUsers)
router.post("/randomimage", ImageController.putImage)
router.get("/randomimage", ImageController.getRandomImage)

module.exports = router;