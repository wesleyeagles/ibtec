import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Home.Styles.scss";
import { BannerArrow } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

const Home = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
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
		</>
	);
};

export default Home;
