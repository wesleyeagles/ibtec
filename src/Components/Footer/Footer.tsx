import { Link } from "react-router-dom";
import { EaglesLogoIcon, FooterFacebookIcon, FooterInstagramIcon, FooterLinkedinIcon, FooterYoutubeIcon, LongDownArrowIcon, MailFooterIcon, PhoneFooterIcon, PinFooterIcon } from "../../assets/Icones";
import GridContainer from "../GridContainer/GridContainer";
import "./Footer.scss";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { moveTo } from "../../Utils/Utils";

const Footer = () => {
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
		<div className="footer">
			<GridContainer>
				<div className="footer-grid">
					<div className="logo">
						<img src="/footer-logo.png" />
						<strong className="d-block text-white">Siga nossas redes sociais</strong>
						<div className="d-flex align-items-end gap-3">
							<a href="https://www.facebook.com/ibtecbrasil/" rel="noreferrer" target="_blank">
								<FooterFacebookIcon size={"1.5rem"} />
							</a>
							<a href="https://www.instagram.com/ibtecbrasil/" rel="noreferrer" target="_blank">
								<FooterInstagramIcon size={"1.5rem"} />
							</a>
							<a href="https://www.linkedin.com/company/ibtecbrasil/" rel="noreferrer" target="_blank">
								<FooterLinkedinIcon size={"1.5rem"} />
							</a>
							<a href="https://www.youtube.com/user/ibtec1" rel="noreferrer" target="_blank">
								<FooterYoutubeIcon size={"1.5rem"} />
							</a>
						</div>
					</div>
					<div className="btn-scrolltotop">
						<div role="button" onClick={scrollToTop}>
							<LongDownArrowIcon />
						</div>
					</div>
					<div className="institucional">
						<h4>Institucional</h4>
						<nav>
							<Link onClick={() => scrollToTop()} to="/sobre">
								<li>Quem somos</li>
							</Link>
							<Link
								onClick={() => {
									moveTo("tragetoria");
								}}
								to="/sobre"
							>
								<li>Trajetória</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/conselho-de-administracao">
								<li>Conselho de administração</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/responsabilidade-social">
								<li>Responsabilidade Social</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/abnt-cb11">
								<li>ABNT/CB-11</li>
							</Link>
						</nav>
					</div>
					<div className="painel">
						<a href="http://dev.ibtec.org.br/areacliente/">
							<button>Painel do cliente</button>
						</a>
					</div>
					<div className="navegue">
						<h4>Navegue</h4>
						<nav>
							<Link
								onClick={() => {
									moveTo("setores");
								}}
								to="/inicio"
							>
								<li>Setores atendidos</li>
							</Link>
							<Link
								onClick={() => {
									moveTo("solucoes");
								}}
								to="/inicio"
							>
								<li>Soluções</li>
							</Link>
							<Link
								onClick={() => {
									moveTo("consultoria");
								}}
								to="/inicio"
							>
								<li>Consultoria</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/nucleo-de-inovacao">
								<li>Inovação</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/associados">
								<li>Associados</li>
							</Link>
						</nav>
					</div>
					<div className="conteudo">
						<h4>Conteúdo</h4>
						<nav>
							<Link onClick={() => scrollToTop()} to="/noticias">
								<li>Blog</li>
							</Link>
							<Link onClick={() => scrollToTop()} to="/eventos">
								<li>Eventos</li>
							</Link>
						</nav>
					</div>
					<div className="carreiras">
						<h4>Carreiras</h4>
						<nav>
							<Link onClick={() => scrollToTop()} to="/contato">
								<li>Trabalhe conosco</li>
							</Link>
						</nav>
					</div>
					<div className="fale-conosco">
						<h4>Fale conosco</h4>
						<nav>
							<li className="d-flex align-items-center gap-2">
								<div>
									<MailFooterIcon size={"1.2rem"} />
								</div>{" "}
								ibtec@ibtec.org.br
							</li>
							<li className="d-flex align-items-center gap-2">
								<div>
									<PhoneFooterIcon size={"1.2rem"} />
								</div>{" "}
								51 3553.1000
							</li>
							{isMedia600px ? (
								<li className="d-flex gap-2">
									<div>
										<PinFooterIcon size={"1.3rem"} />
									</div>
									Novo Hamburgo - RS Rua Araxá, <br />
									750. Ideal, CEP: 93334-000
								</li>
							) : (
								<li className="d-flex gap-2">
									<div>
										<PinFooterIcon size={"1.3rem"} />
									</div>
									Novo Hamburgo - <br /> RS Rua Araxá, <br />
									750. Ideal,
									<br /> CEP: 93334-000
								</li>
							)}
						</nav>
					</div>
				</div>
				<hr className="separator" />
				<div className="d-flex flex-column flex-sm-row align-items-center justify-content-between py-4">
					<small className="text-center text-sm-start">© 2023 IBTeC. Todos os direitos reservados.</small>
					<div className="mt-2 mt-sm-0">
						<small>Desenvolvido por: </small>
						<a href="https://www.eaglesx.com/" rel="noreferrer" target="_blank">
							<EaglesLogoIcon size={"1.5rem"} />
						</a>
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default Footer;
