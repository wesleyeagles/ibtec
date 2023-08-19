import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Home.Styles.scss";
import {
	ArrowRightIcon,
	BannerArrow,
	DashedBorder,
	InovacaoIcon,
	LongRightArrowIcon,
	PlayVideoIcon,
	PointIcon,
	SegurancaIcon,
	SliderNextIcon,
	SliderPrevIcon,
	SustentabilidadeIcon,
	TecnologiaIcon,
} from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import VideoModal from "./Components/VideoModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TabsComponent from "./Components/TabsComponent";

const Home = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const [isShowVideo, setShowVideo] = useState(false);

	const handleShow = () => setShowVideo(true);

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
											<img src="/pessoa-inovacao.webp" alt="Pessoa" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</GridContainer>
				<div className="content">
					<img className="/light-effect" src="light-effect.webp" />
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
								<SliderPrevIcon onClick={goToPrevSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
								<SliderNextIcon onClick={goToNextSlide} size={`${isMedia600px ? "2.0rem" : "2.5rem"}`} />
							</div>
						</div>
					</div>
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
								<div className="slide containers">
									<Link to="">
										<div className="label-container">
											<div className="label">CONTAINERS</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide banheiros-quimicos">
									<Link to="">
										<div className="label-container">
											<div className="label">BANHEIROS QUÍMICOS</div>
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
			<div className="solucoes">
				<GridContainer>
					<TabsComponent />
				</GridContainer>
			</div>
			<div className="programas">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>Nossos programas de consultoria especializada</h2>
						</div>
						<div className="content">
							<p>
								Capacitamos indústrias através da <strong>consultoria técnica especializada</strong>
							</p>
							<img src="/bonequinho.webp" />
							<div className="box" />
						</div>
					</div>
					<div className="ctx">
						<div className="icon">
							<img src="/produtividade-e-qualidade-icon.webp" />
							<DashedBorder height={"15rem"} />
						</div>
						<div className="title">
							<h3>Produtividade e qualidade</h3>
						</div>
						<div className="text">
							<p>
								O IBTeC desenvolve projetos técnicos para melhorar a produtividade e a qualidade das empresas calçadistas, criando um ambiente satisfatório para o desenvolvimento de
								inovações tecnológicas, ampliando suas condições para concorrer no mercado nacional e internacional.
							</p>
							<Link to="">
								<span>Quero saber mais</span>
								<LongRightArrowIcon />
							</Link>
							<div className="line" />
						</div>
					</div>
					<div className="ctx">
						<div className="icon">
							<img src="/desenvolvimento-de-produtos.webp" />
							<DashedBorder height={"15rem"} />
						</div>
						<div className="title">
							<h3>Desenvolvimento de produtos</h3>
						</div>
						<div className="text">
							<p>
								O IBTeC oferece projetos de desenvolvimento técnico de produtos voltados à cadeia coureira calçadista, buscando o lançamento no mercado nacional e internacional, com o
								uso dos laboratórios de biomecânica, ensaios físicos e químicos, para avaliar o conforto e o desempenho dos produtos lançados.
							</p>
							<Link to="">
								<span>Quero saber mais</span>
								<LongRightArrowIcon />
							</Link>
							<div className="line" />
						</div>
					</div>
					<div className="ctx">
						<div
							style={{
								position: isMedia600px ? "static" : "relative",
								right: "8px",
							}}
							className="icon"
						>
							<img src="/desenvolvimento-de-projetos.webp" />
						</div>
						<div
							style={{
								paddingTop: "7px",
							}}
							className="title"
						>
							<h3
								style={{
									position: isMedia600px ? "static" : "relative",
									right: "8px",
								}}
							>
								{isMedia600px ? (
									"Desenvolvimento de projetos tecnológicos"
								) : (
									<span>
										Desenvolvimento de <br /> projetos tecnológicos
									</span>
								)}
							</h3>
						</div>
						<div className="text">
							<p>
								O IBTeC desenvolve projetos de capacitação de fornecedores de materiais para fábricas de calçados, acessórios e vestuários, avaliando e verificando a presença de
								substâncias químicas que possam causar danos à saúde humana e ao meio ambiente. Os manuais desenvolvidos no projeto são formados por tabelas com padrões baseados nas
								legislações internacionais europeias como o Reach e a americana AAFA.
							</p>
							<Link to="">
								<span>Quero saber mais</span>
								<LongRightArrowIcon />
							</Link>
						</div>
					</div>
				</GridContainer>
				<img className="light-effect" src="/light-effect-2.webp" />
			</div>
			<div className="blog">
				<GridContainer>
					<div className="wrapper">
						<div className="label">{isMedia600px ? <h2>Veja nosso último post</h2> : <h2>Veja nossos últimos posts</h2>}</div>
						<div className="d-flex align-items-center gap-2">
							<PointIcon className="point" size={"1.5rem"} />
							<span>Visite nosso blog</span>
						</div>
					</div>
					{isMedia600px ? (
						<div className="blog-posts">
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-1.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>07 de março</span>
										</div>
										<div className="label-post">
											<p>Reportagem veiculada na revista tecnicouro vence a 23° edição do prêmio Primus Inter Pares Assintecal</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border" />
											<LongRightArrowIcon />
										</div>
									</div>
								</div>
							</Link>
						</div>
					) : isMedia1024px ? (
						<div className="blog-posts">
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-1.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>07 de março</span>
										</div>
										<div className="label-post">
											<p>Reportagem veiculada na revista tecnicouro vence a 23° edição do prêmio Primus Inter Pares Assintecal</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border-anima" />
											<LongRightArrowIcon />
										</div>
										<div className="d-flex justify-content-center">
											<span className="anima-text">Abrir post</span>
										</div>
									</div>
								</div>
							</Link>
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-2.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>03 de março</span>
										</div>
										<div className="label-post">
											<p>Fábrica conceito terá na fimec 2023 edição histórica</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border-anima" />
											<LongRightArrowIcon />
										</div>
										<div className="d-flex justify-content-center">
											<span className="anima-text">Abrir post</span>
										</div>
									</div>
								</div>
							</Link>
						</div>
					) : (
						<div className="blog-posts">
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-1.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>07 de março</span>
										</div>
										<div className="label-post">
											<p>Reportagem veiculada na revista tecnicouro vence a 23° edição do prêmio Primus Inter Pares Assintecal</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border-anima" />
											<LongRightArrowIcon />
										</div>
										<div className="d-flex justify-content-center">
											<span className="anima-text">Abrir post</span>
										</div>
									</div>
								</div>
							</Link>
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-2.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>03 de março</span>
										</div>
										<div className="label-post">
											<p>Fábrica conceito terá na fimec 2023 edição histórica</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border-anima" />
											<LongRightArrowIcon />
										</div>
										<div className="d-flex justify-content-center">
											<span className="anima-text">Abrir post</span>
										</div>
									</div>
								</div>
							</Link>
							<Link to="">
								<div className="post">
									<div className="img-post">
										<img src="/blog-post-3.webp" />
									</div>
									<div className="content">
										<div className="date-post">
											<span>01 de março</span>
										</div>
										<div className="label-post">
											<p>Startups de todo o estado já podem se inscrever para o BRDE LABS RS 2023</p>
										</div>
										<div className="d-flex align-items-center">
											<div className="border-anima" />
											<LongRightArrowIcon />
										</div>
										<div className="d-flex justify-content-center">
											<span className="anima-text">Abrir post</span>
										</div>
									</div>
								</div>
							</Link>
						</div>
					)}
				</GridContainer>
				<div className="box" />
				<img className="circles" src="/circles.webp" />
			</div>
			<VideoModal videoSrc="../videoinstitucional.mp4" handleShow={handleShow} show={isShowVideo} setShow={setShowVideo} />
		</>
	);
};

export default Home;
