// src/tests/infrastructure/user.controller.spec.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { UserController } from '../../infrastructure/controllers/user.controller';
import { GetUserUseCase } from '../../application/use-cases/get-user.use-case';

class MockGetUserUseCase {
  execute = vi.fn(async (id: string) => {
    if (id === '1') return { id: '1', name: 'John Doe' };
    return null;
  });
}

describe('UserController', () => {
  let controller: UserController;
  let mockUseCase: MockGetUserUseCase;

  beforeEach(() => {
    mockUseCase = new MockGetUserUseCase();
    controller = new UserController(mockUseCase as any);
  });

  it('should return 200 and user data when user exists', async () => {
    const req = { params: { id: '1' } } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;

    await controller.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: '1', name: 'John Doe' });
    expect(mockUseCase.execute).toHaveBeenCalledWith('1');
  });

  it('should return 404 when user does not exist', async () => {
    const req = { params: { id: '2' } } as any;
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn(),
    } as any;

    await controller.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
    expect(mockUseCase.execute).toHaveBeenCalledWith('2');
  });
});
