import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Conselho from "../Pages/Conselho/Conselho";
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
import EditarNoticia from "../Pages/Painel/Pages/EditarNoticia";
import Eventos from "../Pages/Eventos/Eventos";
import Evento from "../Pages/Eventos/Evento";
import CadastraEvento from "../Pages/Painel/Pages/CadastraEvento";
import ListaEvento from "../Pages/Painel/Pages/ListaEventos";
import EditarEvento from "../Pages/Painel/Pages/EditarEvento";
import ListaContatos from "../Pages/Painel/Pages/ListaContatos";
import CadastraUsuario from "../Pages/Painel/Pages/CadastraUsuario";
import ListaUsuarios from "../Pages/Painel/Pages/ListaUsuarios";
import IndustriaTextil from "../Pages/Mercados/IndustriaTextil";
import CalcadosCouros from "../Pages/Mercados/CalcadosCouros";
import Equipamentos from "../Pages/Mercados/Equipamentos";
import ProdutividadeQualidade from "../Pages/ProdutividadeQualidade/ProdutividadeQualidade";
import ProjetosTecnicos from "../Pages/ProjetosTecnicos/ProjetosTecnicos";
import DesenvolvimentoProduto from "../Pages/DesenvolvimentoDeProduto/DesenvolvimentoProduto";
import FisicoMecanicas from "../Pages/FisicoMecanicas/FisicoMecanicas";
import NucleoInovacao from "../Pages/NucleoInovacao/NucleoInovacao";
import ListaAssociados from "../Pages/Painel/Pages/ListaAssociados";
import CadastraAssociado from "../Pages/Painel/Pages/CadastraAssociado";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/inicio" replace />,
	},
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
				path: "/associados",
				element: <Associados />,
			},

			{
				path: "/laboratorio-de-substancias-restritas",
				element: <SubstanciasRestritas />,
			},

			{
				path: "/laboratorio-fisico-mecanico",
				element: <FisicoMecanicas />,
			},

			{
				path: "/laboratorio-de-biomecanica",
				element: <LaboratorioBiomecanica />,
			},

			{
				path: "/nucleo-de-inovacao",
				element: <NucleoInovacao />,
			},

			{
				path: "/solucoes-microbiologicas",
				element: <SolucoesMicrobiologicas />,
			},

			{
				path: "/produtividade-e-qualidade",
				element: <ProdutividadeQualidade />,
			},

			{
				path: "/projetos-tecnicos",
				element: <ProjetosTecnicos />,
			},

			{
				path: "/desenvolvimento-de-produtos",
				element: <DesenvolvimentoProduto />,
			},

			{
				path: "/contato",
				element: <Contato />,
			},

			{
				path: "/noticias",
				element: <Noticias />,
			},
			{
				path: "/eventos",
				element: <Eventos />,
			},

			{
				path: "/evento/:slug",
				element: <Evento />,
			},

			{
				path: "/mercados/industria-textil",
				element: <IndustriaTextil />,
			},

			{
				path: "/mercados/calcados-couros-componentes",
				element: <CalcadosCouros />,
			},

			{
				path: "/mercados/equipamentos-de-protecao-individual",
				element: <Equipamentos />,
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
				path: "/painel-administrativo/cadastrar-evento",
				element: <CadastraEvento />,
			},

			{
				path: "/painel-administrativo/cadastrar-usuario",
				element: <CadastraUsuario />,
			},

			{
				path: "/painel-administrativo/editar-noticia/:id",
				element: <EditarNoticia />,
			},

			{
				path: "/painel-administrativo/editar-evento/:slug",
				element: <EditarEvento />,
			},

			{
				path: "/painel-administrativo/lista-noticias",
				element: <ListaNoticia />,
			},

			{
				path: "/painel-administrativo/lista-eventos",
				element: <ListaEvento />,
			},

			{
				path: "/painel-administrativo/lista-contatos",
				element: <ListaContatos />,
			},

			{
				path: "/painel-administrativo/lista-usuarios",
				element: <ListaUsuarios />,
			},
			{
				path: "/painel-administrativo/lista-associados",
				element: <ListaAssociados />,
			},

			{
				path: "/painel-administrativo/cadastrar-associado",
				element: <CadastraAssociado />,
			},
		],
	},

	{
		path: "/login",
		element: <Login />,
	},
]);
