import { CreateFillTemplateController } from "./CreateFillTemplateController";
import { CreateFillTemplateUseCase } from "./CreateFillTemplateUseCase";

const createFillTemplateUseCase = new CreateFillTemplateUseCase();
const createFillTemplateController = new CreateFillTemplateController(createFillTemplateUseCase);

export { createFillTemplateUseCase, createFillTemplateController }