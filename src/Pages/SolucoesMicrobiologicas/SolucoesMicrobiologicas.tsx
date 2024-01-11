import Slider from "react-slick";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { ArrowRightIcon, BannerArrow, CheckIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import "./Pages.SolucoesMicrobiologicas.Styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { principaisServicosPrestados } from "./Variables/Pages.SolucoesMicrobiologicas.Variables";

const SolucoesMicrobiologicas = () => {
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
		<div className="microbiologicas">
			<BannerContainer bgImage="/banner-microbiologicas.webp">
				<GridContainer>
					<div className="banner-section">
						<div className="d-flex flex-column">
							<h1>Soluções Microbiológicas</h1>
							<div className="icon">
								<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
							</div>
						</div>
						<div>
							<img src="solucoes-biologicas.webp" alt="solucoes-microbiologicas" />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="areas-atuacao">
				<GridContainer>
					<h2>Áreas de atuação</h2>

					{principaisServicosPrestados.map((servico) => (
						<div className="atuacao" key={servico.titulo}>
							<h3>{servico.titulo}</h3>
							{servico.subtitulo ? <h4>{servico.subtitulo}</h4> : null}
							{servico.servicos.map((servicoSingle, index) => (
								<div className="atuacao-single" key={index}>
									<div className="icon">
										<CheckIcon size={"1.3rem"} />
									</div>
									<p>{servicoSingle} </p>
								</div>
							))}
						</div>
					))}
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

export default SolucoesMicrobiologicas;
