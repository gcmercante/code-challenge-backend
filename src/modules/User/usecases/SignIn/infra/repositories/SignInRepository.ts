import { Repository } from "typeorm";

import { AppDataSource } from "../../../../../../infra/db";
import { User } from "../../../../../../infra/db/entities/User";
import { ISignInRepository } from "./interfaces/ISignInRepository";

export class SignInRepository implements ISignInRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }
  
  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ where: { email } });
  }
}