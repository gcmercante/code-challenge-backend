import { User } from "../../../../../../../infra/db/entities/User";
import { CreateUserDTO } from "../../../dtos/CreateUserDTO";
import { ISignUpRepository } from "../interfaces/ISignUpRepository";

export class SignUpRepositoryInMemory implements ISignUpRepository {
  users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async create(user: CreateUserDTO): Promise<void> {
    const newUser = new User();

    Object.assign(newUser, { ...user });

    this.users.push(newUser);
  }
}