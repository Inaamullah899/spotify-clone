const joi = require("joi");
//attributes can be gained by relation
module.exports = {
  addSong: joi.object().keys({
    name: joi.string().required(),
    track: joi.string(),
    artist: joi.string(),
    thumbnail: joi.string(),
  }),
  deleteSong: joi.object().keys({
    songId: joi.number(),
  }),
  updateSong: joi.object().keys({
    name: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
    songTrack: joi.string(),
    songArtist: joi.string(),
    songThumbnail: joi.string(),
  }),
  songById: joi.object().keys({
    songId: joi.number(),
  }),
};
