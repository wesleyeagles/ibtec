import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.Conselho.Styles.scss";
import { BannerArrow, ConselhoDeliberativoIcon, ConselhoFiscalIcon, DiretoriaExecutivaIcon } from "../../assets/Icones";
import { useMediaQuery } from "../../Hooks/useMediaQuery";
import ConselhoSlider from "./Components/ConselhoSlider";

const Conselho = () => {
	const isMedia600px = useMediaQuery("(max-width: 600px)");

	// Usado no Slider apenas como nomenclatura, pois na responsividade tem momentos que virará um slider
	// Os atributos do componente são auto explicativos, facilitando para adicionar novos
	// isSuplente quando "true" renderiza a box que diz que a pessoa é suplente, se não for passado nada, ele entenderá como false

	return (
		<div className="conselho">
			<BannerContainer bgImage="/sobre-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Conselho de administração</h1>
						<p>Conheça nosso conselho de administração e saiba quem são os responsáveis pelas decisões estratégicas da nossa empresa.</p>
						<div className="icon">
							<BannerArrow size={`${isMedia600px ? "3rem" : "4rem"}`} />
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="slides">
				<GridContainer>
					<ConselhoSlider
						titulo="Conselho deliberativo"
						icone={<ConselhoDeliberativoIcon size={"2.5rem"} />}
						slides={[
							{
								imagemSrc: "/pessoa.webp",
								nome: "Cláudio Chies",
								cargo: "Grendene S/A (Presidente do Conselho)",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Ernani Reuter",
								cargo: "Representações e Participações Excelsior Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Jakson Fernando Wirth",
								cargo: "Calçados Ramarim Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Marcelo Fleck",
								cargo: "Plínio Fleck S/A Ind. e Comércio",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Rosnei Alfredo da Silva",
								cargo: "Calçados Bibi Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Carlos Alberto Mestriner",
								cargo: "Klin Produtos Infantis Ltda",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "João Altair dos Santos",
								cargo: "Conforto Artefatos de Couro",
								isSuplente: true,
							},
						]}
					/>
					<ConselhoSlider
						titulo="Conselho fiscal"
						icone={<ConselhoFiscalIcon size={"2.5rem"} />}
						slides={[
							{
								imagemSrc: "/pessoa.webp",
								nome: "João Paulo Mendel",
								cargo: "Calbrás Equipamentos de Proteção LTDA",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Cisso Klaus",
								cargo: "Arezzo Indústria e Comércio S/A",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Ricardo Wirth",
								cargo: "Indústria de Calçados Wirth",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "André da Rocha",
								cargo: "Master Equipamentos LTDA",
								isSuplente: true,
							},
						]}
					/>
					<ConselhoSlider
						titulo="Diretoria executiva"
						icone={<DiretoriaExecutivaIcon size={"2.5rem"} />}
						slides={[
							{
								imagemSrc: "/pessoa.webp",
								nome: "Valdir Soldi",
								cargo: "Vice-Presidente Executivo",
							},
						]}
					/>
				</GridContainer>
			</div>
		</div>
	);
};

export default Conselho;
