import "react-quill/dist/quill.snow.css";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Noticias.Style.scss";
import { FiSearch } from "react-icons/fi";
import Noticia from "./Components/Noticias.Component.Noticia";
import Destaque from "./Components/Noticias.Component.Destaque";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
	tipo: any;
	titulo: string;
	conteudo: string;
	createdAt: string; // Ou o tipo de data apropriado
	imagem: string;
	destaque?: number;
}

const Noticias = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [Destaques, setDestaques] = useState<Post[]>([]);
	const [tipoFilter, setTipoFilter] = useState("");
	const [tituloFilter, setTituloFilter] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/posts/ultimos-posts");

				const response2 = await axios.get("https://backend-production-9a06.up.railway.app/api/posts/ultimos-destaques");

				setPosts(response.data);

				setDestaques(response2.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const filterData = () => {
		let filteredData = posts;

		console.log(filteredData);

		// Filtrar por tipo
		if (tipoFilter) {
			filteredData = filteredData.filter((post) => post.tipo === tipoFilter);
		}

		// Filtrar por título
		if (tituloFilter) {
			filteredData = filteredData.filter((post) => post.titulo.includes(tituloFilter));
		}

		return filteredData;
	};

	const handleTipoFilterClick = (tipo: string) => {
		if (tipoFilter === tipo) {
			setTipoFilter("");
		} else {
			setTipoFilter(tipo);
		}
	};

	return (
		<div className="noticias">
			<GridContainer>
				<div className="wrapping d-flex justify-content-between align-items-center gap-5">
					<div className="d-flex align-items-center justify-content-between w-100">
						<h2>Notícias</h2>
						<div className="d-flex gap-3">
							<div onClick={() => handleTipoFilterClick("Mercado")} className={`filter-option ${tipoFilter === "Mercado" ? "filter-option-active" : "filter-option-deactive"}`}>
								<span>MERCADO</span>
							</div>
							<div onClick={() => handleTipoFilterClick("Negocios")} className={`filter-option ${tipoFilter === "Negocios" ? "filter-option-active" : "filter-option-deactive"}`}>
								<span>NOSSOS NEGÓCIOS</span>
							</div>
							<a
								style={{
									textDecoration: "none",
								}}
								onClick={() => setTipoFilter("")}
								href="https://www.tecnicouro.com.br/"
								target="_blank"
								rel="noreferrer"
							>
								<div className={`filter-option`}>
									<span>REVISTA TECNICOURO</span>
								</div>
							</a>
						</div>
					</div>
					<div className="search-container">
						<input value={tituloFilter} onChange={(e) => setTituloFilter(e.target.value)} type="text" className="search-input" placeholder="Faça sua busca" />
						<FiSearch color="white" className="search-icon" />
					</div>
				</div>
				<div className="mt-5">
					<div className="wrapper">
						<div className="noticia mb-2">
							<h3>ÚLTIMAS NOTÍCIAS</h3>
							<div className="d-flex flex-column gap-4">
								{filterData().length > 0 ? (
									filterData().map((post, index) => <Noticia key={index} title={post.titulo} content={post.conteudo} date={post.createdAt} image={post.imagem} />)
								) : (
									<div>
										<h3 className="text-white">Nenhuma noticia encontrada</h3>
									</div>
								)}
							</div>
						</div>
						<div className="destaques mb-2">
							<h3>DESTAQUES</h3>
							<div className="destaques-div">
								{Destaques.map((destaque, index) => {
									return <Destaque key={index} content={destaque.titulo} image={destaque.imagem} />;
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="btn-carregar"></div>
			</GridContainer>
		</div>
	);
};

export default Noticias;
