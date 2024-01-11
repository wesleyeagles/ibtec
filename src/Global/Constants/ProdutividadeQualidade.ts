interface ServicoInterface {
	title: string;
	subtitle?: string;
	servicos: string[];
}

export const servicos: ServicoInterface = {
	title: "Principais serviços prestados",
	subtitle: "",
	servicos: [
		"Diagnóstico técnico para verificar as fraquezas e as oportunidades de melhorias no processo produtivo.",
		"Aperfeiçoar os recursos da empresa, melhorando a utilização de seus equipamentos e mão de obra direta disponível.",
		"Melhorar o desempenho da gestão de materiais (compras, almoxarifado, etc.) da empresa e seu aproveitamento no processo produtivo.",
		"Utilizar técnicas e ferramentas de gestão da produtividade como a Cronoanálise, eficiência produtiva e CEP como apoio ao desenvolvimento industrial.",
		"Aprimoramento das técnicas da gestão da informação.",
		"Treinamentos voltados ao aprendizado de técnicas de fabricação de calçado.",
	],
};
