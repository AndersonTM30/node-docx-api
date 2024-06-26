import { Router, Request, Response } from 'express';
import { createFillTemplateController } from '../useCases/createFillTemplate';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello Dev!')
})

router.post('/fill-template', (request: Request, response: Response) => {
    return createFillTemplateController.handle(request, response);
})

export { router }