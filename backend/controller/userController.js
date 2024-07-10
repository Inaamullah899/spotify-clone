var express = require("express");
// var router = express.Router();
var userService = require("../service/userService");
var userValidation = require("./userValidation");

async function getUserController(req, res, next) {
  res.send(await userService.getUser());
}

async function userByIdController(req, res, next) {
  try {
    const { error, value } = userValidation.userById.validate(
      { userId: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const userId = Number(value.userId);
      const data = await userService.userById(userId);
      res.send(data);
    }
  } catch (error) {}
}

async function addUserController(req, res, next) {
  try {
    const { error, value } = userValidation.addUser.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await userService.addUser(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}

async function updateUserController(req, res, next) {
  try {
    const { error, value } = userValidation.updateUser.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const userId = req.params.id;
      const updateUserData = req.body;
      const updated = await userService.updateUser(
        userId,
        updateUserData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteUserController(req, res, next) {
  try {
    const { error, value } = userValidation.deleteUser.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const userId = req.params.id;
      const deleted = await userService.deleteUser(userId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}
const loginUserController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.loginUser(email, password);

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login failed", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  getUserController,
  addUserController,
  updateUserController,
  deleteUserController,
  userByIdController,
  loginUserController,
};
