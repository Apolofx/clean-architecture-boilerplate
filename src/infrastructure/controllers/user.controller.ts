import { GetUserUseCase } from "../../application/use-cases/get-user.use-case";
import { Request, Response } from "express";

export class UserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async getUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await this.getUserUseCase.execute(id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(user);
  }
}
