import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { SignInDTO } from "./dtos/SignInDTO";
import { ISignInRepository } from "./infra/repositories/interfaces/ISignInRepository";

@injectable()
export class SignInService {
  constructor(
    @inject('SignInRepository')
    private readonly signInRepository: ISignInRepository
  ) { }

  async execute({ email, password }: SignInDTO) {
    const user = await this.signInRepository.findByEmail(email);

    if(!user) {
      throw new AppError('Email or password incorrect!');
    }
    
    const isValidPassword = await compare(password, user.password);
    
    if(!isValidPassword) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign(
      {
        name: user.name,
        id: user.id,
      },
      process.env.TOKEN_SECRET,
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return token;
  }
}