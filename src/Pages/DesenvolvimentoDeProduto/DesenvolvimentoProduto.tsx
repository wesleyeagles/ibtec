import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.DesenvolvimentoProduto.Styles.scss";
import { BannerArrow, CheckIcon, DesenvolvimentoProdutoIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { servicos1, servicos2 } from "../../Global/Constants/DesenvolvimentoProduto";

const DesenvolvimentoProduto = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	return (
		<div className="desenvolvimento-produto">
			<BannerContainer bgImage="/banner-desenvolvimento-produto.webp">
				<GridContainer>
					<div className="wrapper">
						<div className="banner-section">
							<h1>Desenvolvimento de produto</h1>
							<p>
								O IBTeC oferece projetos de desenvolvimento técnico de produtos voltados à cadeia coureira calçadista, buscando o lançamento no mercado nacional e internacional, com o
								uso dos laboratórios de biomecânica, Ensaios físicos, químicos, etc.
							</p>
							<div className="icon">
								<BannerArrow size={`${isMedia600px ? "0rem" : "4rem"}`} />
							</div>
						</div>

						<div className="box">
							<div className="icon">
								<DesenvolvimentoProdutoIcon />
							</div>
							<div className="text">
								<p>Buscamos avaliar o conforto e o desempenho de produtos lançados.</p>
							</div>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>

			<GridContainer>
				<div className="servicos">
					<div className="title">
						<h3>{servicos1.title}</h3>
						<p>{servicos1.subtitle}</p>
					</div>

					<div>
						{servicos1.servicos.map((service, i) => {
							return (
								<div className="services" key={i}>
									<div className="icon">
										<CheckIcon size={"1.2rem"} />
									</div>

									<div className="label">
										<p>{service}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="servicos">
					<div className="title">
						<h3>{servicos2.title}</h3>
						<p>{servicos2.subtitle}</p>
					</div>

					<div>
						{servicos2.servicos.map((service, i) => {
							return (
								<div className="services" key={i}>
									<div className="icon">
										<CheckIcon size={"1.2rem"} />
									</div>

									<div className="label">
										<p>{service}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default DesenvolvimentoProduto;
