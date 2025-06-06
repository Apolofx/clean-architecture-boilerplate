import { Database } from "sqlite3";

export const createTestSQLiteDB = (): Database => {
  const db = new Database(":memory:");

  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY, name TEXT)");
    db.run("INSERT INTO users (id, name) VALUES (?, ?)", ["1", "John Doe"]);
  });

  return db;
};
