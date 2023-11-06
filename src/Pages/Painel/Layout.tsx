import "react-toastify/dist/ReactToastify.css";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/Layout.scss";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { User, useUserContext } from "../../Global/Contexts/UserContext";
// Mutations

const Layout = () => {
	const navigate = useNavigate();

	const { setUser } = useUserContext();

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
						const response = await axios.get<User | null>(`http://localhost:3000/api/user/usuario-por-id/${id}`);
						setUser(response.data);
					} catch (error) {
						console.error("Erro ao buscar informações do usuário:", error);
					}
				}
			}
		};

		fetchData();
	}, []);

	return (
		<div className="container-wrapper">
			<ToastContainer
				className={"react-toastify"}
				style={{
					top: "80px",
					right: "60px",
				}}
			/>
			<div className="layout">
				<div className="name">
					<h1>
						<strong>Admin</strong>IBTEC
					</h1>
				</div>
				<Navbar />
				<Navigation />
				<div className="outlet-painel">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Layout;
