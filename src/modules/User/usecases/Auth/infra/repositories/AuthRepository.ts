import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../infra/db";
import { User } from "../../../../../../infra/db/entities/User";

export class AuthRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async findById(id: string): Promise<User> {
    return this.repository.findOne({ where: { id }});
  }  
}