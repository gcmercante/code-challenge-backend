import { Response, Request } from 'express';
import { container } from 'tsyringe';
import { SignInService } from './SignInService';

export class SignInController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const signInService = container.resolve(SignInService);

    const token = await signInService.execute({ email, password });

    return response.json({ authToken: token });
  }
}