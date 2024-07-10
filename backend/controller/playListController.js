var express = require("express");
// var router = express.Router();
var playListService = require("../service/playListService");
var playListValidation = require("./playListValidation");

async function getPlaylistController(req, res, next) {
  res.send(await playListService.getPlayList());
}

async function playlistByIdController(req, res) {
  try {
    const { error, value } = playListValidation.playListById.validate(
      { playListId: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const playlistId = Number(value.playListId);
      const data = await playListService.playlistByIdController(playlistId);
      res.send(data);
    }
  } catch (error) {
    console.log(error);
  }
}

async function addPlaylistController(req, res) {
  // console.log("playlist controller");
  try {
    const { error, value } = playListValidation.addPlayList.validate(req.body);
    // console.log(value);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await playListService.addPlayList(value);
      // console.log(data);
      return res.send(data);
    }
  } catch (error) {
    console.log(error);
    // res.send(error);
  }
}

async function updatePlaylistController(req, res, next) {
  try {
    const { error, value } = playListValidation.updatePlayList.validate(
      req.body
    );
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const playlistId = req.params.id;
      const updatePlaylistData = req.body;
      const updated = await playListService.updatePlayList(
        playlistId,
        updatePlaylistData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deletePlaylistController(req, res, next) {
  try {
    const { error, value } = playListValidation.deletePlayList.validate(
      req.body
    );
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const playlistId = req.params.id;
      const deleted = await playListService.deletePlayList(playlistId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getPlaylistController,
  playlistByIdController,
  addPlaylistController,
  updatePlaylistController,
  deletePlaylistController,
};
