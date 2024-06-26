export interface IFillTemplateDto {
    empresa: string;
    cnpj_empresa: string;
    nome_colaborador: string;
    mes: string;
    ano: string;
    horas: string;
    atividades: Array<object>;
    resumo_atividades: string;
    cidade: string;
    ultimo_dia_mes: string;
    cargo_colaborador: string;
    nome_responsavel_empresa: string;
    cargo_responsavel: string;
    nome_gestor_imediato: string;
    cargo_gestor_imediato: string;
    nome_diretoria: string;
    nome_entidade: string;
}