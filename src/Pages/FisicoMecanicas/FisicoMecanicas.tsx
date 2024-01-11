import Slider from "react-slick";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { ArrowRightIcon, PointIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import "./Pages.FisicoMecanicas.Styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { produtosEnsaiados } from "./Variables/Pages.FisicoMecanicas.Variables";

const FisicoMecanicas = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

	const settings = {
		slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
		slidesToScroll: 1,
		arrows: false, // Desativa as flechas padrão
	};

	const goToPrevSlide = () => {
		if (sliderRef) {
			sliderRef.slickPrev();
		}
	};

	const goToNextSlide = () => {
		if (sliderRef) {
			sliderRef.slickNext();
		}
	};

	return (
		<div className="fisico-mecanicas">
			<BannerContainer bgImage="/banner-fisico-mecanico.webp">
				<GridContainer>
					<div className="banner-section">
						<div className="d-flex flex-column">
							<h1>Soluções Físico-Mecânicas</h1>
							<p>
								O laboratório físico-mecânico disponibiliza serviços laboratoriais para o controle da qualidade em diversos segmentos como calçados, couro, bolsas, componentes e
								artefatos, têxteis, polímeros, entre outros.
							</p>
						</div>
						<div>
							<img src="fisico-mecanico-2.webp" alt="solucoes-microbiologicas" />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="ensaios">
				<GridContainer>
					<div className="wrapper">
						<div className="wrapping">
							<div>
								<img src="fisico-mecanico-3.webp" alt="substancia-2" />
							</div>
							<div className="ensaios-wrapper">
								<h2>Principais produtos ensaiados</h2>
								{produtosEnsaiados.map((produtos, index) => (
									<div key={index}>
										<div className="icon">
											<PointIcon size={"1rem"} />
										</div>
										<span>{produtos + ";"}</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3>Qual a finalidade dos ensaios?</h3>
							<p>
								Os ensaios físico-mecânicos têm como finalidade atender as necessidades de empresas que buscam desenvolver materiais e produtos, comprovando a qualidade para o
								atendimento das necessidades dos consumidores e também frente à concorrência, possibilitando também a participação em editais públicos.
							</p>
							<p>
								Podemos verificar características físico-mecânicas como: densidade, rasgamento, tração, dureza, abrasão, compressão, impacto, fricção, encolhimento, manchamento,
								flexão, escorregamento, resistência a água, resistência ao corte, colagem, pH, viscosidade, solidez a luz, entre outros.
							</p>
							<h3>Como ocorrem?</h3>
							<p>
								Em geral, os ensaios compreendem um período de aproximadamente 5 dias úteis e os relatórios técnicos são enviados aos clientes por meio digital de forma segura, que
								garante maior agilidade na entrega.
							</p>
							<p>
								Em constante atualização, o laboratório realiza seus ensaios utilizando normas técnicas, nacionais e internacionais, com acreditação de organismos certificadores, que
								garantem a confiabilidade dos resultados.
							</p>
							<p>
								Seja qual for o seu ramo de atuação, para garantir a execução e manutenção de seus produtos, é necessário verificar a sua qualidade e para isso, o IBTeC possui um corpo
								técnico especializado para atendimento aos clientes, que prestam assistência técnica, auxiliam na interpretação de resultados dos ensaios, no desenvolvimento dos
								produtos e identificação de problemas.
							</p>
							<p>
								O laboratório possui certificações e acreditações de organismos nacionais e internacionais. Estas desempenham papel chave em nossa estratégia, para assegurar que os
								nossos ensaios atinjam os níveis requeridos de qualidade.
							</p>

							<Link to="">
								<button>QUERO SABER MAIS</button>
							</Link>
						</div>
					</div>
				</GridContainer>
			</div>
			<GridContainer>
				<div className="text-center text-white mb-5 mt-5">
					<h2>Alguns mercados que atendemos</h2>
				</div>
				{isMedia1024px ? (
					<div className="functions">
						<small>Veja todos os setores passando os slides</small>
						<div className="slider-btns">
							<SliderPrevIcon onClick={goToPrevSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
							<SliderNextIcon onClick={goToNextSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
						</div>
					</div>
				) : null}

				<div className="slider-wrapper">
					<div className="slider-container">
						<Slider ref={(slider) => setSliderRef(slider)} {...settings}>
							<div className="slide industria-textil">
								<Link to="">
									<div className="label-container">
										<div className="label">INDÚSTRIA TÊXTIL</div>
										<div className="icon">
											<ArrowRightIcon />
										</div>
									</div>
								</Link>
							</div>
							<div className="slide calcados">
								<Link to="">
									<div className="label-container">
										<div className="label">CALÇADOS, COUROS E COMPONENTES</div>
										<div className="icon">
											<ArrowRightIcon />
										</div>
									</div>
								</Link>
							</div>
							<div className="slide equipamentos-de-protecao">
								<Link to="">
									<div className="label-container">
										<div className="label">EQUIPAMENTOS DE PROTEÇÃO</div>
										<div className="icon">
											<ArrowRightIcon />
										</div>
									</div>
								</Link>
							</div>
							{/* Adicione mais slides conforme necessário */}
						</Slider>
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default FisicoMecanicas;
