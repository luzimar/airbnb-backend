"use strict";

const Env = use("Env");
const Url = require("url-parse");
const DATABASE_URL = new Url(Env.get("DATABASE_URL"));

module.exports = {
  connection: Env.get("DB_CONNECTION", "pg"),

  pg: {
    client: "pg",
    connection: {
      host: Env.get("DB_HOST", DATABASE_URL.hostname),
      port: Env.get("DB_PORT", DATABASE_URL.port),
      user: Env.get("DB_USER", DATABASE_URL.username),
      password: Env.get("DB_PASSWORD", DATABASE_URL.password),
      database: Env.get("DB_DATABASE", DATABASE_URL.pathname.substr(1))
    },
    debug: Env.get("DB_DEBUG", false)
  }
};
