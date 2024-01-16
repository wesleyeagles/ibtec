import "react-quill/dist/quill.snow.css";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Noticias.Style.scss";
import { FiSearch } from "react-icons/fi";
import Noticia from "./Components/Noticias.Component.Noticia";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
	tipo: any;
	title: string;
	content: string;
	created_at: string; // Ou o tipo de data apropriado
	image: string;
	destaque?: number;
}

const Noticias2023 = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [tituloFilter, setTituloFilter] = useState("");
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://backend-production-9a06.up.railway.app/api/posts/posts-2023");

				setPosts(response.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	const filterData = () => {
		let filteredData = posts;

		// Filtrar por título
		if (tituloFilter) {
			filteredData = filteredData.filter((post) => post.title.includes(tituloFilter));
		}

		return filteredData;
	};
	return (
		<div className="noticias">
			<GridContainer>
				<div className="wrapping d-flex justify-content-between align-items-center gap-5">
					<div className="d-flex align-items-center justify-content-between w-100">
						<h2>Notícias de 2023</h2>
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
									filterData().map((post, index) => <Noticia key={index} title={post.title} content={post.content} date={post.created_at} image={post.image} />)
								) : (
									<div>
										<h3 className="text-white">Nenhuma noticia encontrada</h3>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="btn-carregar"></div>
			</GridContainer>
		</div>
	);
};

export default Noticias2023;
