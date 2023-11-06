import "react-quill/dist/quill.snow.css";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Noticias.Style.scss";
import { FiSearch } from "react-icons/fi";
import Noticia from "./Components/Noticias.Component.Noticia";
import Destaque from "./Components/Noticias.Component.Destaque";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
	titulo: string;
	conteudo: string;
	createdAt: string; // Ou o tipo de data apropriado
	imagem: string;
}

const Noticias = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://ibtec-backend.onrender.com/api/posts/ultimos-posts");

				setPosts(response.data);
				console.log(response.data);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="noticias">
			<GridContainer>
				<div className="wrapping d-flex justify-content-between align-items-center">
					<h2>Notícias</h2>
					<div className="search-container">
						<input type="text" className="search-input" placeholder="Faça sua busca" />
						<FiSearch color="white" className="search-icon" />
					</div>
				</div>
				<div className="mt-5">
					<div className="wrapper">
						<div className="noticia mb-2">
							<h3>ÚLTIMAS NOTÍCIAS</h3>
							<div className="d-flex flex-column gap-4">
								{posts.length > 0 ? posts.map((post, index) => <Noticia key={index} title={post.titulo} content={post.conteudo} date={post.createdAt} image={post.imagem} />) : null}
							</div>
						</div>
						<div className="destaques mb-2">
							<h3>DESTAQUES</h3>
							<div className="destaques-div">
								<Destaque />
								<Destaque />
							</div>
						</div>
					</div>
				</div>
				<div className="btn-carregar">
					<Button>Carregar Mais</Button>
				</div>
			</GridContainer>
		</div>
	);
};

export default Noticias;
