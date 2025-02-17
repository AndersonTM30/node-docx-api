import { Request, Response } from "express";
import { CreateFillTemplateUseCase } from "./CreateFillTemplateUseCase";
import { IFillTemplateDto } from "./IFillTemplateDto";

export class CreateFillTemplateController {
    constructor(
        private createFillTemplateUseCase: CreateFillTemplateUseCase
    ){}

    async handle(request: Request, response: Response) {
        const data: IFillTemplateDto = request.body;
        if(Object.keys(data).length == 0) return response.status(400).json({ message: 'Data is not empty.'});
        try {
            let result = await this.createFillTemplateUseCase.execute(data)
            return response.status(200).download(`${result}`, 'filled_template.docx');
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}