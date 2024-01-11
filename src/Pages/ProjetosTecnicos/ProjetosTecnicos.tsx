import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.ProjetosTecnicos.Styles.scss";
import { BannerArrow, CheckIcon, ProjetosTecnicosIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import { servicos1, servicos2 } from "../../Global/Constants/ProjetosTecnicos";

const ProjetosTecnicos = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	return (
		<div className="projetos-tecnicos">
			<BannerContainer bgImage="/banner-projetos-tecnicos.webp">
				<GridContainer>
					<div className="wrapper">
						<div className="banner-section">
							<h1>Desenvolvimento de projetos técnicos</h1>
							<p>
								O IBTeC desenvolve projetos de capacitação de fornecedores de materiais para fábricas de calçados, acessórios e vestuários, avaliando e verificando a presença de
								substâncias químicas que possam causar danos à saúde humana e ao meio ambiente.
							</p>
							<div className="icon">
								<BannerArrow size={`${isMedia600px ? "0rem" : "4rem"}`} />
							</div>
						</div>

						<div className="box">
							<div className="icon">
								<ProjetosTecnicosIcon />
							</div>
							<div className="text">
								<p>Os manuais desenvolvidos no projeto são formados por tabelas com padrões baseados nas legislações internacionais europeias como o Reach e a americana AAFA.</p>
							</div>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>

			<GridContainer>
				<div className="servicos">
					<div className="title">
						<h3>{servicos1.title}</h3>
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

				<div className="middle-title">
					<h2>Adequação e certificação da ABVTEX</h2>
					<p>
						O IBTeC desenvolve projetos para adequar empresas do segmento coureiro calçadista e seus subcontratados para a obtenção e certificação do selo ABVTEX que atende os requisitos
						de responsabilidade social estabelecidos pelas principais redes de lojas do Brasil.
					</p>
				</div>

				<div className="servicos">
					<div className="title">
						<h3>{servicos2.title}</h3>
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

export default ProjetosTecnicos;
