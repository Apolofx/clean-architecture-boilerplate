import express from "express";
import { initSQLite } from "./database/init-sqlite";
import { registerRoutes } from "./routes";

export const createServer = () => {
  const app = express();

  // Initialize the database
  const db = initSQLite();

  // Define routes
  registerRoutes(app, db);

  return { app, db };
};
