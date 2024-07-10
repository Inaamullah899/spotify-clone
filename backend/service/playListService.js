const { models } = require("../models");
//Db operations
module.exports = {
  getPlayList: async () => {
    const playlists = await models.Playlist.findAll();
    return playlists;
  },

  addPlayList: async (data) => {
    const playList = await models.Playlist.create(data);
    console.log(playList);
    return playList;
  },

  updatePlayList: async (playListId, updatePlayListData) => {
    const playList = await models.Playlist.findByPk(playListId);
    if (playList) {
      playList.update(updatePlayListData);
    }
    return playList;
  },

  deletePlayList: async (playListId) => {
    const playList = await models.Playlist.findByPk(playListId);
    if (playList) {
      playList.destroy();
      return "PLAYLIST DELETED SUCCESSFULLY";
    }
    return null;
  },

  playlistByIdController: async (playListId) => {
    // console.log(playListId);
    try {
      const playListById = await models.Playlist.findByPk(playListId);
      // console.log(playListById);
      if (playListById) {
        return playListById;
      } else {
        return "No Play List with this ID exists";
      }
    } catch (error) {
      console.log(error);
    }
  },
};
