import { UserRepository } from "../../domain/repositories/user.repository";
import { UserDTO } from "../../interfaces/dtos/user.dto";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}
  async execute(id: string): Promise<UserDTO | null> {
    const user = await this.userRepository.findById(id);
    if (!user) return null;
    return { id: user.id, name: user.name };
  }
}
