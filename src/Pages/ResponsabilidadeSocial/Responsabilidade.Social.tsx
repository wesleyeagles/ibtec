import { Link } from "react-router-dom";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";
import GridContainer from "../../Components/GridContainer/GridContainer";
import "./Pages.ResponsabilidadeSocial.Styles.scss";
import AccordionSingle from "./Components/AccordionSingle,";

const ResponsabilidadeSocial = () => {
	return (
		<div className="responsabilidade-social">
			<BannerContainer bgImage="/responsabilidade-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Transformando vidas juntos</h1>
						<p>Nosso compromisso com a responsabilidade social.</p>
					</div>
				</GridContainer>
			</BannerContainer>
			<div className="nossas-praticas">
				<GridContainer>
					<div className="wrapper">
						<div className="label">
							<h2>Nossas práticas</h2>
							<p>
								A conscientização dos colaboradores, assim como o envolvimento em questões socioambientais são práticas de rotinas do IBTeC, por meio da definição de ações que orientam
								e incentivam a melhoria da qualidade de vida na sociedade.
							</p>
							<p>Uma série de iniciativas são desenvolvidas pelo Instituto com o intuito de envolver todos os colaboradores e promover uma consciência coletiva.</p>
							<div className="btn">
								<Link to="">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
						</div>
						<div className="image">
							<img src="/tampinha.webp" />
						</div>
					</div>
				</GridContainer>
			</div>
			<div className="accordions">
				<GridContainer>
					<AccordionSingle
						title="Lar do menino"
						content={
							<div>
								<p>
									Em outubro de 2015, o IBTeC passou a ser padrinho da <strong>Casa Lar do Menino</strong>, lançando Programa <strong>Fazer o Bem Faz Bem</strong>. Com o
									apadrinhamento social da entidade, o Instituto se compromete a buscar e canalizar recursos, doações e contribuições.
								</p>
								<p>
									Comandado pelo gestor da Casa, Otávio da Silva Alves, atualmente o Lar do Menino acolhe cerca de 20 adolescentes, de 12 a 18 anos, em situação de vulnerabilidade
									social - todos sob medida protetiva. Portanto chegam à casa através do Juizado da Infância e Juventude, sendo que alguns cuidados devem ser preservados,
									principalmente ao que se refere a imagem, nome completo e fotos, que devem permanecer em sigilo.
								</p>
								<p>
									Pensando em levar um pouco de alegria, carinho e afeto a estes adolescentes, é fundamental termos parceiros e colaboradores, para as mais diversas ações. Este é um
									convite a você e sua empresa para engajar-se nesta proposta de levar esperança, alento e alegria para a vida destes meninos.
								</p>
								<p>
									em Temos a certeza de que juntos podemos fazer a diferença. <br /> <em> &quot;Há sempre um pouco para doar, algo para semear e uma causa para abraçar&quot;.</em>
								</p>

								<h5>NOSSOS PARCEIROS DO BEM</h5>
								<ul>
									<li>
										<strong>Sugar Shoes, NKS</strong> - com calçados para os meninos
									</li>
									<li>
										<strong>Mais Você Salão de Beleza</strong> - com corte de cabelos, itens de higiene e cuidado pessoal, e participação em todas as campanhas. Agora no Natal
										teremos as cartinhas para o Papai Noel.
									</li>
									<li>
										<strong>Padaria Baum</strong> - com tortas maravilhosas para comemorarmos mensalmente os aniversários dos meninos.
									</li>
									<li>
										<strong>IBTeC</strong> - em todas as campanhas e na coordenação geral do trabalho.
									</li>
									<li>
										<strong>Revista Tecnicouro</strong> - em todas as campanhas e na coordenação geral do trabalho.
									</li>
								</ul>
								<h5>CONTATO:</h5>
								<p>Simoni Jaroszeski (simoni@ibtec.org.br) ou Karin Becker (karin@ibtec.org.br).</p>
							</div>
						}
					/>
					<AccordionSingle
						title="Campanha eu amo tampinhas"
						content={
							<div>
								<p>
									Em parceria com a AMO - Associação de Assistência em Oncopediatria o IBTeC, desde junho de 2016 passou a se engajar na campanha de arrecadação de tampinhas
									plásticas. O valor coletado com a venda das tampinhas é 100% destinado a essa entidade que presta assistência a crianças e adolescentes com câncer.
								</p>
								<p>
									O ponto de coleta ficou de fácil acesso – localizado na recepção principal do Instituto – o que permite todos os públicos frequentadores a participarem, sem período
									para término. A arrecadação é válida para qualquer tampa de material plástico – de garrafa pet, produtos de limpeza, de sucos, de caixinhas de leite, dentre outros.
								</p>
								<p>
									No dia 15 de dezembro, foi realizada a entrega oficial das tampinhas arrecadadas no primeiro semestre, na qual a diretoria da AMO esteve presente a mobilizou a
									equipe de colaboradores do IBTeC a permanecer com a campanha em 2017.
								</p>
							</div>
						}
					/>
					<AccordionSingle
						title="Responsabilidade socioambiental nos projetos de feira"
						content={
							<div>
								<p>
									Confirmando o foco socioambiental e de inovação tecnológica, o IBTeC dá prioridade a fornecedores cujos produtos e serviços tenham diferenciais ecologicamente
									corretos. Além da preocupação em apresentar soluções voltadas à preservação do meio ambiente, os projetos enfatizam o compromisso social do instituto, através da
									seleção de trabalhadores que se encontram fora do mercado de trabalho, para que eles tenham a oportunidade de demonstrar aos empresários visitantes a sua
									qualificação, aumentando assim as chances de recolocação profissional.
								</p>
								<p>
									Os projetos são tradicionalmente um dos principais focos de visitação dos eventos setoriais, atraindo a atenção de profissionais, pesquisadores e formadores de
									opinião, que têm a vantagem de poder visualizar no local o resultado final de todo esse complexo sistema, que envolve desde fornecedores de insumos, passando pelas
									indústrias de transformação e canais de distribuição ao consumidor. Sem esquecer os centros de pesquisa e desenvolvimento e as entidades setoriais, que garantem a
									integração do setor, nesta missão de transformar ideias em produtos que movimentam a economia do país e geram emprego e renda para a população.
								</p>
							</div>
						}
					/>
					<AccordionSingle
						title="Doação de calçados - Fábrica conceito"
						content={
							<div>
								<p>
									O projeto ocorre dentro da feira Fimec, nos pavilhões da Fenac, desde 2010, através de uma parceria entre o IBTeC com outras empresas. Os visitantes acompanham a
									produção de calçados com produtos da própria feira, assim como, conhecem o funcionamento de modernas máquinas e equipamentos deste segmento calçadista. No espaço
									são produzidos diferentes modelos de calçados masculinos e femininos, e os pares são doados e convertidos em recursos para projetos sociais.
								</p>
								<p>
									<strong>2017:</strong> As doações dos calçados produzidos nessa edição de 2017 aconteceu no dia 19 de abril, com o repasse de aproximadamente 1.500 pares à
									Secretaria de Desenvolvimento Social de Novo Hamburgo, o Lar da Menina, o Lar do Menino, a Horta Comunitária Joanna de Ângelis e a Associação Beneficente Evangélica
									Floresta Imperial - ambas do município - e a Liga de Combate ao Câncer de Ivoti, para beneficiar pessoas em atendimento nestas instituições.
								</p>
								<p>
									O diretor-presidente da Fenac, Márcio Jung, destacou que a etapa finaliza um processo iniciado na feira. &quot;É um projeto único no mundo, que além de apresentar a
									produção de calçados em tempo real agrega o cunho social. Temos grande satisfação em fazer a entrega destes produtos, que foram elaborados com materiais e
									tecnologia de ponta e poderiam estar em qualquer vitrina&quot;, salientou.
								</p>
								<p>
									O presidente executivo do IBTeC, Paulo Griebeler, comentou que este foi o maior e mais desafiador projeto já realizado e este viés social é uma marca do
									empreendimento. &quot;O projeto também tem a preocupação de preencher parte dos postos de trabalho com profissionais em situação de desemprego, para que tenham a
									oportunidade de mostrar as suas habilidades a empresários que visitam o espaço, aumentando as chances de recolocação no mercado de trabalho. Neste ano tivemos ainda
									a presença de alunos do curso técnico de calçados do Senai, que viveram uma experiência única durante os três dias da feira, o que contribuiu para a sua
									formação&quot;, considerou.
								</p>
								<p>
									A prefeita de Novo Hamburgo, Fátima Daudt, e a secretária de Desenvolvimento Social, Flávia Petry, ressaltaram a importância das doações. De acordo com elas, a
									Secretaria de Desenvolvimento Social trabalha junto às pessoas que buscam atendimento no sentido de ensiná-las a pescar e não dar o peixe, incentivando-as a
									transformar suas vidas para melhor. Elogiaram as instituições e empresas envolvidas, cujas iniciativas colaboram com este processo. &quot;Só temos a agradecer aos
									responsáveis por este projeto. Com iniciativas como esta podemos ampliar a ajuda a quem precisa&quot;, falou a prefeita.
								</p>
							</div>
						}
					/>
					<AccordionSingle
						title="Horta comunitária"
						content={
							<div>
								<p>
									Em 2017, o IBTeC também se engajou nas ações sociais do Projeto <strong>Horta Comunitária Joana de Ângelis</strong> – situado em Novo Hamburgo/RS, que sempre teve
									como proposta auxiliar na solução de problemas da vida cotidiana, tanto na escola, na família e na inclusão social, bem como a preparação das pessoas da comunidade
									no ingresso para a Universidade e o mundo do trabalho.
								</p>
								<p>
									Os alimentos plantados no espaço são utilizados para a alimentação das crianças, adolescentes e jovens, pois os mesmos fazem três refeições no local, incluindo o
									almoço. Ainda, a Horta realiza campanha permanente denominada “Sou Amigo da Horta”, para receber doações de alimentos, roupas, móveis, materiais de construção,
									entre outras necessidades.
								</p>
								<p>
									Todas as ações contam com o apoio de uma rede de amigos e trabalho voluntário de pessoas da comunidade que colocam seu conhecimento e potencialidades a favor desta
									obra.
								</p>
								<p>
									<strong>Venda de pão caseiro:</strong> Numa das inúmeras ações voltadas a angariar verba para o projeto, a equipe voluntária começou a comercialização de pães
									caseiros – com ingredientes integrais e de alto valor nutricional, em todas as sextas-feiras, com preço de R$ 5,00. As encomendas podem ser feitas via WhatsApp ou
									Facebook (www.facebook.com/hortajoanna).
								</p>
							</div>
						}
					/>
				</GridContainer>
			</div>
		</div>
	);
};

export default ResponsabilidadeSocial;
