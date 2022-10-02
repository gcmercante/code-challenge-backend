import { Router } from "express";
import { SignInController } from "../../../modules/User/usecases/SignIn/SignInController";
import { SignUpController } from "../../../modules/User/usecases/SignUp/SignUpController";

const signUpController = new SignUpController();
const signInController = new SignInController();

const userRoutes = Router();

userRoutes.post('/', signUpController.handle)
userRoutes.post('/signin', signInController.handle)

export { userRoutes };