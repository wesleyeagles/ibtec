import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Sobre.Styles.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { BannerArrow, CheckIcon, CheckLupaIcon, MissaoIcon, MouseHandIcon, Pontilhado, PontilhadoMobile, RoundedRightArrow, ValoresIcon, VideoModalBtn, VisaoIcon } from "../../assets/Icones";
import TimelineSlider from "./Components/TimelineSlider";
import { useState } from "react";
import VideoModal from "../Home/Components/VideoModal";
import Slider from "react-slick";

interface IList {
	text: string;
}

const Sobre = () => {
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");
	const isMedia1280px = useMediaQuery("(max-width: 1280px)");
	const isMedia800px = useMediaQuery("(max-width: 800px)");
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	const [show, setShow] = useState(false);

	const settings = {
		slidesToShow: isMedia800px ? 1 : isMedia1280px ? 2 : 3,
		slidesToScroll: 1,
		infinite: false,
		arrows: isMedia1280px ? true : false, // Desativa as flechas padrão
	};

	const listaDesafios: IList[] = [
		{ text: "Liderar a oferta da inovação tecnológica em materiais e componentes." },
		{ text: "Atuar na eliminação de barreiras técnicas às exportações de calçados." },
		{ text: "Apoiar a implantação da TIB (tecnologia industrial básica) como ferramenta de acesso a mercados." },
		{ text: "Disponibilizar soluções inovadoras de forma acessível - em especial para as empresas de pequeno e médio porte." },
		{ text: "Manter infraestrutura de tecnologia e inovação, no estado da arte - no mais alto nível de desenvolvimento (recursos humanos e laboratoriais)." },
		{ text: "Inovar com sustentabilidade, garantindo o crescimento contínuo do Instituto." },
		{ text: "Buscar reconhecimento nacional e internacional na oferta de serviços tecnológicos e de inovação." },
	];

	const handleShow = () => setShow(true);

	return (
		<div className="sobre">
			<BannerContainer bgImage="/sobre-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<span>SOBRE NÓS</span>
						<h1>Há 50 anos contribuindo com soluções inovadoras</h1>
						<p>Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas.</p>
						<div className="icon">
							<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="quem-somos">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>Quem somos</h2>
							<p>
								O IBTeC - Instituto Brasileiro de Tecnologia do Couro, Calçado e Artefatos, há 47 anos atua ofertando soluções através do mais amplo portfólio de serviços
								técnico-científicos para a indústria coureiro-calçadista, de componentes, EPIs e têxtil.
							</p>
							<p>
								Situado no Vale do Sinos, Rio Grande do Sul, região considerada maior Cluster calçadista brasileiro, o IBTeC atende aos quesitos de normas técnicas, de qualidade e
								performance em produtos e materiais, por meio dos serviços de avaliação com ensaios na área de biomecânica, físico-mecânicos, de microbiologia e análise de substâncias
								restritivas.
							</p>
						</div>
						<div className="image">
							<img src="/fotos-quem-somos.webp" />
						</div>
					</div>
				</GridContainer>
			</div>
			<div className="oque-fazemos">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>O que fazemos?</h2>
							<p>
								Na área de segurança do trabalho realiza ensaios para obtenção e renovação de CAs para EPIs, calçados, luvas, tecidos e componentes. Atuamos ainda com consultoria
								técnica na capacitação da indústria, gestão de varejo e fornecedores, otimizando a venda ao consumidor final.
							</p>
							<p>
								O IBTeC mantém convênios de cooperação tecnológica e científica com escolas técnicas, universidades e órgãos de fomento, o que possibilita o alinhamento de suas
								pesquisas com as demandas do mercado.
							</p>
						</div>
						<div className="image">
							<img src="/historia.webp" />
						</div>
					</div>
				</GridContainer>
			</div>
			<div className="nossa-trajetoria" id="tragetoria">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>Nossa trajetória</h2>
						</div>
						<div className="text">
							<MouseHandIcon size={"1.5rem"} />
							<span>Arraste para o lado e continue a jornada</span>
						</div>
					</div>
					<div>
						<TimelineSlider />
					</div>
				</GridContainer>
			</div>
			<div className="solucoes-inovadoras">
				<GridContainer>
					<div className="label">
						<h2>Há 50 anos contribuindo com soluções inovadoras</h2>
					</div>
					<div className="wrapper">
						<div className="d-flex flex-column gap-3 relative">
							<div className="thumb">
								<div className="foto">
									<img src="/equipe.webp" />
									<div className="skeletons">
										<div className="skeleton-1" />
										<div className="skeleton-2" />
									</div>
								</div>
							</div>
							<div className="label">
								<CheckIcon size={"1.4rem"} />
								<span>Equipe especializada</span>
							</div>
							{isMedia1024px ? (
								<PontilhadoMobile width={"2px"} height={"50px"} className="pontilhado" />
							) : (
								<Pontilhado className="pontilhado" width={`${isMedia1024px ? "20px" : "210px"}`} height={"38px"} />
							)}
							<img className="light-equipe" src="/light-equipe.webp" />
						</div>
						<div className="video">
							<div role="button" onClick={handleShow} className="video-btn">
								<div className="icon">
									<VideoModalBtn size={"4rem"} />
								</div>
								<span>Assistir vídeo institucional</span>
							</div>
						</div>
					</div>
				</GridContainer>
				<div className="gradient" />
			</div>
			<GridContainer>
				<div className="slider-wrapper">
					<div className="slider-container">
						<Slider {...settings}>
							<div className="slide">
								<div className="icon">
									<MissaoIcon size={"2rem"} />
								</div>
								<div className="title">
									<h3>Missão</h3>
								</div>
								<div className="text">
									<p>
										Criar e aplicar soluções tecnológicas diferenciadas para aumentar a competitividade internacional e o desenvolvimento sustentável da indústria brasileira,
										especialmente do sistema coureiro-calçadista.
									</p>
								</div>
							</div>
							<div className="slide">
								<div className="icon">
									<VisaoIcon size={"2rem"} />
								</div>
								<div className="title">
									<h3>Visão</h3>
								</div>
								<div className="text">
									<p>
										Ser a entidade de referência nacional e internacional no desenvolvimento e implantação de soluções de tecnologia e inovação, capazes de agregar valor
										diferencial no posicionamento da indústria brasileira no mercado global, especialmente do sistema coureiro-calçadista.
									</p>
								</div>
							</div>
							<div className="slide">
								<div className="icon">
									<ValoresIcon size={"2rem"} />
								</div>
								<div className="title">
									<h3>Valores</h3>
								</div>
								<div className="text">
									<ul>
										<li>Sustentabilidade organizacional e da cadeia de valor.</li>
										<li>Competência técnica diferenciada.</li>
										<li>Compartilhamento do conhecimento.</li>
										<li>Geração de valor agregado.</li>
										<li>Inovação continuada.</li>
									</ul>
								</div>
							</div>
							{/* Adicione mais slides conforme necessário */}
						</Slider>
					</div>
				</div>
			</GridContainer>
			<div className="desafios">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<div>
								<h2>Desafios estratégicos do IBTeC</h2>
								<div>
									<RoundedRightArrow className="arrow" size={"3rem"} />
								</div>
							</div>
							<div>
								<CheckLupaIcon size={"2.5rem"} />
								<h3>Política de qualidade</h3>
								<p>
									Prestar serviços tecnológicos com confiabilidade e qualidade, visando suprir as necessidades dos clientes internos e externos, dentro dos padrões éticos, buscando a
									melhoria contínua.
								</p>
							</div>
						</div>
						<div className="list">
							{listaDesafios.map((item, index) => (
								<div key={`${item.text} - ${index}`} className="list-item">
									<div className="icon">
										<CheckIcon size={"1.2rem"} />
									</div>
									<div className="text">
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</GridContainer>
			</div>
			<VideoModal handleShow={handleShow} videoSrc="/videoinstitucional.mp4" show={show} setShow={setShow} />
		</div>
	);
};

export default Sobre;
