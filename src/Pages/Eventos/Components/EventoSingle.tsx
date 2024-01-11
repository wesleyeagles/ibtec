import { Link } from "react-router-dom";

interface IEventoSingle {
	title: string;
	content: string;
	slug: string;
	image: string;
}

const EventoSingle: React.FC<IEventoSingle> = ({ title, content, image, slug }) => {
	const scrollToTop = () => {
		const scrollToTopEasing = (t: number) => t * (2 - t);
		const startPosition = document.documentElement.scrollTop || document.body.scrollTop;
		const startTime = performance.now();

		const scrollToTopAnimation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = elapsedTime / 1500; // Animation duration (ms)
			const easingProgress = scrollToTopEasing(progress);

			if (progress < 1) {
				document.body.scrollTop = startPosition * (1 - easingProgress);
				document.documentElement.scrollTop = startPosition * (1 - easingProgress);
				requestAnimationFrame(scrollToTopAnimation);
			} else {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			}
		};

		requestAnimationFrame(scrollToTopAnimation);
	};

	return (
		<div className="evento-single">
			<div
				style={{
					maxWidth: "600px",
				}}
				className="content"
			>
				<div className="text">
					<span>{title}</span>
					<p>{content}</p>
				</div>

				<div className="btn-quero">
					<Link onClick={scrollToTop} to={`http://localhost:5173/evento/${slug}`}>
						<button>QUERO SABER MAIS</button>
					</Link>
				</div>
			</div>

			<div className="image">
				<img src={`https://dev.ibtec.org.br/dev/blog/${image}`} />
			</div>
		</div>
	);
};

export default EventoSingle;
