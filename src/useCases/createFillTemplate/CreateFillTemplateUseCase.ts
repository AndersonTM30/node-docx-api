import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from 'fs';
import path from 'path';
import { IFillTemplateDto } from "./IFillTemplateDto";


export class CreateFillTemplateUseCase {

    async execute(data: IFillTemplateDto): Promise<string> {
        const content = fs.readFileSync(path.resolve(__dirname, '..', '..', 'helpers', 'templates', 'template.docx'), 'binary');
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
            paragraphLoop: true,
            linebreaks: true,
        });
        doc.setData({
            empresa: data.empresa
            , cnpj_empresa: data.cnpj_empresa
            , nome_colaborador: data.nome_colaborador
            , mes: data.mes
            , ano: data.ano
            , horas: data.horas
            , atividades: data.atividades
            , resumo_atividades: data.resumo_atividades
            , cidade: data.cidade
            , ultimo_dia_mes: data.ultimo_dia_mes
            , cargo_colaborador: data.cargo_colaborador
            , nome_responsavel_empresa: data.nome_responsavel_empresa
            , cargo_responsavel: data.cargo_responsavel
            , nome_gestor_imediato: data.nome_gestor_imediato
            , cargo_gestor_imediato: data.cargo_gestor_imediato
            , nome_diretoria: data.nome_diretoria
            , nome_entidade: data.nome_entidade
        });

        try {
            doc.render();
        } catch (error) {
            console.error(JSON.stringify(error));
        }

        const buf = doc.getZip().generate({ type: 'nodebuffer' });
        
        const outputPath =  path.resolve(__dirname, '..', '..', 'helpers', 'templates', 'output', 'filled_template.docx');
        fs.writeFileSync(outputPath, buf);
        
        return outputPath;
    }
}