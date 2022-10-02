import { SignUpRepositoryInMemory } from "../../../modules/User/usecases/SignUp/infra/repositories/inmemory/SignUpRepositoryInMemory"
import { SignUpService } from "../../../modules/User/usecases/SignUp/SignUpService"
import { AppError } from "../../../shared/errors/AppError";

let signUpRepository: SignUpRepositoryInMemory;
let signUpService: SignUpService;

describe('-- SignUpService --', () => {
  beforeEach(() => {
    signUpRepository = new SignUpRepositoryInMemory()
    signUpService = new SignUpService(signUpRepository)
  });

  test('should create a new user', async () => {
    const data = {
      email: 'email@example.com',
      password: 'password',
      name: 'John Doe'
    };

    await signUpService.execute(data);

    expect(signUpRepository.users).toHaveLength(1);
    expect(signUpRepository.users[0].email).toBe('email@example.com');
  });

  test('should not be able to create user with existing email', () => {
    expect(async () => {
      const data = {
        email: 'email@example.com',
        password: 'password',
        name: 'John Doe'
      };
  
      await signUpService.execute(data);
      await signUpService.execute(data);
    }).rejects.toBeInstanceOf(AppError);
  })
})