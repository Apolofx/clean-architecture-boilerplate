import { describe, it, expect, vi, beforeEach } from "vitest";
import { GetUserUseCase } from "../../application/use-cases/get-user.use-case";
import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

class MockUserRepository implements UserRepository {
  findById = vi.fn(async (id: string): Promise<User | null> => {
    if (id === "1") return new User("1", "John Doe");
    return null;
  });
}

describe("GetUserUseCase", () => {
  let useCase: GetUserUseCase;
  let mockRepository: MockUserRepository;

  beforeEach(() => {
    mockRepository = new MockUserRepository();
    useCase = new GetUserUseCase(mockRepository);
  });

  it("should return a user DTO when user exists", async () => {
    const result = await useCase.execute("1");
    expect(result).toEqual({ id: "1", name: "John Doe" });
    expect(mockRepository.findById).toHaveBeenCalledWith("1");
  });

  it("should return null when user does not exist", async () => {
    const result = await useCase.execute("2");
    expect(result).toBeNull();
    expect(mockRepository.findById).toHaveBeenCalledWith("2");
  });
});
