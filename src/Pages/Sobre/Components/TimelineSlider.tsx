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
		{ year: 1976, description: "IBCCA passa a se chamar Centro Tecnológico do Couro, Calçados e Afins (CTCCA)" },
		{ year: 1979, description: "Criação da Revista Tecnicouro (publicação customizada, com informações técnicas e científicas, direcionada a empresas e profissionais do setor)" },
		{ year: 1995, description: "Criação do projeto Fábrica High Tech, na Couromoda" },
		{ year: 2016, description: "Descrição do Evento 5" },
		{ year: 2017, description: "Descrição do Evento 6" },
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
