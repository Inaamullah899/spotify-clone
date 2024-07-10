const sequelize = require("../../common/dbConnection");
const { DataTypes } = require("sequelize");

const song = sequelize.define(
  "song",
  {
    songId: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    thumbnail: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    track: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    artist: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    timestamps: true,
    // paranoid: true,
  }
);

module.exports = song;
