import { User } from "../../../../../../../infra/db/entities/User";
import { ISignInRepository } from "../interfaces/ISignInRepository";

export class SignInRepositoryInMemory implements ISignInRepository {
  users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
}
