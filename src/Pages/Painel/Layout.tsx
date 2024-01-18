import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Layout.scss";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { User, useUserContext } from "../../Global/Contexts/UserContext";
import { Helmet } from "react-helmet";
// Mutations

const Layout = () => {
	const navigate = useNavigate();
	const { user, setUser } = useUserContext();
	const chatBot = document.querySelector("nld-chatbot");
	const [isMenuOpen, setIsMenuOpen] = useState(true);

	useEffect(() => {
		console.log("BOT:", chatBot);
	}, [chatBot]);

	useEffect(() => {
		const fetchData = async () => {
			const token = Cookies.get("token");
			const id = Cookies.get("userId");

			if (!token) {
				toast("Usuário não autenticado", {
					theme: "colored",
					type: "error",
					autoClose: 3000,
				});

				navigate("/login");
			} else {
				if (id) {
					try {
						const response = await axios.get<User | null>(`https://backend-production-9a06.up.railway.app/api/user/usuario-por-id/${id}`);
						setUser(response.data);
					} catch (error) {
						console.error("Erro ao buscar informações do usuário:", error);
						Cookies.remove("token");
						Cookies.remove("id");

						setTimeout(() => {
							window.location.reload();
						}, 500);
					}
				}
			}
		};

		fetchData();
	}, [setUser, navigate]);

	// Verifica se o usuário está definido antes de renderizar o conteúdo
	if (!user) {
		// Você pode optar por exibir uma mensagem de carregamento ou redirecionar para a página de login
		return (
			<div className="d-flex justify-content-center align-items-center">
				<Spinner animation="border" role="status" />
				Carregando...
			</div>
		);
	}

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Painel Administrativo || IBTeC</title>
				<meta name="robots" content="noindex" />
			</Helmet>
			<div className="container-wrapper">
				<ToastContainer
					className={"react-toastify"}
					style={{
						top: "80px",
						right: "60px",
					}}
				/>
				<div className={`layout ${isMenuOpen ? "layout-menu-open" : "layout-menu-close"}`}>
					<div className="name">
						<h1>
							<strong>Admin</strong>IBTEC
						</h1>
					</div>
					<Navbar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
					<Navigation setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
					<div className="outlet-painel">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
