import React, { ReactNode } from "react";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";
import Slider from "react-slick";

interface ISlide {
	imagemSrc: string;
	nome: string;
	cargo: string;
	isSuplente?: boolean;
}

interface IConselhoSlider {
	titulo: string;
	icone: ReactNode;
	slides: ISlide[];
}

const ConselhoSlider: React.FC<IConselhoSlider> = ({ titulo, icone, slides }) => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");
	const isMedia420px = useMediaQuery("(max-width: 420px)");
	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: isMedia420px ? 1 : isMedia600px ? 2 : 3,
		slidesToScroll: 1,
		arrows: true,
	};

	return (
		<>
			<div className="wrapper">
				<h2>{titulo}</h2>
				{icone}
			</div>
			<div className="mt-5">
				{isMedia1024px ? (
					<div className="slide-wrapper">
						<Slider {...settings}>
							{slides?.map((slide, index) => {
								return (
									<div key={`${slide.nome} - ${index}`} className="no-slide">
										{slide.isSuplente && (
											<div className="suplente">
												<span>SUPLENTE</span>
											</div>
										)}

										<div className="name">
											<span>{slide.nome}</span>
										</div>
										<div className="class">
											<p>{slide.cargo}</p>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>
				) : (
					<div className="no-slide-wrapper">
						{slides?.map((slide, index) => {
							return (
								<div key={`${slide.nome} - ${index}`} className="no-slide">
									{slide.isSuplente && (
										<div className="suplente">
											<span>SUPLENTE</span>
										</div>
									)}
									<div className="name">
										<span>{slide.nome}</span>
									</div>
									<div className="class">
										<p>{slide.cargo}</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</>
	);
};

export default ConselhoSlider;
