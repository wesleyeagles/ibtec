import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.ProdutividadeQualidade.Styles.scss";
import { BannerArrow, CheckIcon, ProdutividadeQualidadeIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { servicos } from "../../Global/Constants/ProdutividadeQualidade";

const ProdutividadeQualidade = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const scrollToTop = () => {
		const scrollToTopEasing = (t: number) => t * (2 - t);
		const startPosition = document.documentElement.scrollTop || document.body.scrollTop;
		const startTime = performance.now();

		const scrollToTopAnimation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = elapsedTime / 2500; // Animation duration (ms)
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
		<div className="produtividade-qualidade">
			<BannerContainer bgImage="/banner-produtividade-e-qualidade.webp">
				<GridContainer>
					<div className="wrapper">
						<div className="banner-section">
							<h1>Produtividade e Qualidade</h1>
							<p>
								O IBTeC desenvolve projetos técnicos para melhorar a produtividade e a qualidade das empresas calçadistas, criando um ambiente satisfatório para o desenvolvimento de
								inovações tecnológicas
							</p>
							<div className="icon">
								<BannerArrow size={`${isMedia600px ? "0rem" : "4rem"}`} />
							</div>
						</div>

						<div className="box">
							<div className="icon">
								<ProdutividadeQualidadeIcon />
							</div>
							<div className="text">
								<p>Ampliamos suas condições para concorrer no mercado nacional e internacional.</p>
							</div>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>

			<GridContainer>
				<div className="servicos">
					<div className="title">
						<h3>{servicos.title}</h3>
					</div>

					<div>
						{servicos.servicos.map((service, i) => {
							return (
								<div className="services" key={i}>
									<div className="icon">
										<CheckIcon size={"1.2rem"} />
									</div>

									<div className="label">
										<p>{service}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="btn-service">
					<Link onClick={() => scrollToTop()} to="">
						<button>QUERO SABER MAIS</button>
					</Link>
				</div>
			</GridContainer>
		</div>
	);
};

export default ProdutividadeQualidade;
