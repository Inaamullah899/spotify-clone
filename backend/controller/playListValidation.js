const joi = require("joi");

module.exports = {
  addPlayList: joi.object().keys({
    playListName: joi.string().required(),
    thumbnail: joi.string().required(),
  }),
  deletePlayList: joi.object().keys({
    playListId: joi.number(),
  }),
  updatePlayList: joi.object().keys({
    playListName: joi.string(),
  }),
  playListById: joi.object().keys({
    playListId: joi.number(),
  }),
};
