import { Link, useNavigate } from "react-router-dom";
import { CloseIcon, ExpansibleIcon, MenuIcon, NavigationLogo, UserIcon } from "../../assets/Icones";
import GridContainer from "../GridContainer/GridContainer";
import "./Navbar.scss";
import { useState } from "react";
import { Collapse, Offcanvas } from "react-bootstrap";
import { useMediaQuery } from "../../Hooks/useMediaQuery";

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);

	const matches600px = useMediaQuery("(max-width: 600px)");

	const navigate = useNavigate();

	const moveToTragetoria = () => {
		navigate("/sobre"); // Redireciona para a página2
		setTimeout(scrollToTragetoria, 100); // Espera um pouco antes de rolar
	};

	const scrollToTragetoria = () => {
		const sessaoEspecifica = document.getElementById("tragetoria");
		if (sessaoEspecifica) {
			sessaoEspecifica.scrollIntoView({ behavior: "smooth" }); // Rola para a sessão específica
		}
	};

	return (
		<>
			<GridContainer>
				<div className="navigation-container">
					<NavigationLogo size={`${matches600px ? "150px" : "204px"}`} height="96px" />
					<div className="btns-container">
						<Link to="/">
							<button className="btn-area">
								<UserIcon size={"1.2em"} />
								<span>Área do cliente</span>
							</button>
						</Link>
						<MenuIcon
							onClick={handleShow}
							style={{
								cursor: "pointer",
							}}
							size={`${matches600px ? "1.8rem" : "2.5rem"}`}
						/>
					</div>
				</div>
			</GridContainer>
			<Offcanvas placement="end" show={show} onHide={handleClose}>
				<Offcanvas.Body>
					<div className="menu-btn d-flex">
						<Link to="/">
							<button className="btn-area">
								<UserIcon size={"1.2em"} />
								<span>Área do cliente</span>
							</button>
						</Link>
						<CloseIcon
							style={{
								cursor: "pointer",
							}}
							size={"1.8rem"}
							onClick={handleClose}
						/>
					</div>
					<div className="offcanvas-navigation">
						<div className="link">
							<Link to="/inicio">Início</Link>
						</div>
						<div className="link">
							<div className="expansible" role="button" onClick={() => setOpen(!open)} aria-controls="collapse-text" aria-expanded={open}>
								<span>Institucional</span>
								<ExpansibleIcon
									style={{
										transform: open ? "rotate(0.5turn)" : "",
										transition: "0.4s",
									}}
									size="1.2rem"
								/>
							</div>
							<Collapse in={open}>
								<div id="collapse-text-institucional">
									<div className="links-expansibles">
										<span onClick={handleClose} className="link-expansible">
											<Link to="/sobre">Quem somos</Link>
										</span>
										<span
											onClick={() => {
												handleClose();
												moveToTragetoria();
											}}
											className="link-expansible"
										>
											<Link to="/sobre">Trajetória</Link>
										</span>
										<span onClick={handleClose} className="link-expansible">
											<Link to="/conselho-de-administracao">Conselho de administração</Link>
										</span>
										<span onClick={handleClose} className="link-expansible">
											<Link to="/responsabilidade-social">Responsabilidade social</Link>
										</span>
										<span onClick={handleClose} className="link-expansible">
											<Link to="/abnt-cb11">ABNT / CB-11</Link>
										</span>
									</div>
								</div>
							</Collapse>
						</div>
						<div className="link">
							<div className="expansible" role="button" onClick={() => setOpen2(!open2)} aria-controls="collapse-text" aria-expanded={open2}>
								<span>Navegue</span>
								<ExpansibleIcon
									style={{
										transform: open2 ? "rotate(0.5turn)" : "",
										transition: "0.4s",
									}}
									size="1.2rem"
								/>
							</div>
							<Collapse in={open2}>
								<div id="collapse-text-navegue">
									<div className="links-expansibles">
										<span className="link-expansible">
											<Link to="/quem-somos">Setores atendidos</Link>
										</span>
										<span className="link-expansible">
											<Link to="/trajetoria">Soluções</Link>
										</span>
										<span className="link-expansible">
											<Link to="/conselho-administracao">Consultoria</Link>
										</span>
										<span className="link-expansible">
											<Link to="/responsabilidade-social">Inovação</Link>
										</span>
										<span className="link-expansible">
											<Link to="/abnt">Associados</Link>
										</span>
									</div>
								</div>
							</Collapse>
						</div>
						<div className="link">
							<div className="expansible" role="button" onClick={() => setOpen3(!open3)} aria-controls="collapse-text" aria-expanded={open3}>
								<span>Conteúdo</span>
								<ExpansibleIcon
									style={{
										transform: open3 ? "rotate(0.5turn)" : "",
										transition: "0.4s",
									}}
									size="1.2rem"
								/>
							</div>
							<Collapse in={open3}>
								<div id="collapse-text-conteudo">
									<div className="links-expansibles">
										<span className="link-expansible">
											<Link to="/quem-somos">Blog</Link>
										</span>
										<span className="link-expansible">
											<Link to="/trajetoria">Eventos</Link>
										</span>
									</div>
								</div>
							</Collapse>
						</div>
						<div className="link no-border">
							<Link to="/contato">Contato</Link>
						</div>
					</div>
					<div className="offcanvas-footer">
						<span className="offcanvas-title">Endereço</span>
						<p className="offcanvas-text text-white">
							Novo Hamburgo - RS <br />
							Rua Araxá, 750B. Ideal, <br />
							CEP: 93334-000
						</p>
						<span className="offcanvas-title">E-mail</span>
						<p className="offcanvas-text text-white">ibtec@ibtec.org.br</p>
						<span className="offcanvas-title">Telefone</span>
						<p className="offcanvas-text text-white">51 3553.1000</p>
					</div>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
};

export default Navbar;
