import { describe, it, expect, beforeEach } from "vitest";
import { UserInMemoryRepository } from "../../infrastructure/repositories/user-in-memory.repository";
import { User } from "../../domain/entities/user.entity";

describe("UserInMemoryRepository", () => {
  let repository: UserInMemoryRepository;

  beforeEach(() => {
    repository = new UserInMemoryRepository();
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
