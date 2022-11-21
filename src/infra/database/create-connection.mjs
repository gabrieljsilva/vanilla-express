import sqlite3 from "sqlite3";
import { createRepositoriesInstancies } from "./create-repositories-instancies.mjs";
import * as repositories from "./repositories/index.mjs";

export async function createDatabaseConnection() {
  const connection = new sqlite3.Database(
    "./main.db",
    sqlite3.OPEN_READWRITE,
    (err) => err && console.error(err)
  );

  const repositoriesArray = Object.values(repositories).flat();
  createRepositoriesInstancies(connection, repositoriesArray);

  return connection;
}
