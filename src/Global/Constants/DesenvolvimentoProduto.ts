interface ServicoInterface {
	title: string;
	subtitle?: string;
	servicos: string[];
}

export const servicos1: ServicoInterface = {
	title: "Calçados com inovação tecnológica",
	subtitle:
		"Desenvolvimento de calçados e acessórios com inovações tecnológicas que apresentam diferencial competitivo para a empresa, possibilitando melhorias na rentabilidade e na conquista de novos clientes.",
	servicos: [
		"Desenvolvimento de formas para calçados.",
		"Avaliação e validação do calce de produtos.",
		"Desenvolvimento de ferramentais e matrizaria.",
		"Desenvolvimento de protótipos.",
		"Desenvolvimento de embalagens.",
		"Laudos Técnicos de qualidade.",
	],
};

export const servicos2: ServicoInterface = {
	title: "Certificação de calçados/luvas e vestuários de segurança",
	subtitle:
		"O IBTeC realiza projetos de desenvolvimento de calçados/luva e vestuários de segurança buscando atender à legislação estabelecida pelo Ministério do Trabalho para a obtenção do Certificado de aprovação - CA.",
	servicos: [
		"Desenvolvimento de formas.",
		"Marcações técnicas de produtos.",
		"Bula e memorial descritivo dos modelos desenvolvidos.",
		"Documentações técnicas.",
		"Certificação de produto e obtenção do Certificado de aprovação - CA.",
	],
};
