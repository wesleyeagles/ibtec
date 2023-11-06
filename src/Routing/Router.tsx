import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main.";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Conselho from "../Pages/Conselho/Conselho";
import Blog from "../Pages/Blog/Blog";
import Noticias from "../Pages/Noticias/Noticias";
import ResponsabilidadeSocial from "../Pages/ResponsabilidadeSocial/Responsabilidade.Social";
import Abnt from "../Pages/Abnt/Abnt";
import Contato from "../Pages/Contato/Contato";
import Associados from "../Pages/Associados/Associados";
import LaboratorioBiomecanica from "../Pages/LaboratorioBiomecanica/LaboratorioBiomecanica";
import SolucoesMicrobiologicas from "../Pages/SolucoesMicrobiologicas/SolucoesMicrobiologicas";
import SubstanciasRestritas from "../Pages/SubstanciasRestritas/SubstanciasRestritas";
import Layout from "../Pages/Painel/Layout";
import Dashboard from "../Pages/Painel/Pages/Dashboard";
import Login from "../Pages/Login/Login";
import CadastraNoticia from "../Pages/Painel/Pages/CadastraNoticia";
import ListaNoticia from "../Pages/Painel/Pages/ListaNoticia";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "inicio",
				element: <Home />,
			},

			{
				path: "sobre",
				element: <Sobre />,
			},

			{
				path: "conselho-de-administracao",
				element: <Conselho />,
			},

			{
				path: "responsabilidade-social",
				element: <ResponsabilidadeSocial />,
			},

			{
				path: "abnt-cb11",
				element: <Abnt />,
			},

			{
				path: "criar-post",
				element: <Blog />,
			},

			{
				path: "/associados",
				element: <Associados />,
			},

			{
				path: "/laboratorio-de-substancias-restritas",
				element: <SubstanciasRestritas />,
			},

			{
				path: "/laboratorio-de-biomecanica",
				element: <LaboratorioBiomecanica />,
			},

			{
				path: "/solucoes-microbiologicas",
				element: <SolucoesMicrobiologicas />,
			},

			{
				path: "/contato",
				element: <Contato />,
			},

			{
				path: "/blog",
				element: <Blog />,
			},

			{
				path: "/noticias",
				element: <Noticias />,
			},
		],
	},

	{
		path: "/painel-administrativo",
		element: <Layout />,
		children: [
			{
				path: "/painel-administrativo/dashboard",
				element: <Dashboard />,
			},

			{
				path: "/painel-administrativo/cadastrar-noticia",
				element: <CadastraNoticia />,
			},

			{
				path: "/painel-administrativo/lista-noticias",
				element: <ListaNoticia />,
			},
		],
	},

	{
		path: "/login",
		element: <Login />,
	},
]);
