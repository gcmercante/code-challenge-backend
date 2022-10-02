import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { AuthRepository } from "../../../modules/User/usecases/Auth/infra/repositories/AuthRepository";
import { AppError } from "../../../shared/errors/AppError";

interface Payload {
  sub: string
}

export async function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError('Token missing!', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: id } = verify(token, 'b7d3838bad89053d4e16ae57df86c3f3') as Payload;

    const userRepository = new AuthRepository();
    
    const user = await userRepository.findById(id);

    if(!user) {
      throw new AppError('User does not exist!', 401);
    }

    request.user = { id };
    next();
  } catch (error) {
    throw new AppError('Invalid token!', 401);
  }
}