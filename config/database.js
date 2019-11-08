"use strict";

const Env = use("Env");
const Url = require('url-parse')
const DATABASE_URL = new Url(Env.get('DATABASE_URL'))

const Helpers = use("Helpers");

module.exports = {
  connection: Env.get("DB_CONNECTION", "sqlite"),

  sqlite: {
    client: "sqlite3",
    connection: {
      filename: Helpers.databasePath(
        `${Env.get("DB_DATABASE", "development")}.sqlite`
      )
    },
    useNullAsDefault: true,
    debug: Env.get("DB_DEBUG", false)
  },

  mysql: {
    client: "mysql",
    connection: {
      host: Env.get("DATABASE_URL", "localhost"),
      port: Env.get("DB_PORT", ""),
      user: Env.get("DB_USER", "root"),
      password: Env.get("DB_PASSWORD", ""),
      database: Env.get("DB_DATABASE", "adonis")
    },
    debug: Env.get("DB_DEBUG", false)
  },

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