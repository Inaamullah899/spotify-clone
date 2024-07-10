var express = require("express");
var router = express.Router();
const songs = require("../controller/songController");

/* GET products listing. */
router.get("/", songs.getSongController);
router.get("/:id", songs.songByIdController);
router.post("/add", songs.addSongController);
router.patch("/update/:id", songs.updateSongController);
router.delete("/delete/:id", songs.deleteSongController);

module.exports = router;
