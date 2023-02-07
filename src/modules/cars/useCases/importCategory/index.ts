import { CategoriesRepository } from "../../repositories/implementation/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepoitory = CategoriesRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepoitory);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export{ importCategoryController }