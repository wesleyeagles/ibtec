import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Eventos.Styles.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { BannerArrow, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "../../assets/Icones";
import AccordionSingle from "./Components/AccordionSingle";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { IEventModel } from "./Eventos";
import { addDays, format } from "date-fns";
import { Spinner } from "react-bootstrap";

const Evento = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const TimeFormatter = (time: string) => {
		const formatTime = (inputTime: string) => {
			const [hours, minutes] = inputTime.split(":");
			let result = `${hours}h`;

			if (minutes !== "00") {
				result += `${minutes}m`;
			}

			return result;
		};

		const formattedTime = formatTime(time);

		return formattedTime;
	};

	const [event, setEvent] = useState<IEventModel>();

	const { slug } = useParams();

	const [events, setEvents] = useState<IEventModel[]>();

	useEffect(() => {
		const getAllEvents = async () => {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/event/ultimos-events");

				const event = response.data.filter((event: any) => event.slug === slug);

				setEvent(event[0]);
				setEvents(response.data);
			} catch (err) {
				console.log(err);
			}
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
			<div className="event">
				<GridContainer>
					{event ? (
						<>
							<div className="title">
								<span>{event.nome}</span>
							</div>
							<div className="wrapper">
								<div className="image">
									<img src={`https://dev.ibtec.org.br/dev/blog/${event.imagem}`} />
								</div>
								<div className="content">
									<div className="label">
										<span>O evento:</span>
										<p>{event.sobre}</p>
									</div>
									{event.publicoAlvo && (
										<div className="label">
											<span>Público alvo:</span>
											<ul>
												{event.publicoAlvo
													.split(",")
													.reduce((acc: any, objetivo, index) => {
														const trimmedObjetivo = objetivo.trim();
														const isFirstItem = index === 0;
														const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

														if (!isFirstItem && isLowercase) {
															acc[acc.length - 1] += `, ${trimmedObjetivo}`;
														} else {
															acc.push(trimmedObjetivo);
														}

														return acc;
													}, [])
													.map((objetivo: string, index: number) => (
														<li key={index}>{objetivo}</li>
													))}
											</ul>
										</div>
									)}

									{event.objetivos && (
										<div className="label">
											<span>Objetivos:</span>
											<ul>
												{event.objetivos
													.split(",")
													.reduce((acc: any, objetivo, index) => {
														const trimmedObjetivo = objetivo.trim();
														const isFirstItem = index === 0;
														const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

														if (!isFirstItem && isLowercase) {
															acc[acc.length - 1] += `, ${trimmedObjetivo}`;
														} else {
															acc.push(trimmedObjetivo);
														}

														return acc;
													}, [])
													.map((objetivo: string, index: number) => (
														<li key={index}>{objetivo}</li>
													))}
											</ul>
										</div>
									)}

									{event.facebook || event.instagram || event.linkedin || event.youtube ? (
										<div className="label">
											<span>Canais de transmissão da live:</span>
											<div className="social-media">
												{event.facebook ? (
													<a href={event.facebook} target="_blank" rel="noreferrer">
														<FacebookIcon size={"1.7rem"} />
													</a>
												) : null}

												{event.instagram ? (
													<a href={event.instagram} target="_blank" rel="noreferrer">
														<InstagramIcon size={"1.7rem"} />
													</a>
												) : null}

												{event.linkedin ? (
													<a href={event.linkedin} target="_blank" rel="noreferrer">
														<LinkedinIcon size={"1.7rem"} />
													</a>
												) : null}

												{event.youtube ? (
													<a href={event.youtube} target="_blank" rel="noreferrer">
														<YoutubeIcon size={"1.7rem"} />
													</a>
												) : null}
											</div>
										</div>
									) : null}
								</div>
							</div>
							<div className="inline-content">
								{event.tematicas && (
									<div className="label">
										<span>Temáticas abordadas:</span>
										<ul>
											{event.tematicas
												.split(",")
												.reduce((acc: any, objetivo, index) => {
													const trimmedObjetivo = objetivo.trim();
													const isFirstItem = index === 0;
													const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

													if (!isFirstItem && isLowercase) {
														acc[acc.length - 1] += `, ${trimmedObjetivo}`;
													} else {
														acc.push(trimmedObjetivo);
													}

													return acc;
												}, [])
												.map((objetivo: string, index: number) => (
													<li key={index}>{objetivo}</li>
												))}
										</ul>
									</div>
								)}

								{event.cargaHoraria && (
									<div className="label">
										<span>Carga horária:</span>
										<p>{event.cargaHoraria}</p>
									</div>
								)}
							</div>
							<div className="more-content">
								{event.data ? (
									<div className="d-flex align-items-center gap-3">
										<span>
											<strong>Data: </strong> {format(addDays(new Date(event.data), 1), "dd/MM")}
										</span>
										{event.dataFim && (
											<span>
												<strong>Fim do Evento: </strong> {format(addDays(new Date(event.dataFim), 1), "dd/MM")}
											</span>
										)}
									</div>
								) : null}
								{event.horario ? (
									<div className="d-flex align0-items-center gap-3">
										<span>
											<strong>Horário: </strong> {TimeFormatter(event.horario)}
										</span>
										{event.horarioFim && (
											<span>
												<strong>Horário de Fim: </strong> {TimeFormatter(event.horarioFim)}
											</span>
										)}
									</div>
								) : null}

								{event.modalidade ? (
									<span>
										<strong>Modalidade: </strong> {event.modalidade}
									</span>
								) : null}

								{event.local ? (
									<span>
										<strong>Local: </strong> {event.local}
									</span>
								) : null}
								{event.link ? (
									<span>
										<strong>Link: </strong>
										<a className="text-white" href={event.link} target="_blank" rel="noreferrer">
											{event.link}
										</a>
									</span>
								) : null}
							</div>
						</>
					) : (
						<div className="d-flex justify-content-center">
							<Spinner variant="light" />
						</div>
					)}

					<div className="eventos-realizados">
						<h3>Eventos realizados:</h3>
						<div className="accordions">
							{events?.map((event) => (
								<AccordionSingle
									key={event.id}
									title={
										event.modalidade
											? event.modalidade === "Presencial e Online"
												? "EVENTO HÍBRIDO: " + event.nome
												: event.modalidade === "Online"
												? `LIVE: ` + event.nome
												: `EVENTO ${event.modalidade}: ` + event.nome
											: "EVENTO: " + event.nome
									}
									content={
										<>
											<div className="wrapper">
												<div className="image">
													<img src={`https://dev.ibtec.org.br/dev/blog/${event.imagem}`} />
												</div>
												<div className="content">
													<div className="label">
														<span>O evento:</span>
														<p>{event.sobre}</p>
													</div>
													{event.publicoAlvo && (
														<div className="label">
															<span>Público alvo:</span>
															<ul>
																{event.publicoAlvo
																	.split(",")
																	.reduce((acc: any, objetivo, index) => {
																		const trimmedObjetivo = objetivo.trim();
																		const isFirstItem = index === 0;
																		const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

																		if (!isFirstItem && isLowercase) {
																			acc[acc.length - 1] += `, ${trimmedObjetivo}`;
																		} else {
																			acc.push(trimmedObjetivo);
																		}

																		return acc;
																	}, [])
																	.map((objetivo: string, index: number) => (
																		<li key={index}>{objetivo}</li>
																	))}
															</ul>
														</div>
													)}

													{event.objetivos && (
														<div className="label">
															<span>Objetivos:</span>
															<ul>
																{event.objetivos
																	.split(",")
																	.reduce((acc: any, objetivo, index) => {
																		const trimmedObjetivo = objetivo.trim();
																		const isFirstItem = index === 0;
																		const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

																		if (!isFirstItem && isLowercase) {
																			acc[acc.length - 1] += `, ${trimmedObjetivo}`;
																		} else {
																			acc.push(trimmedObjetivo);
																		}

																		return acc;
																	}, [])
																	.map((objetivo: string, index: number) => (
																		<li key={index}>{objetivo}</li>
																	))}
															</ul>
														</div>
													)}

													{event.facebook || event.instagram || event.linkedin || event.youtube ? (
														<div className="label">
															<span>Canais de transmissão da live:</span>
															<div className="social-media">
																{event.facebook ? (
																	<a href={event.facebook} target="_blank" rel="noreferrer">
																		<FacebookIcon size={"1.7rem"} />
																	</a>
																) : null}

																{event.instagram ? (
																	<a href={event.instagram} target="_blank" rel="noreferrer">
																		<InstagramIcon size={"1.7rem"} />
																	</a>
																) : null}

																{event.linkedin ? (
																	<a href={event.linkedin} target="_blank" rel="noreferrer">
																		<LinkedinIcon size={"1.7rem"} />
																	</a>
																) : null}

																{event.youtube ? (
																	<a href={event.youtube} target="_blank" rel="noreferrer">
																		<YoutubeIcon size={"1.7rem"} />
																	</a>
																) : null}
															</div>
														</div>
													) : null}
												</div>
											</div>
											<div className="inline-content">
												{event.tematicas && (
													<div className="label">
														<span>Temáticas abordadas:</span>
														<ul>
															{event.tematicas
																.split(",")
																.reduce((acc: any, objetivo, index) => {
																	const trimmedObjetivo = objetivo.trim();
																	const isFirstItem = index === 0;
																	const isLowercase = trimmedObjetivo.charAt(0).match(/[a-z]/);

																	if (!isFirstItem && isLowercase) {
																		acc[acc.length - 1] += `, ${trimmedObjetivo}`;
																	} else {
																		acc.push(trimmedObjetivo);
																	}

																	return acc;
																}, [])
																.map((objetivo: string, index: number) => (
																	<li key={index}>{objetivo}</li>
																))}
														</ul>
													</div>
												)}

												{event.cargaHoraria && (
													<div className="label">
														<span>Carga horária:</span>
														<p>{event.cargaHoraria}</p>
													</div>
												)}
											</div>
											<div className="more-content">
												{event.data ? (
													<div className="d-flex align-items-center gap-3">
														<span>
															<strong>Data: </strong> {format(addDays(new Date(event.data), 1), "dd/MM")}
														</span>
														{event.dataFim && (
															<span>
																<strong>Fim do Evento: </strong> {format(addDays(new Date(event.dataFim), 1), "dd/MM")}
															</span>
														)}
													</div>
												) : null}
												{event.horario ? (
													<div className="d-flex align0-items-center gap-3">
														<span>
															<strong>Horário: </strong> {TimeFormatter(event.horario)}
														</span>
														{event.horarioFim && (
															<span>
																<strong>Horário de Fim: </strong> {TimeFormatter(event.horarioFim)}
															</span>
														)}
													</div>
												) : null}

												{event.modalidade ? (
													<span>
														<strong>Modalidade: </strong> {event.modalidade}
													</span>
												) : null}

												{event.local ? (
													<span>
														<strong>Local: </strong> {event.local}
													</span>
												) : null}
												{event.link ? (
													<span>
														<strong>Link: </strong>
														<a className="text-white" href={event.link} target="_blank" rel="noreferrer">
															{event.link}
														</a>
													</span>
												) : null}
											</div>
										</>
									}
								/>
							))}
						</div>
					</div>
				</GridContainer>
			</div>
		</div>
	);
};

export default Evento;
