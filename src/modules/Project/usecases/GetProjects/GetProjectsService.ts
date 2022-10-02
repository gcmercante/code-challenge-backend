import { inject, injectable } from "tsyringe";
import { IGetProjectsRepository } from "./infra/repositories/interfaces/IGetProjectsRepository";

@injectable()
export class GetProjectsService {
  constructor(
    @inject('GetProjectsRepository')
    private readonly getProjectsRepository: IGetProjectsRepository
  ) { }

  async execute(userId: string) {
    const result = await this.getProjectsRepository.findByUserId(userId);

    return result;
  }
}