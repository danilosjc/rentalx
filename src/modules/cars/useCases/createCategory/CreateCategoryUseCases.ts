
import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCases {
    constructor (private categoriesRepository: ICategoriesRepository) {}

    execute( { name, description}: IRequest ): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if(categoryAlreadyExists) {
            throw new Error ("Category already exists")
    }

    this.categoriesRepository.create({name, description});

    } 
}

export { CreateCategoryUseCases }
