import { Express } from "express";
import { Database } from "sqlite3";
import { UserController } from "../controllers/user.controller";
import { GetUserUseCase } from "../../application/use-cases/get-user.use-case";
import { UserSQLiteRepository } from "../repositories/user-sqlite.repository";

export const userRoutes = (app: Express, db: Database) => {
  const userRepository = new UserSQLiteRepository(db);
  const getUserUseCase = new GetUserUseCase(userRepository);
  const userController = new UserController(getUserUseCase);

  app.get("/users/:id", userController.getUser);
};
