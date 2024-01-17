import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Eventos.Styles.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { BannerArrow, CalendarIcon } from "../../assets/Icones";
import EventoSingle from "./Components/EventoSingle";
import Calendar from "../LaboratorioBiomecanica/Calendar";
import axios from "axios";
import { useEffect, useState } from "react";

export interface IEventModel {
	cargaHoraria: string;
	createdAt: string;
	data: string;
	facebook: string | null;
	horario: string;
	tematicas: string;
	id: number;
	imagem: string;
	instagram: string | null;
	objetivos: string;
	link: string;
	linkedin: string | null;
	local: string;
	modalidade: "Presencial" | "Online" | "Presencial e Online";
	nome: string;
	publicoAlvo: string;
	slug: string;
	sobre: string;
	updatedAt: string;
	youtube: string | null;
}

const Eventos = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const [events, setEvents] = useState<IEventModel[]>([]);

	useEffect(() => {
		const getAllEvents = async () => {
			const response = await axios.get("https://backend-production-9a06.up.railway.app/api/event/ultimos-events");

			setTimeout(() => setEvents(response.data), 2000);
		};

		getAllEvents();
	}, []);

	return (
		<div className="eventos">
			<BannerContainer bgImage="/sobre-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Eventos</h1>
						<p>Conectando pessoas através de experiências inesquecíveis: Descubra os melhores eventos próximos de você</p>
						<div className="icon">
							<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="calendario-2">
				<GridContainer>
					<h3>Calendário de eventos</h3>
					<Calendar />
				</GridContainer>
			</div>
			<div className="evento">
				<GridContainer>
					<div className="wrapper">
						<h3>Fique de olho nos eventos</h3>
						<div className="icon">
							<CalendarIcon size={"2.5rem"} />
						</div>
					</div>
					<div className="container-eventos">
						{events && events.length > 0 ? (
							events.map((event) => <EventoSingle key={event.id} title={event.nome} content={event.sobre} slug={event.slug} image={event.imagem} />)
						) : (
							<div className="text-white">Carregando...</div>
						)}
					</div>
				</GridContainer>
			</div>
		</div>
	);
};

export default Eventos;
