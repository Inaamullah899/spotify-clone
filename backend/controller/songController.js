var express = require("express");
// var router = express.Router();
var songService = require("../service/songService");
var songValidation = require("./songValidation");

async function getSongController(req, res, next) {
  res.send(await songService.getSong());
}

async function songByIdController(req, res, next) {
  try {
    const { error, value } = songValidation.songById.validate(
      { songId: req.params.id },
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.send(error.details.map((err) => err.message));
    } else {
      const songId = Number(value.songId);
      const data = await songService.songById(songId);
      res.send(data);
    }
  } catch (error) {}
}

async function addSongController(req, res, next) {
  try {
    const { error, value } = songValidation.addSong.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await songService.addSong(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}

async function updateSongController(req, res, next) {
  try {
    const { error, value } = songValidation.updateSong.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const songId = req.params.id;
      const updateSongData = req.body;
      const updated = await songService.updateSong(
        songId,
        updateSongData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteSongController(req, res, next) {
  try {
    const { error, value } = songValidation.deleteSong.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const songId = req.params.id;
      const deleted = await songService.deleteSong(songId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  getSongController,
  songByIdController,
  addSongController,
  updateSongController,
  deleteSongController,
};
