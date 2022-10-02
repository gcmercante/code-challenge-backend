import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../infra/db";
import { User } from "../../../../../../infra/db/entities/User";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { ISignUpRepository } from "./interfaces/ISignUpRepository";

export class SignUpRepository implements ISignUpRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } });
  }

  async create(data: CreateUserDTO): Promise<void> {
    const newUser = this.repository.create({ ...data });

    await this.repository.save(newUser);
  }
}