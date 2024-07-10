const sequelize = require("../../common/dbConnection");
const { DataTypes } = require("sequelize");

const playList = sequelize.define(
  "Playlist",
  {
    playListId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    playListName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    // paranoid: true,
  }
);

module.exports = playList;
