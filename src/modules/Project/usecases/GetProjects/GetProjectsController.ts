import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CustomHeaders } from '../../../../shared/interfaces/CustomHeaders';

import { GetProjectsService } from './GetProjectsService';

export class GetProjectController {
  async handle(request: Request, response: Response) {
    const { user } = request.headers as CustomHeaders;
    
    const getProjectService = container.resolve(GetProjectsService);

    const result = await getProjectService.execute(user);

    return response.json(result);
  }
}