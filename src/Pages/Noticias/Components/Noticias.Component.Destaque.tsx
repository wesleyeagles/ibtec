import { FC } from "react";
import "./Noticias.Components.Destaque.Style.scss";

interface IDestaque {
	image: string;
	content: string;
}

const Destaque: FC<IDestaque> = ({ ...props }) => {
	return (
		<div className="destaque-wrapper">
			<div className="image">
				<img src={`https://dev.ibtec.org.br/dev/blog/${props.image}`} alt="" />
			</div>
			<div className="text">
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default Destaque;
