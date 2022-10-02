import { User } from "../../../../../../../infra/db/entities/User";

export interface ISignInRepository { 
  findByEmail: (email: string) => Promise<User>;
}