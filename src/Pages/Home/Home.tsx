import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Home.Styles.scss";
import { BannerArrow, PlayModalVideoIcon, PlayVideoIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import VideoModal from "./Components/VideoModal";

const Home = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const [isShowVideo, setShowVideo] = useState(false);

	const handleShow = () => setShowVideo(true);

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
									Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas, informações, realização de
									consultoria técnica e elaboração de testes e ensaios em laboratórios especializados para que as empresas possam se qualificar continuamente e avançar no mercado,
									inclusive na adequação para exportação.
								</p>
								<div>
									<Link to="">
										<button>QUERO SABER MAIS</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<VideoModal videoSrc="/VídeoInstitucional.mp4" handleShow={handleShow} show={isShowVideo} setShow={setShowVideo} />
		</>
	);
};

export default Home;
