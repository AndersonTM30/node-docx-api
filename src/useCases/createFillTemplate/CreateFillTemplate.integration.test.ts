import request from 'supertest';
import app from '../../app';
import { IFillTemplateDto } from './IFillTemplateDto';


describe('POST /fill-template', () => {
    it('should be fill in the docx template', async () => {
        const payload: IFillTemplateDto = {
            empresa: 'MESHA TECNOLOGIA E SISTEMAS LTDA'
            , cnpj_empresa: '10.771.790/0001-62'
            , nome_colaborador: 'Anderson Generino Ferreira'
            , mes: 'Maio'
            , ano: '2024'
            , horas: '0:00'
            , atividades: [
                { 
                    "data": "2024-06-20", 
                    "descricao": "Atividade 1. Atividade Y. Ajudei fulano de tal e resolver o problema dele. Finalizei o chamado z." 
                },{ 
                    "data": "2024-06-20", 
                    "descricao": "Atividade 1. Atividade Y. Ajudei fulano de tal e resolver o problema dele. Finalizei o chamado z." 
                },{ 
                    "data": "2024-06-20", 
                    "descricao": "Atividade 1. Atividade Y. Ajudei fulano de tal e resolver o problema dele. Finalizei o chamado z." 
                },
            ]
            , resumo_atividades: 'teste'
            , cidade: 'Maceió'
            , ultimo_dia_mes: '31'
            , cargo_colaborador: 'Desenvolvedor FullStack Node Js'
            , nome_responsavel_empresa: 'José Roberto Protásio'
            , cargo_responsavel: 'Diretor Executivo'
            , nome_gestor_imediato: 'Ewerton Costa do Nascimento'
            , cargo_gestor_imediato: 'Assessor de tecnologia'
            , nome_diretoria: 'Diretoria de gestão estratégica – DIGEST'
            , nome_entidade: 'Sistema FIEA'
        }
        const res = await request(app).post('/fill-template').send(payload);
        expect(res.statusCode).toEqual(200);

    })
    it('should be payload is empty', async () => {
        const payload = {};
        const res = await request(app).post('/fill-template').send(payload);
        expect(res.statusCode).toEqual(400);
        expect(res.text).toContain('Data is not empty.')

    })
})