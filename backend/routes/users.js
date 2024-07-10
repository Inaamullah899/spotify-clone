var express = require("express");
var router = express.Router();
const users = require("../controller/userController");

/* GET products listing. */
router.get("/", users.getUserController);
router.get("/:id", users.userByIdController);
router.post("/add", users.addUserController);
router.patch("/update/:id", users.updateUserController);
router.delete("/delete/:id", users.deleteUserController);
router.post("/login", users.loginUserController);

module.exports = router;
