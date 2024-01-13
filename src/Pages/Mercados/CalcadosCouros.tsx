import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Styles/Pages.CalcadosCourosComponentes.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import VideoModal from "../Home/Components/VideoModal";

const CalcadosCouros = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

	const settings = {
		slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
		slidesToScroll: 1,
		arrows: false, // Desativa as flechas padrão
		infinite: false,
		center: false,
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
		<div className="calcados-couros">
			<BannerContainer bgImage="/calcados-couros-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Calçados, couros e componentes</h1>
						<p>
							Utilizando a biomecânica, ajudamos empresas a selecionar componentes e materiais, enquanto colaboramos na pesquisa para aprimorar a performance, conforto, saúde e bem-estar
							dos pés.
						</p>
						<div className="btns">
							<Link to="/contato">
								<button>QUERO SABER MAIS</button>
							</Link>
							<button onClick={handleShow}>ASSISTIR VíDEO</button>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="imagem">
					<img src="/calcados-couros-imagem.webp" />
				</div>

				<div className="text">
					<p>A demanda crescente por produtos com atributos da tecnologia do conforto é mais que uma tendência ou um diferencial de competitividade, é uma expectativa do consumidor.</p>
					<p>
						Através da biomecânica, auxiliamos as empresas na escolha dos componentes e materiais. Com pesquisa, colaboramos para o desenvolvimento de atributos de performance, conforto,
						saúde e bem-estar para os pés.
					</p>
					<p>Auxiliamos na adequação de seus produtos quanto aos limites de substâncias restritivas atendendo às normas internacionais.</p>
					<p>Realizamos avaliação através de ensaios físico-mecânicos em materiais e componentes, e prestamos consultoria em processos.</p>
					<p>Avaliamos materiais e produtos quanto ao tratamento contra fungos, bactérias, odores e biodegradabilidade.</p>
				</div>

				<div className="slider">
					<div className="wrapper">
						<div className="label">
							<h2>Laboratórios que atendem o setor</h2>
						</div>
						{isMedia1024px && (
							<div className="functions">
								<small>Veja todos os setores passando os slides</small>
								<div className="slider-btns">
									<SliderPrevIcon onClick={goToPrevSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
									<SliderNextIcon onClick={goToNextSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
								</div>
							</div>
						)}
					</div>

					<div className="slider-wrapper">
						<div className="slider-container">
							<Slider ref={(slider) => setSliderRef(slider)} {...settings}>
								<div className="slide laboratorio-de-substancias-restritas">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO DE SUBSTÂNCIAS RESTRITAS</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide laboratorio-fisico-mecanico">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO FÍSICO-MECÂNICO</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide laboratorio-de-biomecanica">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO DE BIOMECÂNICA</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</GridContainer>
			<VideoModal videoSrc="../fimec.mp4" show={show} setShow={setShow} handleShow={handleShow} />
		</div>
	);
};

export default CalcadosCouros;
