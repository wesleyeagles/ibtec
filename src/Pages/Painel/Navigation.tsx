import { useUserContext } from "../../Global/Contexts/UserContext";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { ExpansibleIcon, UserIcon } from "../../assets/Icones";
import { Link, useNavigate } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { FaRegNewspaper, FaUsersCog } from "react-icons/fa";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);
	const navigate = useNavigate();
	const { setUser, user } = useUserContext();

	const logout = () => {
		Cookies.remove("token");
		Cookies.remove("id");

		toast("Logout efetuado com sucesso", {
			theme: "colored",
			type: "success",
			autoClose: 3000,
		});

		setUser(null);

		navigate("/login");
	};

	return (
		<div className="navigation-painel">
			{user ? (
				<div className="user">
					<div className="foto">
						<img src="/poze.jpg" alt="foto" />
					</div>
					<div className="content">
						<h4>{user.name}</h4>
						<p>{user.email}</p>
					</div>
				</div>
			) : null}
			<div className="menu">
				<div className="links">
					<div className="expansible" role="button" aria-controls="collapse-text">
						<div className="d-flex align-items-center gap-3">
							<div className="icon">
								<RiDashboardFill color="#FFF" />
							</div>
							<span>Dashboard</span>
						</div>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen(!open)} aria-controls="collapse-text" aria-expanded={open}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<UserIcon color="#FFF" />
								</div>
								<span>Associados</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/sobre">- Cadastrar associado</Link>
									</span>
									<span className="link-expansible">
										<Link to="/sobre">- Lista de associados</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen2(!open2)} aria-controls="collapse-text" aria-expanded={open2}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<ImBlog color="#FFF" />
								</div>
								<span>Blog</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open2 ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open2}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/painel-administrativo/cadastrar-noticia">- Cadastrar notícia</Link>
									</span>
									<span className="link-expansible">
										<Link to="/painel-administrativo/lista-noticias">- Lista de notícias</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen3(!open3)} aria-controls="collapse-text" aria-expanded={open3}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<FaRegNewspaper color="#FFF" />
								</div>
								<span>Eventos</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open3 ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open3}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/sobre">- Cadastrar evento</Link>
									</span>
									<span className="link-expansible">
										<Link to="/sobre">- Lista de evento</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen4(!open4)} aria-controls="collapse-text" aria-expanded={open4}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<BsFillBarChartLineFill color="#FFF" />
								</div>
								<span>Trajetória</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open4 ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open4}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/sobre">- Cadastrar trajetória</Link>
									</span>
									<span className="link-expansible">
										<Link to="/sobre">- Lista de trajetórias</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen5(!open5)} aria-controls="collapse-text" aria-expanded={open5}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<MdContactMail color="#FFF" />
								</div>
								<span>Contato</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open5 ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open5}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/sobre">- Cadastrar contato</Link>
									</span>
									<span className="link-expansible">
										<Link to="/sobre">- Lista de contatos</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
					<div className="link">
						<div className="expansible" role="button" onClick={() => setOpen6(!open6)} aria-controls="collapse-text" aria-expanded={open6}>
							<div className="d-flex align-items-center gap-3">
								<div className="icon">
									<FaUsersCog color="#FFF" />
								</div>
								<span>Usuários</span>
							</div>

							<ExpansibleIcon
								style={{
									transform: open6 ? "rotate(0.5turn)" : "",
									transition: "0.4s",
								}}
								size="0.8rem"
							/>
						</div>
						<Collapse in={open6}>
							<div id="collapse-text-institucional">
								<div className="links-expansibles">
									<span className="link-expansible">
										<Link to="/sobre">- Cadastrar usuário</Link>
									</span>
									<span className="link-expansible">
										<Link to="/sobre">- Lista de usuários</Link>
									</span>
								</div>
							</div>
						</Collapse>
					</div>
				</div>
				<div>
					<div className="expansible" role="button" onClick={logout} aria-controls="collapse-text" aria-expanded={open}>
						<div className="d-flex align-items-center gap-3">
							<div className="icon">
								<BiLogOut color="#FFF" />
							</div>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
