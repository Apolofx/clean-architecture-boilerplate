// src/tests/infrastructure/user-sqlite.repository.spec.ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { UserSQLiteRepository } from "../../infrastructure/repositories/user-sqlite.repository";
import { User } from "../../domain/entities/user.entity";
import { createTestSQLiteDB } from "../setup";

describe("UserSQLiteRepository", () => {
  let repository: UserSQLiteRepository;
  let db: any;

  beforeEach(() => {
    db = createTestSQLiteDB();
    repository = new UserSQLiteRepository(db);
  });

  afterEach(() => {
    db.close();
  });

  it("should return a user when it exists", async () => {
    const user = await repository.findById("1");
    expect(user).toEqual(new User("1", "John Doe"));
  });

  it("should return null when user does not exist", async () => {
    const user = await repository.findById("2");
    expect(user).toBeNull();
  });
});
