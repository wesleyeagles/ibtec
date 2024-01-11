interface ServicoInterface {
	title: string;
	subtitle?: string;
	servicos: string[];
}

export const servicos1: ServicoInterface = {
	title: "Principais serviços prestados",
	subtitle: "",
	servicos: [
		"Capacitação de fornecedores de fábricas de calçados e acessórios.",
		"Treinamentos Técnicos sobre substâncias restritivas.",
		"Definição de limites de tolerância de substâncias restritivas.",
		"Elaboração de manual técnico de substâncias restritivas.",
		"Auditorias de fornecedores.",
		"Laudos técnicos.",
	],
};

export const servicos2: ServicoInterface = {
	title: "Principais serviços prestados",
	subtitle: "",
	servicos: [
		"Diagnóstico técnico na empresa para verificação dos critérios da ABVTEX.",
		"Documentações obrigatórias.",
		"Adequação das NR nos processos internos da empresa.",
		"Atendimento da legislação trabalhista.",
		"Atendimento de critérios de segurança.",
		"Organização industrial da empresa.",
	],
};
