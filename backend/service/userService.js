const { models } = require("../models");
const bcrypt = require("bcryptjs");
//Db operations
module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },
  addUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const users = await models.user.create(data);
    console.log(users);
    return users;
  },

  updateUser: async (userId, updatedUserData) => {
    const users = await models.user.findByPk(userId);
    if (users) {
      users.update(updatedUserData);
      // await users.save(); // Save the changes
    }
    return users;
  },

  deleteUser: async (userId) => {
    const users = await models.user.findByPk(userId);
    if (users) {
      users.destroy();
      return "USER DELETED SUCCESSFULLY";
    }
    return null;
  },

  userById: async (userId) => {
    try {
      const userById = await models.user.findByPk(userId);
      if (userById) {
        return userById;
      } else {
        return "No User with this ID exists";
      }
    } catch (error) {
      console.log(error);
    }
  },
  loginUser: async (email, password) => {
    const user = await models.user.findOne({ where: { email } });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null; // Invalid credentials
    }

    return {
      id: user.id,
      username: user.username,
      email: user.email,
    };
  },
};
