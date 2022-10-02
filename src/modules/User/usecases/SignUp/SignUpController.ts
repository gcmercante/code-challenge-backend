import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SignUpService } from './SignUpService';

export class SignUpController {
  async handle(request: Request, response: Response) {
    const { email, name, password } = request.body;

    const signUpService = container.resolve(SignUpService);

    await signUpService.execute({ email, name, password });

    return response.status(201).json({ message: 'User created!' });
  }
}