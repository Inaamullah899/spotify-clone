const user = require("../models/schemas/userSchema");
const song = require("../models/schemas/songSchema");
const playlist = require("../models/schemas/playListSchema");
const sequelize = require("../common/dbConnection");

user.hasMany(playlist, { onDelete: "CASCADE", foreignKey: { name: "userID" } });
playlist.belongsTo(user, {
  onDelete: "CASCADE",
  foreignKey: { name: "userID" },
});

// Define the many-to-many relationship
playlist.belongsToMany(song, {
  through: "playlist_song", // You can choose a different table name if needed
  foreignKey: { name: "playListId" }, // Foreign key in the junction table referencing playlist
});
song.belongsToMany(playlist, {
  through: "playlist_song", // Match the same table name used in the previous belongsToMany
  foreignKey: { name: "songId" }, // Foreign key in the junction table referencing song
});

const models = sequelize.models;
console.log(models);
const db = {};
db.sequelize = sequelize;
module.exports = { sequelize, models };
