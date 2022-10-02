import { User } from "../../../../../../../infra/db/entities/User";
import { CreateUserDTO } from "../../../dtos/CreateUserDTO";

export interface ISignUpRepository {
  findByEmail: (email: string) => Promise<User>;
  create: (data: CreateUserDTO) => Promise<void>;
}