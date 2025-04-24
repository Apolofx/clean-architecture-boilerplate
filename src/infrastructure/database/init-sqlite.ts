import { Database } from "sqlite3";

export const initSQLite = (): Database => {
  const db = new Database("db.sqlite");

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT)");
    db.run(
      "INSERT INTO users (id, name) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET name=excluded.name",
      ["1", "John Doe"]
    );
  });

  return db;
};
