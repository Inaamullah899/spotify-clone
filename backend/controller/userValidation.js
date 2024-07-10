const joi = require("joi");

module.exports = {
  addUser: joi.object().keys({
    userName: joi.string().required(),
    email: joi.string().email().required(),
    confirmEmail: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.string().required(),
    likedSongs: joi.string(),
    likedPlayLists: joi.string(),
    subscribedArtists: joi.string(),
  }),
  deleteUser: joi.object().keys({
    userId: joi.number(),
    email: joi.string().email(),
  }),
  updateUser: joi.object().keys({
    userId: joi.number().required(),
    userName: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
    likedSongs: joi.string(),
    likedPlayLists: joi.string(),
    subscribedArtists: joi.string(),
  }),
  userById: joi.object().keys({
    userId: joi.number(),
  }),
};
