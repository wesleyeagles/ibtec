import { useState } from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import "./Noticias.Components.Noticia.Style.scss";

interface INoticia {
	content: string;
	date: string;
	title: string;
	image: string;
}

const Noticia = ({ content, date, title, image }: INoticia) => {
	const [isReadingMore, setIsReadingMore] = useState(false);

	const readMore = () => {
		setIsReadingMore(!isReadingMore);
	};

	return (
		<div className="noticia-wrapper">
			<div className="image">
				<img src={`https://teste.ibtec.org.br/media/news/${image}`} />
				<div className="data">
					<span>{format(new Date(date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
				</div>
			</div>
			<div className="titulo">
				<h2>{title}</h2>
			</div>
			<div
				dangerouslySetInnerHTML={{
					__html: content,
				}}
				className={`text ${isReadingMore ? "ler-mais" : null}`}
			/>

			<div className="btn-lermais">
				<span onClick={readMore} role="button">
					{isReadingMore ? "LER MENOS" : "LER MAIS"}
				</span>
			</div>
		</div>
	);
};

export default Noticia;
