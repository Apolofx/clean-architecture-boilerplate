import express from "express";
import { initSQLite } from "./database/init-sqlite";
import { registerRoutes } from "./routes";

export const createServer = () => {
  const app = express();

  // Inicializar la base de datos
  const db = initSQLite();

  // Registrar rutas
  registerRoutes(app, db);

  return { app, db };
};
