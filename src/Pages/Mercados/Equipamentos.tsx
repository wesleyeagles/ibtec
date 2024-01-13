import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Styles/Pages.Equipamentos.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRightIcon, SliderNextIcon, SliderPrevIcon } from "../../assets/Icones";
import VideoModal from "../Home/Components/VideoModal";

const Equipamentos = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};

	const [sliderRef, setSliderRef] = useState<Slider | null>(null);

	const settings = {
		slidesToShow: isMedia600px ? 1 : isMedia1024px ? 2 : 3,
		slidesToScroll: 1,
		arrows: false, // Desativa as flechas padrão
		infinite: false,
		center: false,
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
		<div className="mercados-equipamentos">
			<BannerContainer bgImage="/banner-mercados-equipamentos.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Equipamentos de proteção individual</h1>
						<p>Serviços para Obtenção e Renovação de CA e Desenvolvimento de Produto</p>
						<div className="btns">
							<Link to="/contato">
								<button>QUERO SABER MAIS</button>
							</Link>
							<button onClick={handleShow}>ASSISTIR VíDEO</button>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="imagem">
					<img src="/mercados-equipamentos-imagem.webp" />
				</div>

				<div className="text">
					<p>
						Disponibilizamos serviços laboratoriais com agilidade, qualidade e precisão, para renovação e obtenção de CAs - Certificado de Aprovação do Ministério do Trabalho. Atuamos com
						uma equipe técnica especializada, atendendo uma ampla gama de serviços acreditados e reconhecidos por órgãos nacionais e internacionais.
					</p>
					<p>Ensaios de EPIs - Equipamentos de Proteção Individual - luvas para proteção contra riscos químicos (EN 374), térmicos (EN 407/EN 12477) e mecânicos (EN 388).</p>
					<p>Ensaios para Luvas cirúrgicas (ISO 10282), luvas não cirúrgicas (ISO 11193).</p>
					<p>Ensaios em calçados de uso profissional - segurança (ISO 20345), proteção (ISO 20346), ocupacional (ISO 20347) e para bombeiros (EN 15090).</p>
					<p>Ensaios em vestimentas para proteção contra riscos mecânicos e riscos de soldagem (ISO 11611) e calor e chamas (ISO 11612).</p>
				</div>

				<div className="list">
					<h3>Além destes, ainda realizamos ensaios utilizando as seguintes normas:</h3>

					<ul>
						<li>
							<strong>EN 659 </strong>
							<span>– Luva de bombeiro;</span>
						</li>
						<li>
							<strong>BS EN 3546 </strong>
							<span>– Vestimenta umidade;</span>
						</li>
						<li>
							<strong>EN 343 </strong>
							<span>– Vestimenta para intempéries;</span>
						</li>
						<li>
							<strong>ISO 16602 </strong>
							<span>– Vestimenta química – tipos 4 e 6.</span>
						</li>
					</ul>
				</div>

				<div className="table">
					<table>
						<tr>
							<th>VESTIMENTAS</th>
							<th>LUVAS</th>
							<th>CALÇADOS</th>
						</tr>

						<tr>
							<td>CAs Vestimentas</td>
							<td>CAs Luvas</td>
							<td>CAs Calçados</td>
						</tr>

						<tr>
							<td>Riscos Mecânicos (ISO 11611)</td>
							<td>Riscos Mecânicos (EN 388)</td>
							<td>Segurança (NBR ISO 20345)</td>
						</tr>

						<tr>
							<td>Riscos Térmicos Calor e Chamas (ISO 11612)</td>
							<td>Riscos Químicos (EN 374)</td>
							<td>Proteção (NBR ISO 20346)</td>
						</tr>

						<tr>
							<td>Riscos Térmicos Soldagem {""}(ISO 11611)</td>
							<td>Riscos Térmicos Calor e Chamas (EN 407)</td>
							<td>Ocupacional (NBR ISO 20347)</td>
						</tr>

						<tr>
							<td>Riscos Umidade (BS 3546)</td>
							<td>Riscos Térmicos Soldagem (EN 12477)</td>
							<td>Riscos Térmicos Soldagem (ISO 20349)</td>
						</tr>

						<tr>
							<td>Riscos Químicos (ISO 16602)</td>
							<td>Riscos Térmicos Bombeiros (EN 659)</td>
							<td>Riscos Térmicos Bombeiros (EN 15090)</td>
						</tr>

						<tr>
							<td>Proteção contra Chuva (BS EN 343)</td>
							<td>Luvas Cirúrgicas (ISO 10282)</td>
							<td>Riscos Químicos (BS EN 13832-2)</td>
						</tr>

						<tr>
							<td></td>
							<td>Luvas Não Cirúrgicas (ISO 11193)</td>
							<td></td>
						</tr>
					</table>
				</div>

				<div className="pre-slider">
					<div className="wrapper">
						<div className="image">
							<img src="/mercados-equipamentos-imagem-2.webp" />
						</div>

						<div className="text">
							<div className="strong-text">
								<strong>• Pesquisa para Desenvolvimento de Atributos de Performance e Conforto.</strong>
								<strong>• Validação de Atributos e Testes Funcionais.</strong>
								<strong>• Certificação da Tecnologia do Conforto em Calçado de Segurança e Ocupacional.</strong>
							</div>

							<p
								style={{
									marginBottom: "1rem",
								}}
							>
								OS PRAZOS DE ENTREGA MAIS RÁPIDOS DO MERCADO.
							</p>
							<p
								style={{
									marginBottom: "1rem",
								}}
							>
								ATENDIMENTO PERSONALIZADO.
							</p>
							<p
								style={{
									marginBottom: "1rem",
								}}
							>
								CONDIÇÕES ESPECIAIS DE PAGAMENTO.
							</p>

							<Link onClick={scrollToTop} to="/contato">
								<button
									style={{
										marginTop: "5rem",
									}}
								>
									ENTRE EM CONTATO
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="slider">
					<div className="wrapper">
						<div className="label">
							<h2>Laboratórios que atendem o setor</h2>
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
								<div className="slide laboratorio-de-substancias-restritas">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO DE SUBSTÂNCIAS RESTRITAS</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide laboratorio-fisico-mecanico">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO FÍSICO-MECÂNICO</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
								<div className="slide laboratorio-de-biomecanica">
									<Link to="">
										<div className="label-container">
											<div className="label">LABORATÓRIO DE BIOMECÂNICA</div>
											<div className="icon">
												<ArrowRightIcon />
											</div>
										</div>
									</Link>
								</div>
							</Slider>
						</div>
					</div>
				</div>

				<div className="footer-image">
					<img src="/mercados-equipamentos-imagem-3.png" />
				</div>
			</GridContainer>
			<VideoModal videoSrc="../fimec.mp4" show={show} setShow={setShow} handleShow={handleShow} />
		</div>
	);
};

export default Equipamentos;
