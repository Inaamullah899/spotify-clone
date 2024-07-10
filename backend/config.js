module.exports = {
  db: {
    database: "spotify",
    username: "postgres",
    password: "1234",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
  },

  jwtSecret: process.env.jwtSecret || "secret",
};
