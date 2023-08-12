import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Home.Styles.scss";
import { BannerArrow, InovacaoIcon, PlayVideoIcon, PointIcon, SegurancaIcon, SliderNextIcon, SliderPrevIcon, SustentabilidadeIcon, TecnologiaIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import VideoModal from "./Components/VideoModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const [isShowVideo, setShowVideo] = useState(false);

	const handleShow = () => setShowVideo(true);

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

	const settings = {
		slidesToShow: 3,
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
		<>
			<BannerContainer bgImage="/home-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Somos o IBTeC, instituto brasileiro de tecnologia</h1>
						<p>Há 50 anos no mercado, trabalhando na oferta de: Tecnologia, conforto, pesquisa e inovação</p>
						<div>
							<Link to="">
								<button>QUERO SABER MAIS</button>
							</Link>
						</div>
						<div className="icon">
							<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="ha-50-anos-section">
					<div className="wrapper">
						<div className="video">
							<div role="button" onClick={handleShow} className="btn-video-container">
								<div className="icon">
									<PlayVideoIcon size={"3rem"} />
								</div>
								<div className="text">
									<p>
										Assista o vídeo <br /> <span>institucional</span>
									</p>
								</div>
							</div>
						</div>
						<div className="label">
							<h2>Há 50 anos contribuindo com soluções inovadoras</h2>
							<p>
								Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas, informações, realização de consultoria
								técnica e elaboração de testes e ensaios em laboratórios especializados para que as empresas possam se qualificar continuamente e avançar no mercado, inclusive na
								adequação para exportação.
							</p>
							<div>
								<Link to="">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="wrapper mt-100">
						<div className="title">
							<h3>Nossos pilares fundamentais</h3>
						</div>
						<div className="icons">
							<div className="icon sustentabilidade">
								<div>
									<SustentabilidadeIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
								</div>
								<span>Sustentabilidade</span>
							</div>
							<div className="icon inovacao">
								<div>
									<InovacaoIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
								</div>
								<span>Inovação</span>
							</div>
							<div className="icon tecnologia">
								<div>
									<TecnologiaIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
								</div>
								<span>Tecnologia</span>
							</div>
							<div className="icon seguranca">
								<div>
									<SegurancaIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
								</div>
								<span>Segurança</span>
							</div>
						</div>
					</div>
				</div>
			</GridContainer>
			<div className="relative-container">
				<GridContainer>
					<div className="nucleo">
						<div className="wrapper">
							<div className="label">
								<h2>Núcleo de inovação tecnológica</h2>
								<p>
									Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas, informações, realização de
									consultoria técnica e elaboração de testes e tinuamente e avançar no mercado, inclusive na adequação para exportação.
								</p>
								<div>
									<Link to="">
										<button>QUERO SABER MAIS</button>
									</Link>
								</div>
							</div>
							<div className="d-flex w-100">
								<div className="d-flex flex-column">
									<div className="d-flex flex-column align-items-end">
										<div className="text">
											<div className="point">
												<PointIcon size={"1.5em"} />
											</div>
											<small>
												Promover <span>inovação e tecnologia</span>
											</small>
										</div>
									</div>
									<div className="container">
										<div className="image-wrapper">
											<img src="pessoa-inovacao.webp" alt="Pessoa" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</GridContainer>
				<div className="content">
					<img className="light-effect" src="light-effect.webp" />
				</div>
			</div>
			<div className="mercados">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>Alguns mercados que atendemos</h2>
						</div>
						<div className="functions">
							<small>Veja todos os setores passando os slides</small>
							<div className="slider-btns">
								<SliderPrevIcon onClick={goToPrevSlide} size={"2.5em"} />
								<SliderNextIcon onClick={goToNextSlide} size={"2.5em"} />
							</div>
						</div>
					</div>
					<div className="slider-wrapper">
						<div className="slider-container">
							<Slider ref={(slider) => setSliderRef(slider)} {...settings}>
								<div>Slide 1</div>
								<div>Slide 2</div>
								<div>Slide 3</div>
								<div>Slide 4</div>
								{/* Adicione mais slides conforme necessário */}
							</Slider>
						</div>
					</div>
				</GridContainer>
			</div>
			<VideoModal videoSrc="../videoinstitucional.mp4" handleShow={handleShow} show={isShowVideo} setShow={setShowVideo} />
		</>
	);
};

export default Home;
