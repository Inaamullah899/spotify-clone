const { models } = require("../models");
//Db operations
module.exports = {
  getSong: async () => {
    const songs = await models.song.findAll();
    return songs;
  },
  addSong: async (data) => {
    const songs = await models.song.create(data);
    console.log(songs);
    return songs;
  },

  updateSong: async (songId, updateSongData) => {
    const songs = await models.song.findByPk(songId);
    if (songs) {
      songs.update(updateSongData);
    }
    return songs;
  },

  deleteSong: async (songId) => {
    const songs = await models.song.findByPk(songId);
    if (songs) {
      songs.destroy();
      return "SONG DELETED SUCCESSFULLY";
    }
    return null;
  },

  songById: async (songId) => {
    try {
      const songById = await models.song.findByPk(songId);
      if (songById) {
        return songById;
      } else {
        return "No song with this ID exists";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
