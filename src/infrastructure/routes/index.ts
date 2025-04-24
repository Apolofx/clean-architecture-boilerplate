import { Express } from "express";
import { Database } from "sqlite3";
import { userRoutes } from "./user.routes";

export const registerRoutes = (app: Express, db: Database) => {
  userRoutes(app, db);

  // ...rest of routes
};
