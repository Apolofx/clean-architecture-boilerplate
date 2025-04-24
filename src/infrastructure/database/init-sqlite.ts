import { Database } from "sqlite3";
import fs from "fs";
import path from "path";

const dbDir = path.join(__dirname, "../../../data");

if (!fs.existsSync(dbDir)) {
  console.debug("No data folder present creating data folder...")
  fs.mkdirSync(dbDir, { recursive: true });
}

export const initSQLite = (): Database => {
  const db = new Database("data/db.sqlite");

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT)");
    db.run(
      "INSERT INTO users (id, name) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET name=excluded.name",
      ["1", "John Doe"]
    );
  });

  return db;
};
