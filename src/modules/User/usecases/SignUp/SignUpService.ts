import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserDTO } from "./dtos/CreateUserDTO";
import { ISignUpRepository } from "./infra/repositories/interfaces/ISignUpRepository";

@injectable()
export class SignUpService {
  constructor(
    @inject('SignUpRepository')
    private readonly signUpRepository: ISignUpRepository
  ) { }

  async execute({ email, password, name }: CreateUserDTO) {
    const userExists = await this.signUpRepository.findByEmail(email);

    if(userExists) {
      throw new AppError('User already exists!');
    }

    const passwordHash = await hash(password, 8);
    const newUser = {
      name,
      password: passwordHash,
      email
    };

    await this.signUpRepository.create(newUser);
  }
}