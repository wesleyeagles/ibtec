import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Sobre.Components.Style.scss"; // Estilos personalizados
import { PointIcon } from "../../../assets/Icones";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";

interface TimelineEvent {
	year: number;
	description: string;
}

const TimelineSlider: React.FC = () => {
	const isMedia1368px = useMediaQuery("(max-width: 1368px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const timelineData: TimelineEvent[] = [
		{ year: 1972, description: "Fundação do Instituto Brasileiro do Couro, Calçado e Afins (IBCCA)" },
		{ year: 1973, description: "Aprovação do primeiro projeto de pesquisa voltado para inovação com subsídio do Governo Federal, através do PBCT" },
		{ year: 1975, description: "Foi estabilidade a modalidade de vínculo das empresas do setor calçadista através de uma associação mensal" },
		{ year: 1976, description: "IBCCA passa a se chamar Centro Tecnológico do Couro, Calçados e Afins (CTCCA)" },
		{ year: 1979, description: "Criação da Revista Tecnicouro" },
		{ year: 1983, description: "Criação do Laboratório Químico" },
		{ year: 1984, description: "Mudança para a nova sede – endereço no qual permanece até hoje" },
		{ year: 1986, description: "Inmetro aprova as primeiras normas para o setor coureiro-calçadista" },
		{ year: 1987, description: "Início dos treinamentos de qualificação do varejo calçadista – que mais tarde foi aprimorado, resultando na Cartilha do Calçados" },
		{ year: 1994, description: "Credenciamento junto ao Ministério do Trabalho e Rede Metrológica do Rio Grande do Sul" },
		{ year: 1995, description: "Criação do projeto Fábrica High Tech, na Couromoda" },
		{ year: 1996, description: "CTCCA sedia o Comitê Brasileiro do Couro e Calçado (CB-11)" },
		{ year: 1999, description: "Criação do Projeto Passo a Passo, pelo Conselho Técnico de Máquinas" },
		{ year: 2002, description: "Lançamento do Selo Conforto para calçados" },
		{ year: 2003, description: "Instituto passa a sediar a FGV – Decision com cursos de MBA" },
		{ year: 2005, description: "CTCCA passa a se chamar Instituto Brasileiro de Tecnologia do Couro, Calçado e Artefatos" },
		{ year: 2008, description: "Inauguração do Laboratório de Substâncias Restritas" },
		{ year: 2014, description: "IBTeC realização a primeira edição do projeto Fábrica Modelo de Produtos de Segurança na FISP" },
		{ year: 2015, description: "Criação do Núcleo de Inovação Tecnológica que passou a integrar todas as áreas de conhecimento do Instituto" },
		{ year: 2016, description: "Em apoio ao aumento das exportações na indústria calçadista, o Instituto passou a realizar um programa voltado à gestão das substâncias restritas " },
		{ year: 2017, description: "Inauguração do Laboratório de Luvas e Vestimentas, com a aquisição de equipamentos" },
		{ year: 2024, description: "Com o avanço da pandemia do Coronavírus, o IBTeC acelerou o uso das ferramentas digitais intensificando sua presença nas redes sociais " },
		// ... Adicione mais datas aqui
	];

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : isMedia1368px ? 3 : 4,
		slidesToScroll: 1,
		arrows: false,
	};

	const currentDate = new Date().getFullYear(); // Obtenha o ano atual

	return (
		<div className="timeline-slider">
			<div className="timeline-line"></div>
			<Slider {...settings}>
				{timelineData.map((item, index) => (
					<div key={index} className="timeline-slide">
						<h3>{item.year}</h3>
						<div className="timeline-bullet">
							<PointIcon size={"1.5rem"} />
						</div>
						{item.year <= currentDate && <p className="event-description">{item.description}</p>}
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TimelineSlider;
