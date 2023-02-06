import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";

import { CreateCategoryUseCases } from "./CreateCategoryUseCases";

import { CreateCategoryController } from "./CreateCategoryController";



const categoriesRepository = CategoriesRepository.getInstace();

const createCategoryUSeCase = new CreateCategoryUseCases(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUSeCase);

export { createCategoryController };

