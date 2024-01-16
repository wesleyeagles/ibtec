import { useEffect, useState } from "react";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Associados.Style.scss";
import Slider from "react-slick";
import CustomSelect from "../../Components/FormInputs/CustomSelectInput/CustomSelect";
import useAssociadosForm from "./Hooks/useAssociadosForm";
import DetalhesAssociado from "./DetalhesAssociado";
import { ApoioDesenvolvimentoIcon, BeneficiosFinanceirosIcon, EmpresaEmDestaqueIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import { Link } from "react-router-dom";
import CustomText from "../../Components/FormInputs/CustomTextInput/CustomText";

const Associados = () => {
	const { methods } = useAssociadosForm();
	const [empresaSelecionada, setEmpresaSelecionada] = useState<any | null>(null);
	const [nomeEmpresa, setNomeEmpresa] = useState("");

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

	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/associates/todos-associados");
				setData(response.data);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		}
		fetchData();
	}, []);

	const segmento = methods.watch("Segmento");

	const associadosFiltrados = nomeEmpresa
		? data.filter((associado: any) => associado.fantasy_name.toLowerCase().includes(nomeEmpresa))
		: segmento
		? data.filter((associado: any) => associado.segment_id === segmento)
		: data;

	const associadosPorSlide = 15;
	const slides: any = [];

	for (let i = 0; i < associadosFiltrados.length; i += associadosPorSlide) {
		slides.push(associadosFiltrados.slice(i, i + associadosPorSlide));
	}

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const customStyles = {
		// Estilo do controle (a parte que exibe o valor selecionado)
		control: (provided: any, state: any) => ({
			...provided,
			backgroundColor: "transparent", // Fundo transparente
			borderColor: state.isFocused ? "#000A16" : "#F2F2F2",
			color: "white", // Cor das letras branca
			height: 50, // Ajuste a altura conforme necessário
		}),
		// Estilo do menu suspenso
		menu: (provided: any) => ({
			...provided,
			backgroundColor: "#000A16", // Cor de fundo escura para o menu
		}),
		menuPortal: (provided: any) => ({
			...provided,
			padding: 0,
			zIndex: 9999, // Ajusta o índice Z para sobrepor outros elementos
		}),
		// Estilo dos itens no menu suspenso
		option: (provided: any, state: any) => ({
			...provided,
			margin: 0, // Remova a margem entre o Select e o menu
			backgroundColor: state.isFocused ? "#000409" : "transparent",
			color: "white", // Cor do texto quando focado
		}),
		singleValue: (provided: any) => ({
			...provided,
			color: "white", // Cor do texto da opção selecionada
		}),
		placeholder: (provided: any) => ({
			...provided,
			color: "white", // Cor do texto do placeholder
		}),
		input: (provided: any) => ({
			...provided,
			color: "white", // Cor do texto do placeholder
		}),
	};

	const handleEmpresaClick = (empresa: any) => {
		setEmpresaSelecionada(empresa);
	};

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

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
		<div className="associados">
			<BannerContainer bgImage="/banner-abnt.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Seja nosso associado</h1>
						<Link to="/contato">
							<button>ASSOCIE-SE</button>
						</Link>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="parceria">
					<img src="parceria.webp" />
					<div>
						<h3>Parceria que fortalece</h3>
						<p>
							O associado ao IBTeC tem prioridade na participação de projetos realizados pelo Instituto com os mais diversos focos: projetos de desenvolvimento de produtos e inovação,
							feiras, congressos, seminários e outros.
						</p>
						<p>
							Além de tudo isso, traz sua empresa para mais perto de nós, possibilitando uma interação contínua, atendimento de suas demandas, para o desenvolvimento e aprimoramento de
							seus produtos através de serviços de ensaios laboratoriais, pesquisa e inovação.
						</p>
						<Link onClick={() => scrollToTop()} to="/contato">
							<button>ASSOCIE-SE</button>
						</Link>
					</div>
				</div>
			</GridContainer>
			<div className="ensaios">
				<GridContainer>
					<h2
						style={{
							textAlign: "center",
							marginBottom: "5rem",
						}}
					>
						Benefícios de ser um associado IBTeC
					</h2>
					<div className="ensaios-container">
						<div className="ensaio-single">
							<div className="icon">
								<BeneficiosFinanceirosIcon size={"2rem"} />
							</div>
							<h4>Benefícios financeiros</h4>
							<p>Desconto de 10% em todos os serviços realizados no Instituto:</p>
							<ul>
								<li>Ensaios laboratoriais;</li>
								<li>Projetos e pesquisas;</li>
								<li>Treinamentos e palestras;</li>
								<li>Consultoria técnica;</li>
							</ul>
							<p>Prazo de 28 dias para pagamento.</p>
						</div>
						<div className="ensaio-single">
							<div className="icon">
								<ApoioDesenvolvimentoIcon size={"2rem"} />
							</div>
							<h4>Apoio no desenvolvimento de sua equipe </h4>
							<ul>
								<li>Gratuidade ou desconto nos cursos e eventos técnicos promovidos pelo Instituto;</li>
								<li>Assinatura da Revista Tecnicouro;</li>
								<li>Descontos nos cursos de Pós Graduação da FGV Decision-RS;</li>
							</ul>
						</div>
						<div className="ensaio-single centered">
							<div className="icon">
								<EmpresaEmDestaqueIcon size={"2rem"} />
							</div>
							<h4>Sua empresa em destaque</h4>
							<ul>
								<li>Veiculação da identidade visual de sua empresa em nosso site e no Guia de Associados da Tecnicouro;</li>
								<li>Condições especiais para anúncios na Revista Tecnicouro;</li>
							</ul>
						</div>
					</div>
				</GridContainer>
			</div>
			<GridContainer>
				<h2>Relação dos associados</h2>

				{empresaSelecionada && <DetalhesAssociado empresa={empresaSelecionada} />}

				<CustomSelect
					control={methods.control}
					name="Segmento"
					styles={customStyles}
					placeholder="Selecione um segmento"
					isClearable
					noOptionsMessage={() => "Nenhum segmento encontrado"}
					options={[
						{
							label: "Artefatos",
							value: 1,
						},
						{
							label: "Calçados",
							value: 2,
						},
						{
							label: "Componentes",
							value: 3,
						},
						{
							label: "Confecções",
							value: 4,
						},
						{
							label: "Couros",
							value: 5,
						},
						{
							label: "EPIs",
							value: 6,
						},
						{
							label: "Máquinas e Ferramentas",
							value: 7,
						},
						{
							label: "Produtos Químicos",
							value: 8,
						},
						{
							label: "Serviços",
							value: 9,
						},
						{
							label: "Outros",
							value: 10,
						},
					]}
				/>

				<CustomText
					style={{
						fontSize: "13px",
						width: "220px",
					}}
					placeholder="Filtrar por nome da empresa"
					control={methods.control}
					name="Nome"
					value={nomeEmpresa}
					onChange={(e) => setNomeEmpresa(e.target.value)}
				/>

				<div className="sliders">
					{data.length ? (
						<>
							<Slider {...settings} ref={(slider) => setSliderRef(slider)}>
								{slides.map((pagina: any, index: any) => (
									<div key={index} className="slide-item">
										<div className="pagina-slider">
											{pagina.map((empresa: any, empresaIndex: any) => (
												<div key={empresaIndex} className="empresa" onClick={() => handleEmpresaClick(empresa)}>
													<img src={`https://dev.ibtec.org.br/dev/blog/${empresa.image}`} alt={empresa.fantasy_name} />
												</div>
											))}
										</div>
									</div>
								))}
							</Slider>
							<div className="slider-btns">
								<SliderPrevIcon role="button" onClick={goToPrevSlide} size={`2.5rem`} />
								<SliderNextIcon role="button" onClick={goToNextSlide} size={`2.5rem`} />
							</div>
						</>
					) : (
						<div className="d-flex justify-content-center align-items-center pt-5">
							<Spinner animation="border" role="status" variant="light">
								<span className="visually-hidden">Loading...</span>
							</Spinner>
						</div>
					)}
				</div>
			</GridContainer>
		</div>
	);
};

export default Associados;
