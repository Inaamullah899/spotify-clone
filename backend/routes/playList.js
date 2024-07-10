var express = require("express");
var router = express.Router();
const playlists = require("../controller/playListController");

/* GET products listing. */
router.get("/", playlists.getPlaylistController);
router.get("/:id", playlists.playlistByIdController);
router.post("/add", playlists.addPlaylistController);
router.patch("/update/:id", playlists.updatePlaylistController);
router.delete("/delete/:id", playlists.deletePlaylistController);

module.exports = router;
