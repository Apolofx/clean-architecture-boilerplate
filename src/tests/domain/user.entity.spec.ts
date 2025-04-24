import { describe, it, expect } from "vitest";
import { User } from "../../domain/entities/user.entity";

describe("User Entity", () => {
  it("should create a user with id and name", () => {
    const user = new User("1", "John Doe");
    expect(user.id).toBe("1");
    expect(user.name).toBe("John Doe");
  });
});
