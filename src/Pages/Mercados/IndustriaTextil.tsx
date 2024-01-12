import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Styles/Pages.IndustriaTextil.Styles.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon } from "../../assets/Icones";

const IndustriaTextil = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

	const settings = {
		slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
		slidesToScroll: 1,
		arrows: false, // Desativa as flechas padrão
		infinite: false,
		center: false,
	};

	const scrollToTop = () => {
		const scrollToTopEasing = (t: number) => t * (2 - t);
		const startPosition = document.documentElement.scrollTop || document.body.scrollTop;
		const startTime = performance.now();

		const scrollToTopAnimation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = elapsedTime / 1500; // Animation duration (ms)
			const easingProgress = scrollToTopEasing(progress);

			if (progress < 1) {
				document.body.scrollTop = startPosition * (1 - easingProgress);
				document.documentElement.scrollTop = startPosition * (1 - easingProgress);
				requestAnimationFrame(scrollToTopAnimation);
			} else {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		};

		requestAnimationFrame(scrollToTopAnimation);
	};

	return (
		<div className="industria-textil">
			<BannerContainer bgImage="/industria-textil-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Indústria Têxtil</h1>
						<p>O Laboratório Têxtil do IBTeC, realiza ensaios e análises têxteis seguindo normas técnicas nacionais e internacionais em tecidos, malhas e produtos acabados diversos.</p>
						<div className="d-flex gap-2">
							<Link to="/contato">
								<button>QUERO SABER MAIS</button>
							</Link>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="imagem">
					<img src="/industria-textil-imagem.webp" />
				</div>

				<div className="text">
					<p>
						Dentro da proposta de ampliar o leque de segmentos atendidos, atualmente o IBTeC tem dado atenção para o setor têxtil, porque este é um segmento com sinergia com o calçadista,
						tendo ampliado significativamente o uso destes materiais na composição dos calçados.
					</p>
					<p>
						Além disso, por meio de parcerias com outras instituições, o IBTeC se propõe a alcançar um número maior de empreendimentos, como o que acontece no realizado junto ao Sebrae,
						permitindo atender às pequenas e microempresas, e com isso contribuir para a melhoria dos produtos.
					</p>
					<p>
						Ainda no campo das parcerias, o Instituto hoje coordena o comitê da Associação Brasileira de Normas Técnicas (ABNT) - do CB-11, do couro, calçados e componentes. Além disso,
						participa e coordena comissões de estudo do CB32 e do Comitê Brasileiro de Equipamentos de Proteção Individual.
					</p>
				</div>

				<div className="slider">
					<h2>Laboratórios que atendem o setor</h2>

					<div className="slider-wrapper">
						<div className="slider-container">
							<Slider ref={(slider) => setSliderRef(slider)} {...settings}>
								<div className="slide laboratorio-de-substancias-restritas">
									<Link onClick={scrollToTop} to="/laboratorio-de-substancias-restritas">
										<div className="label-container">
											<div className="label">LABORATÓRIO DE SUBSTÂNCIAS RESTRITAS</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide"></div>
								<div className="slide"></div>
							</Slider>
						</div>
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default IndustriaTextil;
