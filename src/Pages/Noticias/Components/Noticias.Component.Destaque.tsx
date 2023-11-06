import "./Noticias.Components.Destaque.Style.scss";

const Destaque = () => {
	return (
		<div className="destaque-wrapper">
			<div className="image">
				<img src="/destaque-1.png" alt="" />
			</div>
			<div className="text">
				<p>Reportagem veiculada na revista tecnicouro vence a 23° edição do prêmio Primus Inter Pares Assintecal</p>
			</div>
		</div>
	);
};

export default Destaque;
