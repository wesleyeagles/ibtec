import Slider from "react-slick";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { ArrowRightIcon, BannerArrow, PointIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import "./Pages.LaboratorioBiomecanica.Styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const LaboratorioBiomecanica = () => {
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
		<div className="biomecanica">
			<BannerContainer bgImage="/banner-solucoes-biomecanicas.webp">
				<GridContainer>
					<div className="banner-section">
						<div className="d-flex flex-column">
							<h1>Soluções Biomecânicas</h1>
							<p>
								O Laboratório de Biomecânica realiza serviços e pesquisas voltados a melhorias de calçados e componentes que agreguem atributos de conforto, performance/desempenho,
								saúde e segurança para os usuários, sejam eles crianças, mulheres, atletas ou trabalhadores.
							</p>
							<div className="icon">
								<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
							</div>
						</div>
						<div>
							<img src="biomecanica-1.webp" alt="solucoes-biomecanicas" />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="ensaios">
				<GridContainer>
					<div className="ensaios-container">
						<div className="images">
							<img src="biomecanica-2.webp" alt="biomecanica-2" />
							<img src="biomecanica-3.webp" alt="biomecanica-3" />
						</div>
						<div className="label">
							<p>Buscamos qualificar os produtos, conforme a sua funcionalidade e para qual objetivo ele será fabricado. Para isso, existem normas de Conforto em Calçados.</p>
							<div className="ensaios-holder">
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Massa:</strong>
										<span>Leveza do calçado;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Distribuição de Pressão Plantar:</strong>
										<span>Materiais que contribuem para o equilíbrio das pressões nos pés;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Temperatura Interna:</strong>
										<span>Aquecimento do calçado;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Índice de Amortecimento:</strong>
										<span>Absorção dos impactos durante os movimentos;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Índice de Pronação:</strong>
										<span>Estabilidade do calçado;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Percepção do Calce:</strong>
										<span>Percepção do usuário;</span>
									</div>
								</div>
								<div className="ensaio-single">
									<div className="point">
										<PointIcon />
									</div>
									<div>
										<strong>Avaliação de marcas e lesões:</strong>
										<span>Machucados ou ferimentos nos pés.</span>
									</div>
								</div>
							</div>
							<h3>Selo conforto</h3>
							<p>
								O Brasil é o único país no mundo com normas para avaliar o conforto e o IBTeC, o único órgão que emite uma certificação para estes produtos aprovados através do Selo
								Conforto, que traz ainda mais confiabilidade aos produtos e muito mais valor agregado a todo setor calçadista.
							</p>
							<p>
								Os profissionais do laboratório de Biomecânica também ministram cursos, palestras e treinamentos sobre os temas relacionados à biomecânica do calçado, conforto,
								inovação e performance, contribuindo com o crescimento contínuo das empresas do setor calçadista.
							</p>
						</div>
					</div>
				</GridContainer>
				<GridContainer>
					<div className="text-center text-white mb-5">
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
		</div>
	);
};

export default LaboratorioBiomecanica;
