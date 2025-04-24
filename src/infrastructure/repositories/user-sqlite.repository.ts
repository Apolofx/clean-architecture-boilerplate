import { Database } from "sqlite3";
import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserSQLiteRepository implements UserRepository {
  constructor(private db: Database) {}

  async findById(id: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT id, name FROM users WHERE id = ?",
        [id],
        (err, row: any) => {
          if (err) return reject(err);
          if (!row) return resolve(null);
          resolve(new User(row.id, row.name));
        }
      );
    });
  }
}
