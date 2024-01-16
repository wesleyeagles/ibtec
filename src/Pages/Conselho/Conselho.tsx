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
								nome: "Ricardo Wirth",
								cargo: "Indústria de Calçados Wirth Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Cláudio Chies",
								cargo: "Grendene S/A",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Ernani Reuter",
								cargo: "Representações e Participações Excelsior Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "João Altair dos Santos",
								cargo: "Conforto Artefatos de Couro",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Martinho Fleck",
								cargo: "Boxflex Componentes para Calçados Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "André da Rocha",
								cargo: "Master Equipamentos Industriais Ltda",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Carlos Alberto Mestriner",
								cargo: "Klin Produtos Infantis Ltda",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "João Fernando Hartz",
								cargo: "Arezzo Indústria e Comércio S/A",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "José Geraldo Brasil",
								cargo: "JGB Equipamentos de Segurança S/A",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Renato Raimundo",
								cargo: "Stick Fran Componentes para Calçados Ltda",
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
								nome: "Ademir Gomes Gonçalves",
								cargo: "Indústria de Calçados Gonçalves Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Jakson Fernando Wirth",
								cargo: "Calçados Ramarim Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Paulo Roberto dos Reis",
								cargo: "Crespi do Brasil Ltda",
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Jorge Ricardo Klein",
								cargo: "NKS Import. e Export. Ind. e Com. de Calçados Ltda ",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Marco Augusto Bombonatto",
								cargo: "Bompel Indústria de Calçados Ltda",
								isSuplente: true,
							},
							{
								imagemSrc: "/pessoa.webp",
								nome: "Milton José de Mello",
								cargo: "Formello Formas Ltda",
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
								cargo: "Presidente Executivo",
							},
						]}
					/>
				</GridContainer>
			</div>
		</div>
	);
};

export default Conselho;
