import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Home.Styles.scss";
import {
	ArrowRightIcon,
	BannerArrow,
	ConhecimentoIcon,
	DashedBorder,
	InovacaoIcon,
	LongRightArrowIcon,
	PlayVideoIcon,
	PointIcon,
	SliderNextIcon,
	SliderPrevIcon,
	SustentabilidadeIcon,
	TecnologiaIcon,
} from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useEffect, useState } from "react";
import VideoModal from "./Components/VideoModal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TabsComponent from "./Components/TabsComponent";
import axios from "axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Carousel } from "primereact/carousel";
import ReactPlayer from "react-player";

interface Post {
	titulo: string;
	conteudo: string;
	createdAt: string; // Ou o tipo de data apropriado
	imagem: string;
	destaque?: number;
}

const Home = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");
	const [posts, setPosts] = useState<Post[]>([]);
	const [locale, setLocale] = useState<"br" | "en" | "es">("br");

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

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/posts/ultimos-posts", {
					params: {
						limit: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
					},
				});

				setPosts(response.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

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

	const items = [
		{
			type: "video",
			source: "../videoinstitucional2.mp4", // Substitua pelo link do seu vídeo
		},
		{
			type: "html",
			content:
				locale === "en" ? (
					<div className="custom-carousel-item">
						<BannerContainer bgImage="/home-banner.webp">
							<GridContainer>
								<div className="banner-section">
									<h1>The moment requires new solutions: IBTeC, your best partnership</h1>
									<p>For over 50 years in the market, the Institute offers technological services, innovation, and sustainability</p>
									<div>
										<Link to="/sobre">
											<button>LEARN MORE</button>
										</Link>
									</div>
									<div className="icon">
										<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
									</div>
								</div>
							</GridContainer>
						</BannerContainer>
					</div>
				) : (
					<div className="custom-carousel-item">
						<BannerContainer bgImage="/home-banner.webp">
							<GridContainer>
								<div className="banner-section">
									<h1>O momento requer novas soluções: IBTeC a sua melhor parceria</h1>
									<p>Há mais de 50 anos no mercado, o Instituto oferece serviços tecnológicos, inovação e sustentabilidade</p>
									<div>
										<Link to="/sobre">
											<button>QUERO SABER MAIS</button>
										</Link>
									</div>
									<div className="icon">
										<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
									</div>
								</div>
							</GridContainer>
						</BannerContainer>
					</div>
				),
		},
	];

	const itemTemplate = (item: any) => {
		return (
			<div className="react-video-container">
				{item.type === "video" ? <ReactPlayer url={"../videoinstitucional2.mp4"} width="100%" height={"100%"} controls={false} loop playing muted /> : item.content}
			</div>
		);
	};

	if (locale === "en") {
		return (
			<div className="home">
				<Carousel
					pt={{
						nextButton: {
							style: {
								position: "absolute",
								right: "15px",
								top: "50%",
							},
						},
						nextButtonIcon: {
							style: {
								color: "#00d6b6",
								width: "2rem",
								height: "2rem",
							},
						},
						previousButtonIcon: {
							style: {
								color: "#00d6b6",
								width: "2rem",
								height: "2rem",
							},
						},
						previousButton: {
							style: {
								position: "absolute",
								top: "50%",
								left: "15px",
								zIndex: "999999",
							},
						},
						indicators: {
							className: "d-none",
						},
					}}
					value={items}
					itemTemplate={itemTemplate}
				/>
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
											Watch the video <br /> <span>institutional</span>
										</p>
									</div>
								</div>
							</div>
							<div className="label">
								<h2>Technology at the service of industry</h2>
								<p>
									Since its creation in 1972, IBTeC has sought to contribute to the development of the leather-footwear sector through research, information, carrying out technical
									consultancy and preparation of tests and trials in specialized laboratories so that companies can continually qualify and advance in the market, including
									suitability for export.
								</p>
								<div>
									<Link onClick={scrollToTop} to="/sobre">
										<button>I WANT TO KNOW MORE</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="wrapper mt-100">
							<div className="title">
								<h3>Our pillars</h3>
							</div>
							<div className="icons">
								<div className="icon inovacao">
									<div>
										<InovacaoIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Innovation</span>
								</div>
								<div className="icon sustentabilidade">
									<div>
										<SustentabilidadeIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Sustainability</span>
								</div>

								<div className="icon tecnologia">
									<div>
										<TecnologiaIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Technology</span>
								</div>

								<div className="icon conhecimento">
									<div>
										<ConhecimentoIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Knowledge</span>
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
									<h2>Technological innovation center</h2>
									<p>
										Since its creation in 1972, IBTeC has sought to contribute to the development of the leather-footwear sector through research, information, carrying out
										technical consultancy and preparation of tests and continually advance in the market, including suitability for export.
									</p>
									<div>
										<Link onClick={scrollToTop} to="/nucleo-de-inovacao">
											<button>I WANT TO KNOW MORE</button>
										</Link>
									</div>
								</div>
								<div className="image">
									<img src="home_tenis.webp" />
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
						<div className="wrapper" id="setores">
							<div className="label">
								<h2>Some markets we serve</h2>
							</div>
							{isMedia1024px && (
								<div className="functions">
									<small>See all sectors by scrolling through the slides</small>
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
									<div className="slide equipamentos-de-protecao">
										<Link onClick={scrollToTop} to="/mercados/equipamentos-de-protecao-individual">
											<div className="label-container">
												<div className="label">PERSONAL PROTECTIVE EQUIPMENT</div>
												<div className="icon">
													<ArrowRightIcon />
												</div>
											</div>
										</Link>
									</div>
									<div className="slide calcados">
										<Link onClick={scrollToTop} to="/mercados/calcados-couros-componentes">
											<div className="label-container">
												<div className="label">FOOTAGE, LEATHER AND COMPONENTS</div>
												<div className="icon">
													<ArrowRightIcon />
												</div>
											</div>
										</Link>
									</div>
									<div className="slide industria-textil">
										<Link onClick={scrollToTop} to="/mercados/industria-textil">
											<div className="label-container">
												<div className="label">TEXTILE INDUSTRY</div>
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
				<div className="solucoes" id="solucoes">
					<GridContainer>
						<TabsComponent />
					</GridContainer>
				</div>
				<div className="programas" id="consultoria">
					<GridContainer>
						<div className="wrapper">
							<div className="label">
								<h2>Our expert consultancy programs</h2>
							</div>
							<div className="content">
								<p>
									We empower industries through <strong>specialized technical consultancy</strong>
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
								<h3>Productivity and quality</h3>
							</div>
							<div className="text">
								<p>
									IBTeC develops technical projects to improve the productivity and quality of footwear companies, creating a satisfactory environment for development of
									technological innovations, expanding its conditions to compete in the national and international market.
								</p>
								<Link onClick={() => scrollToTop()} to="/produtividade-e-qualidade">
									<span>I want to know more</span>
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
								<h3>Product development</h3>
							</div>
							<div className="text">
								<p>
									IBTeC offers technical development projects for products aimed at the leather footwear chain, seeking to launch them on the national and international market, with
									the use of biomechanics laboratories, physical and chemical tests, to evaluate the comfort and performance of the launched products.
								</p>
								<Link onClick={() => scrollToTop()} to="/desenvolvimento-de-produtos">
									<span>I want to know more</span>
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
											Development of <br /> technological projects
										</span>
									)}
								</h3>
							</div>
							<div className="text">
								<p>
									IBTeC develops training projects for material suppliers for footwear, accessories and clothing factories, evaluating and verifying the presence of chemical
									substances that may cause harm to human health and the environment. The manuals developed in the project are made up of tables with standards based in European
									international legislation such as Reach and the American AAFA.
								</p>
								<Link onClick={() => scrollToTop()} to="/projetos-tecnicos">
									<span>I want to know more</span>
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
							<div className="label">{isMedia600px ? <h2>See our latest post</h2> : <h2>See our latest posts</h2>}</div>
							<div className="d-flex align-items-center gap-2">
								<PointIcon className="point" size={"1.5rem"} />
								<span>Visit our blog</span>
							</div>
						</div>
						<div className="blog-posts">
							{posts.map((post, index) => {
								return (
									<Link onClick={() => scrollToTop()} key={index} to="/noticias">
										<div className="post">
											<div className="img-post">
												<img src={`https://dev.ibtec.org.br/dev/blog/${post.imagem}`} />
											</div>
											<div className="content">
												<div className="date-post">
													<span>{format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
												</div>
												<div className="label-post">
													<p>{post.titulo}</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</GridContainer>
					<div className="box" />
					<img className="circles" src="/circles.webp" />
				</div>
				<VideoModal videoSrc="../videoinstitucional.mp4" handleShow={handleShow} show={isShowVideo} setShow={setShowVideo} />
			</div>
		);
	} else {
		return (
			<div className="home">
				<Carousel
					pt={{
						nextButton: {
							style: {
								position: "absolute",
								right: "15px",
								top: "50%",
							},
						},
						nextButtonIcon: {
							style: {
								color: "#00d6b6",
								width: "2rem",
								height: "2rem",
							},
						},
						previousButtonIcon: {
							style: {
								color: "#00d6b6",
								width: "2rem",
								height: "2rem",
							},
						},
						previousButton: {
							style: {
								position: "absolute",
								top: "50%",
								left: "15px",
								zIndex: "999999",
							},
						},
						indicators: {
							className: "d-none",
						},
					}}
					value={items}
					itemTemplate={itemTemplate}
				/>
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
								<h2>Tecnologia à serviço da indústria</h2>
								<p>
									Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas, informações, realização de
									consultoria técnica e elaboração de testes e ensaios em laboratórios especializados para que as empresas possam se qualificar continuamente e avançar no mercado,
									inclusive na adequação para exportação.
								</p>
								<div>
									<Link onClick={scrollToTop} to="/sobre">
										<button>QUERO SABER MAIS</button>
									</Link>
								</div>
							</div>
						</div>
						<div className="wrapper mt-100">
							<div className="title">
								<h3>Nossos pilares</h3>
							</div>
							<div className="icons">
								<div className="icon inovacao">
									<div>
										<InovacaoIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Inovação</span>
								</div>
								<div className="icon sustentabilidade">
									<div>
										<SustentabilidadeIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Sustentabilidade</span>
								</div>

								<div className="icon tecnologia">
									<div>
										<TecnologiaIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Tecnologia</span>
								</div>

								<div className="icon conhecimento">
									<div>
										<ConhecimentoIcon size={`${isMedia600px ? "2.2em" : "3em"}`} />
									</div>
									<span>Conhecimento</span>
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
										<Link onClick={scrollToTop} to="/nucleo-de-inovacao">
											<button>QUERO SABER MAIS</button>
										</Link>
									</div>
								</div>
								<div className="image">
									<img src="home_tenis.webp" />
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
						<div className="wrapper" id="setores">
							<div className="label">
								<h2>Alguns mercados que atendemos</h2>
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
									<div className="slide equipamentos-de-protecao">
										<Link onClick={scrollToTop} to="/mercados/equipamentos-de-protecao-individual">
											<div className="label-container">
												<div className="label">EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL</div>
												<div className="icon">
													<ArrowRightIcon />
												</div>
											</div>
										</Link>
									</div>
									<div className="slide calcados">
										<Link onClick={scrollToTop} to="/mercados/calcados-couros-componentes">
											<div className="label-container">
												<div className="label">CALÇADOS, COUROS E COMPONENTES</div>
												<div className="icon">
													<ArrowRightIcon />
												</div>
											</div>
										</Link>
									</div>
									<div className="slide industria-textil">
										<Link onClick={scrollToTop} to="/mercados/industria-textil">
											<div className="label-container">
												<div className="label">INDÚSTRIA TÊXTIL</div>
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
				<div className="solucoes" id="solucoes">
					<GridContainer>
						<TabsComponent />
					</GridContainer>
				</div>
				<div className="programas" id="consultoria">
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
									O IBTeC desenvolve projetos técnicos para melhorar a produtividade e a qualidade das empresas calçadistas, criando um ambiente satisfatório para o desenvolvimento
									de inovações tecnológicas, ampliando suas condições para concorrer no mercado nacional e internacional.
								</p>
								<Link onClick={() => scrollToTop()} to="/produtividade-e-qualidade">
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
									O IBTeC oferece projetos de desenvolvimento técnico de produtos voltados à cadeia coureira calçadista, buscando o lançamento no mercado nacional e internacional,
									com o uso dos laboratórios de biomecânica, ensaios físicos e químicos, para avaliar o conforto e o desempenho dos produtos lançados.
								</p>
								<Link onClick={() => scrollToTop()} to="/desenvolvimento-de-produtos">
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
									substâncias químicas que possam causar danos à saúde humana e ao meio ambiente. Os manuais desenvolvidos no projeto são formados por tabelas com padrões baseados
									nas legislações internacionais europeias como o Reach e a americana AAFA.
								</p>
								<Link onClick={() => scrollToTop()} to="/projetos-tecnicos">
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
						<div className="blog-posts">
							{posts.map((post, index) => {
								return (
									<Link onClick={() => scrollToTop()} key={index} to="/noticias">
										<div className="post">
											<div className="img-post">
												<img src={`https://dev.ibtec.org.br/dev/blog/${post.imagem}`} />
											</div>
											<div className="content">
												<div className="date-post">
													<span>{format(new Date(post.createdAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
												</div>
												<div className="label-post">
													<p>{post.titulo}</p>
												</div>
											</div>
										</div>
									</Link>
								);
							})}
						</div>
					</GridContainer>
					<div className="box" />
					<img className="circles" src="/circles.webp" />
				</div>
				<VideoModal videoSrc="../videoinstitucional.mp4" handleShow={handleShow} show={isShowVideo} setShow={setShowVideo} />
			</div>
		);
	}
};

export default Home;
