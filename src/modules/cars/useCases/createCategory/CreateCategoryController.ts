import { Request, Response } from 'express'

import { CreateCategoryUseCases } from './CreateCategoryUseCases'

class CreateCategoryController {
    constructor( private createCategoryUSeCase: CreateCategoryUseCases) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createCategoryUSeCase.execute({ name, description });

        return response.status(201).send()
    }
}

export { CreateCategoryController }
