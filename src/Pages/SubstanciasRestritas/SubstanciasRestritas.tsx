import Slider from "react-slick";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { ArrowRightIcon, PointIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import "./Pages.SubstanciasRestritas.Styles.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { substancias } from "./Variables/Pages.SubstanciasRestritas.Variables";

const SubstanciasRestritas = () => {
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
		<div className="substanciasrestritas">
			<BannerContainer bgImage="/banner-substanciasrestritas.webp">
				<GridContainer>
					<div className="banner-section">
						<div className="d-flex flex-column">
							<h1>Soluções de substâncias restritas</h1>
							<p>
								Oferecemos toda a infraestrutura para a realização de ensaios e apoio às empresas que buscam atender as exigências nacionais e internacionais com relação a presença de
								substâncias restritivas em seus produtos.
							</p>
						</div>
						<div>
							<img src="substancias-restritas.webp" alt="solucoes-microbiologicas" />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="ensaios">
				<GridContainer>
					<div className="wrapper">
						<div className="wrapping">
							<div>
								<img src="substancias-restritas-2.webp" alt="substancia-2" />
							</div>
							<div className="ensaios-wrapper">
								<h2>Principais produtos ensaiados</h2>
								{substancias.map((substancia, index) => (
									<div key={index}>
										<div className="icon">
											<PointIcon size={"1rem"} />
										</div>
										<span>{substancia + ";"}</span>
									</div>
								))}
							</div>
						</div>

						<div>
							<h3>Como ocorrem os ensaios?</h3>
							<p>
								Além disso, disponibiliza serviços laboratoriais de controle da qualidade para identificação de substâncias químicas em seus produtos em diversos segmentos como
								calçados, bolsas, couro, sintéticos, componentes e artefatos, têxteis, polímeros, joias, entre outros.
							</p>
							<p>
								Os ensaios têm como finalidade atender as necessidades de empresas que buscam desenvolver materiais e produtos, comprovando a qualidade e conformidade de acordo com as
								legislações nacionais e internacionais, para o atendimento das necessidades dos fornecedores, garantindo a segurança e a saúde dos consumidores.
							</p>
							<p>
								Podemos verificar características químicas e restritas tais como: cromo VI, metais pesados (Sb, As, Ba, Cd, Pb, Hg, Se, Cr, Ni), formaldeído, ftalatos, corantes azóicos
								(azocorantes), dimetilfumarato (DMFU), corantes dispersos, pentaclorofenol (PCP), triclorofenol (TCP), tetraclorofenol (TECP), organoestanho, identificação de ácido
								palmítico e esteárico, identificação qualitativa de materiais, entre outros.
							</p>
							<p>
								Em geral, os ensaios compreendem um período de aproximadamente 7 dias úteis e os relatórios técnicos são enviados aos clientes por meio digital de forma segura, que
								garante maior agilidade na entrega.
							</p>
							<p>
								Em constante atualização, o laboratório realiza seus ensaios utilizando normas técnicas normalizadas, nacionais e internacionais, com acreditação de organismos
								certificadores, que garantem a confiabilidade dos resultados.
							</p>
							<p>
								Seja qual for o seu ramo de atuação, para garantir a composição e manutenção de seus produtos, é necessário verificar a sua conformidade e para isso, o IBTeC possui um
								corpo técnico especializado para atendimento aos clientes, que prestam assistência técnica, auxiliam na interpretação de resultados dos ensaios, no desenvolvimento dos
								produtos e identificação de problemas.
							</p>
							<p>
								O laboratório possui certificações e acreditações de organismos nacionais e internacionais. Estas desempenham papel chave em nossa estratégia, para assegurar que os
								ensaios atinjam os níveis requeridos de qualidade.
							</p>

							<Link to="">
								<button>QUERO SABER MAIS</button>
							</Link>
						</div>
					</div>
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

export default SubstanciasRestritas;
