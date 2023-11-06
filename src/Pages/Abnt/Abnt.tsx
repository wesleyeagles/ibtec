import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { CheckIcon } from "../../assets/Icones";
import "./Pages.Abnt.Style.scss";

const Abnt = () => {
	return (
		<div className="abnt">
			<BannerContainer bgImage="/banner-abnt.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>ABNT / CB-11</h1>
						<p>Comitê Brasileiro de Couro, Calçados e Artefatos de Couro – CB-11.</p>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="image">
					<img src="/abnt-image.webp" />
				</div>
			</GridContainer>
			<div>
				<GridContainer>
					<h2>O que é?</h2>
					<p>
						É um órgão da estrutura da ABNT responsável pela coordenação e planejamento das atividades de normalização relacionadas ao couro, matéria-prima, peles cruas e conservadas,
						couros curtidos e acabados; calçados, calçados de couro, laminado sintético, material têxtil e materiais poliméricos diversos; artefatos de couro, terminologia, requisitos,
						métodos de ensaio e generalidades.
					</p>
					<h2>Quais as áreas de estudo?</h2>
					<p>
						Insumos, Ensaios Físicos e Químicos em Couro, Ensaios Biológicos em Couro, Resíduos Líquidos, Calçados, Limpeza e Conservação de Calçados e Artefatos, Conforto de Calçados,
						Artefatos, Substâncias Restritivas em Couro, Calçados, Artefatos e Componentes, Construção Superior do Calçado, Adesivos para Calçados e Correlatos, Construção Inferior do
						Calçado, Componentes Metálicos.
					</p>
					<h2>Qual o objetivo?</h2>
					<p>
						Facilitar e adequar as normas para a realidade das fábricas e atelieres; constituir uma linguagem única entre produtor e consumidor; melhorar a qualidade de produtos e
						serviços; orientar as concorrências públicas; aumentar a produtividade, com redução dos custos de produtos e serviços; contribuir para o aumento da economia do país e o
						desenvolvimento da tecnologia nacional.
					</p>
					<h2>Comissões vigentes</h2>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Insumos</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Ensaios Físicos e Químicos e Couro</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Ensaios Biológicos em Couro.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Resíduos Líquidos em couro.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo do Calçado.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Artefatos.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Conforto de Calçados.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo da Construção Superior do Calçado.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Adesivos para Calçados e Correlatos.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo da Construção Inferior do Calçado.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Componentes Metálicos.</span>
					</div>
					<div className="commision">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo de Subst. Restrit. em Couro, Calçados, Componentes e Artefatos.</span>
					</div>
					<div className="commision last-child">
						<div className="icon">
							<CheckIcon size="1.3rem" />
						</div>
						<span>Comissão de estudo especial de processos de Produção de Couros – Sustentabilidade.</span>
					</div>

					<div className="obs">
						<p>
							As reuniões ocorrem mensalmente, são gratuitas e abertas ao público em geral. Outras informações:{" "}
							<a href="mailto://cb11@ibtec.org.br" target="_blank" rel="noreferrer">
								cb11@ibtec.org.br
							</a>
							, com Amanda Varela.{" "}
							<a href="https://abntonline.com.br/consultanacional" target="_blank" rel="noreferrer">
								www.abntonline.com.br/consultanacional
							</a>
						</p>
					</div>
				</GridContainer>
			</div>
		</div>
	);
};

export default Abnt;
