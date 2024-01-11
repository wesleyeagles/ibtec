import { Link } from "react-router-dom";
import GridContainer from "../../Components/GridContainer/GridContainer";
import AccordionSingle from "../ResponsabilidadeSocial/Components/AccordionSingle,";
import "./Page.NucleoInovacao.Styles.scss";
import BannerContainer from "../../Components/BannerContainer/BannerContainer";

const NucleoInovacao = () => {
	return (
		<div className="nucleo-inovacao">
			<BannerContainer bgImage="/nit-banner.webp">
				<GridContainer>
					<div className="banner-section">
						<h1>Núcleo de inovação tecnológica</h1>
						<p>Desde a sua criação em 1972, o IBTeC procura contribuir com o desenvolvimento do setor coureiro-calçadista por meio de pesquisas.</p>
						<div className="btn-quero">
							<Link to="/contato">
								<button>QUERO SABER MAIS</button>
							</Link>
						</div>
					</div>
				</GridContainer>
			</BannerContainer>
			<GridContainer>
				<div className="wrapper">
					<div className="image">
						<img src="/biomecanica.webp" />
					</div>

					<div className="label">
						<h2>Inovação</h2>
						<p>No cenário atual do mercado mundial, inovar virou sinônimo de sobrevivência para as empresas. </p>
						<p>
							Uma empresa inovadora tem menor chance de não ser impactada por uma eventual crise, uma vez que se diferencia no mercado dos demais concorrentes por possuírem propostas de
							agregação de valor aos seus produtos e equipes acostumadas e preparadas a gerar soluções novas para possíveis dificuldades.
						</p>
					</div>
				</div>

				<div className="wrapper">
					<div className="label">
						<h2>O desenvolvimento do projeto NIT</h2>
						<p>
							Alinhado a sua missão, o IBTeC durante o ano de 2012, desenvolveu o projeto NIT – contando com o apoio do CNPq e iniciando suas operações em abril de 2015. Em seu primeiro
							ano teve o foco voltado para a profissionalização da gestão da inovação, implantando ferramentas e modernas práticas de gestão, consolidando sua política de propriedade
							intelectual.
						</p>
						<p>
							Em março de 2016, implantou seu Comitê de Inovação, que passou a integrar todas as áreas de conhecimento do Instituto, promovendo o desenvolvimento de produtos de maior
							valor agregado, funcionais e inovadores.
						</p>
					</div>

					<div className="image">
						<img src="/nit.webp" />
					</div>
				</div>

				<div className="wrapper">
					<div className="label">
						<h2>Por que ele existe?</h2>
						<p>
							O NIT tem como principal função a promoção da inovação e o desenvolvimento tecnológico das empresas através da articulação entre os setores público, privado e centros de
							ensino e pesquisa, por meio de um ambiente adequado à colaboração, pesquisa e o desenvolvimento de produtos, processos e serviços inovadores, bem como, a transferência
							tecnológica.
						</p>
					</div>

					<div className="accordions">
						<AccordionSingle
							title="Desenvolvimento de produtos inovadores"
							content={
								<div>
									<p>
										Soluções inovadoras que satisfaçam as reais necessidades do consumidor, podem representar um salto qualitativo e quantitativo importante para o portfólio de
										produtos e a saúde financeira de uma empresa. E, para isto, o melhor caminho a trilhar é buscando ações em conjunto, firmando parcerias com foco em inovação.
									</p>
									<p>
										Com uma equipe técnica, onde 65% são formados por doutores, mestres, graduados e pós-graduados, o IBTeC possui especialistas em gestão da inovação, estratégia,
										gestão de projetos, criação e design, utilizando metodologia de inovação orientada à identificação de oportunidades com base nas necessidades do consumidor -
										realizando projetos junto às empresas, integrando profissionais e conhecimento gerado ao desenvolvimento de novas tecnologias aplicadas ao produto.
									</p>
									<p>
										Os projetos, são elaborados com tempo e atividades determinadas, utilizando metodologia, ferramentas de apoio integradas, casos experimentados e capacidade para
										apoiar a geração de resultados por meio da inovação - acompanhando o projeto da pesquisa à aplicação ao mercado.
									</p>
								</div>
							}
						/>
						<AccordionSingle
							title="Escritório de projetos"
							content={
								<div>
									<p>
										Disponibiliza às empresas do setor toda a sua expertise no desenvolvimento de projetos para a captação de recursos, com o foco em viabilização financeira e
										sustentável, através da participação em editais com recursos não reembolsáveis, reembolsáveis, ou até mesmo para a estruturação de parcerias estratégicas para o
										desenvolvimento de processos, produtos e serviços inovadores.
									</p>
									<p>
										Como forma de viabilizar projetos, esta Unidade do IBTeC possui um sistema de monitoramento de todos os editais nacionais disponíveis, apto à enquadrar cada
										demanda em sua melhor oportunidade.
									</p>
									<p>
										A proximidade com os pesquisadores dos laboratórios do IBTeC é outro diferencial da área, os quais permeiam no estado da arte das tecnologias e colaboram
										significativamente em seu desenvolvimento, resultando em um maior percentual de sucesso de aprovação dos projetos.
									</p>

									<p>
										Em 2015, o Instituto estruturou uma parceria com o BADESUL - agência de fomento vinculada à Secretaria de Desenvolvimento Econômico, Ciência e Tecnologia do RS
										- proporcionando mais um benefício ao setor, o qual isenta 50% dos custos de abertura de crédito juntamente ao banco de fomento.
									</p>
								</div>
							}
						/>

						<AccordionSingle
							title="Programa conectando tecnologias"
							content={
								<div>
									<p>
										A proposta é levar os técnicos e pesquisadores do Instituto à sede de clientes, associados e empresas que desenvolvem tecnologias e soluções inovadoras para o
										setor calçadista, com o objetivo de promover o compartilhamento de informações entre a instituição e as empresas, além de conectar soluções desenvolvidas às
										necessidades da indústria e também apoiar a inovação do setor. O resultado desse ecossistema é um crescimento mútuo entre as empresas, através de inovações
										tecnológicas, e soluções de valor agregado ao produto final.
									</p>
								</div>
							}
						/>

						<AccordionSingle
							title="Programa IBTeC+"
							content={
								<div>
									<p>
										Visa oportunizar estudantes e pesquisadores a contribuírem com a cadeia do setor de calçados, sugerindo ideias e oferecendo soluções em melhorias incrementais e
										radicais aos calçados e processos das indústrias. O público alvo édestinado a profissionais autônomos, estudantes de escolas técnicas e universitários, que
										possuam alguma solução voltada à indústria calçadista, que buscam oportunidade em desenvolvê-la e apresentá-la ao mercado.
									</p>
									<p>As ideias são alinhadas com alguns dos temas referenciados abaixo aplicável à indústria calçadista:</p>

									<ul>
										<li>
											<strong>Sustentabilidade ambiental: </strong>
											<span>Produto com matéria-prima de fonte renovável, reciclagem, logística reversa, reutilização de resíduos em materiais, etc.;</span>
										</li>

										<li>
											<strong>Inovação de produto: </strong>
											<span>Design, funcionalidade, saúde, eletrônica aplicada, materiais inovadores, uso, armazenagem, durabilidade, rastreabilidade, etc.;</span>
										</li>

										<li>
											<strong>Inovação de processo: </strong>
											<span>
												Relacionada à Indústria 4.0, otimização de processos, melhorias e redução de tempo, transformação digital, conexão com internet das coisas, etc.
											</span>
										</li>
									</ul>
								</div>
							}
						/>
					</div>
				</div>

				<div className="parceiros">
					<h3>Principais Parceiros</h3>

					<div className="grid-parceiros">
						<div className="parceiro">
							<a href="https://www.abdi.com.br/" target="_blank" rel="noreferrer">
								<img src="empresas/abd.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="https://www.badesul.com.br/" target="_blank" rel="noreferrer">
								<img src="empresas/badesul.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="https://www.gov.br/capes/pt-br" target="_blank" rel="noreferrer">
								<img src="empresas/capes.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="https://www.gov.br/cnpq/pt-br" target="_blank" rel="noreferrer">
								<img src="empresas/cnp.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="https://fapergs.rs.gov.br/" target="_blank" rel="noreferrer">
								<img src="empresas/fapergs.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="http://www.finep.gov.br/" target="_blank" rel="noreferrer">
								<img src="empresas/finep.png" />
							</a>
						</div>

						<div className="parceiro">
							<a href="https://sebrae.com.br/sites/PortalSebrae/" target="_blank" rel="noreferrer">
								<img src="empresas/sebrae.png" />
							</a>
						</div>
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default NucleoInovacao;
