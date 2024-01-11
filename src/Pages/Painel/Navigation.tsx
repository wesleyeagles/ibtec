import { useUserContext } from "../../Global/Contexts/UserContext";
import { Collapse } from "react-bootstrap";
import { useState } from "react";
import { ExpansibleIcon, UserIcon } from "../../assets/Icones";
import { Link, useNavigate } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { RiDashboardFill } from "react-icons/ri";
import { FaRegNewspaper, FaUsersCog } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const Navigation = () => {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
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
						<img src={`https://dev.ibtec.org.br/dev/blog/${user.user.image}`} alt="foto" />
					</div>
					<div className="content">
						<h4>{user.user.name}</h4>
						<p>{user.user.email}</p>
					</div>
				</div>
			) : null}
			<div className="menu">
				<div className="links">
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
										<Link to="/painel-administrativo/cadastrar-evento">- Cadastrar evento</Link>
									</span>
									<span className="link-expansible">
										<Link to="/painel-administrativo/lista-eventos">- Lista de evento</Link>
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
										<Link to="/painel-administrativo/lista-contatos">- Lista de contatos</Link>
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
										<Link to="/painel-administrativo/cadastrar-usuario">- Cadastrar usuário</Link>
									</span>
									<span className="link-expansible">
										<Link to="/painel-administrativo/lista-usuarios">- Lista de usuários</Link>
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
