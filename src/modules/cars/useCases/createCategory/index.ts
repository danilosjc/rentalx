import { CategoriesRepository } from "../../repositories/CategoriesRepository";

import { CreateCategoryUseCases } from "./CreateCategoryUseCases";

import { CreateCategoryController } from "./CreateCategoryController";



const categoriesRepository = new CategoriesRepository();

const createCategoryUSeCase = new CreateCategoryUseCases(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategoryUSeCase);

export { createCategoryController };

