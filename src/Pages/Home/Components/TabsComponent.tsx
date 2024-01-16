import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.Components.Style.scss";
import { BiomecanicaIcon, FisicoMecanicoIcon, MicrobiologiaIcon, SubstanciasIcon } from "../../../assets/Icones";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";

const TabsComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const [borderPosition, setBorderPosition] = useState<number>(0);
	const [locale, setLocale] = useState<"br" | "en" | "es">("br");

	const handleTabChange = (tabNumber: number) => {
		setActiveTab(tabNumber);
		const newPosition = (tabNumber - 1) * 25.0;
		setBorderPosition(newPosition);
	};

	const scrollToTop = () => {
		const scrollToTopEasing = (t: number) => t * (2 - t);
		const startPosition = document.documentElement.scrollTop || document.body.scrollTop;
		const startTime = performance.now();

		const scrollToTopAnimation = (currentTime: number) => {
			const elapsedTime = currentTime - startTime;
			const progress = elapsedTime / 2500; // Animation duration (ms)
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

	const isMedia1024px = useMediaQuery("(max-width: 1024px)");

	if (locale === "en") {
		return (
			<div className="tabs-container">
				<h2>Discover the solutions that serve the sectors</h2>
				<div className="tabs-buttons">
					<div
						className="border-slide"
						style={{
							left: `${borderPosition}%`,
							borderTopLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderBottomLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderTopRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
							borderBottomRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
						}}
					/>
					<button className={`fisico tab-button ${activeTab === 1 ? "active" : ""}`} onClick={() => handleTabChange(1)}>
						<FisicoMecanicoIcon size={"1.5rem"} />
						<span>Mechanical Physicist</span>
					</button>
					<button className={`substancia tab-button ${activeTab === 2 ? "active" : ""}`} onClick={() => handleTabChange(2)}>
						<SubstanciasIcon size={"1.5rem"} />
						<span>Restricted and non-restricted substances</span>
					</button>
					<button className={`microbiologica tab-button ${activeTab === 3 ? "active" : ""}`} onClick={() => handleTabChange(3)}>
						<MicrobiologiaIcon size={"1.5rem"} />
						<span>Microbiology</span>
					</button>
					<button className={`biomecanica tab-button ${activeTab === 4 ? "active" : ""}`} onClick={() => handleTabChange(4)}>
						<BiomecanicaIcon size={"1.5rem"} />
						<span>Biomechanics</span>
					</button>
				</div>
				<div className="tab-content">
					<div className={`tab-content-inner ${activeTab === 1 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Mechanical physicist</h3>
								<p>
									The physical-mechanical laboratory provides laboratory services for quality control in various segments such as footwear, leather, bags, components and artifacts,
									textiles, polymers, among others.
								</p>
								<br />
								<p>
									Physical-mechanical testing aims to meet the needs of companies seeking to develop materials and products, proving quality for the meeting consumer needs and also
									facing competition, also enabling participation in public notices.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-fisico-mecanico">
									<button>I WANT TO KNOW MORE</button>
								</Link>
							</div>
							<img src="/fisico-mecanico.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 2 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Restricted and non-restricted substances</h3>
								<p>
									We offer the entire infrastructure to carry out tests and support companies seeking to meet national and international requirements regarding the presence of
									restrictive substances in their products.
								</p>
								<br />
								<p>
									Furthermore, it provides quality control laboratory services to identify chemical substances in its products in various segments, such as footwear, bags, leather,
									synthetics, components and artifacts, textiles, polymers, jewelry, among others.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-substancias-restritas">
									<button>I WANT TO KNOW MORE</button>
								</Link>
							</div>
							<img src="/substancias.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 3 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Microbiology</h3>
								<p>Since 2007, the Microbiology Laboratory has carried out a wide variety of tests with bacteria, fungi and viruses to increase the quality of products.</p>

								<Link onClick={scrollToTop} to="/solucoes-microbiologicas">
									<button>I WANT TO KNOW MORE</button>
								</Link>
							</div>
							<img src="/microbiologia.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 4 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Biomechanics</h3>
								<p>
									The Biomechanics Laboratory carries out services and research aimed at improving footwear and components that add attributes of comfort, performance, health and
									safety for users, whether they are children, women, athletes or workers.
								</p>
								<br />
								<p>We seek to qualify products, according to their functionality and for what purpose they will be manufactured. For this, there are Footwear Comfort standards.</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-biomecanica">
									<button>I WANT TO KNOW MORE</button>
								</Link>
							</div>
							<img src="/biomecanica.webp" />
						</div>
					</div>
				</div>
			</div>
		);
	} else if (locale === "es") {
		return (
			<div className="tabs-container">
				<h2>Conheça as soluções que atendem os setores</h2>
				<div className="tabs-buttons">
					<div
						className="border-slide"
						style={{
							left: `${borderPosition}%`,
							borderTopLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderBottomLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderTopRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
							borderBottomRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
						}}
					/>
					<button className={`fisico tab-button ${activeTab === 1 ? "active" : ""}`} onClick={() => handleTabChange(1)}>
						<FisicoMecanicoIcon size={"1.5rem"} />
						<span>Físico Mecânico</span>
					</button>
					<button className={`substancia tab-button ${activeTab === 2 ? "active" : ""}`} onClick={() => handleTabChange(2)}>
						<SubstanciasIcon size={"1.5rem"} />
						<span>Substâncias restritas e não restritivas</span>
					</button>
					<button className={`microbiologica tab-button ${activeTab === 3 ? "active" : ""}`} onClick={() => handleTabChange(3)}>
						<MicrobiologiaIcon size={"1.5rem"} />
						<span>Microbiologia</span>
					</button>
					<button className={`biomecanica tab-button ${activeTab === 4 ? "active" : ""}`} onClick={() => handleTabChange(4)}>
						<BiomecanicaIcon size={"1.5rem"} />
						<span>Biomecânica</span>
					</button>
				</div>
				<div className="tab-content">
					<div className={`tab-content-inner ${activeTab === 1 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Físico mecânico</h3>
								<p>
									O laboratório físico-mecânico disponibiliza serviços laboratoriais para o controle da qualidade em diversos segmentos como calçados, couro, bolsas, componentes e
									artefatos, têxteis, polímeros, entre outros.
								</p>
								<br />
								<p>
									Os ensaios físico-mecânicos têm como finalidade atender as necessidades de empresas que buscam desenvolver materiais e produtos, comprovando a qualidade para o
									atendimento das necessidades dos consumidores e também frente à concorrência, possibilitando também a participação em editais públicos.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-fisico-mecanico">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/fisico-mecanico.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 2 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Substâncias restritas e não restritivas</h3>
								<p>
									Oferecemos toda a infraestrutura para a realização de ensaios e apoio às empresas que buscam atender as exigências nacionais e internacionais com relação a presença
									de substâncias restritivas em seus produtos.
								</p>
								<br />
								<p>
									Além disso, disponibiliza serviços laboratoriais de controle da qualidade para identificação de substâncias químicas em seus produtos em diversos segmentos como
									calçados, bolsas, couro, sintéticos, componentes e artefatos, têxteis, polímeros, joias, entre outros.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-substancias-restritas">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/substancias.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 3 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Microbiologia</h3>
								<p>Desde 2007, o Laboratório de Microbiologia realiza uma grande variedade de testes com bactérias, fungos e vírus para aumentar a qualidade dos produtos.</p>
								<Link onClick={scrollToTop} to="/solucoes-microbiologicas">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/microbiologia.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 4 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Biomecânica</h3>
								<p>
									O Laboratório de Biomecânica realiza serviços e pesquisas voltados a melhorias de calçados e componentes que agreguem atributos de conforto, performance/desempenho,
									saúde e segurança para os usuários, sejam eles crianças, mulheres, atletas ou trabalhadores.
								</p>
								<br />
								<p>Buscamos qualificar os produtos, conforme a sua funcionalidade e para qual objetivo ele será fabricado. Para isso, existem normas de Conforto em Calçados.</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-biomecanica">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/biomecanica.webp" />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="tabs-container">
				<h2>Conheça as soluções que atendem os setores</h2>
				<div className="tabs-buttons">
					<div
						className="border-slide"
						style={{
							left: `${borderPosition}%`,
							borderTopLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderBottomLeftRadius: isMedia1024px ? (activeTab === 1 ? "6px" : "0px") : undefined,
							borderTopRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
							borderBottomRightRadius: isMedia1024px ? (activeTab === 4 ? "6px" : "0px") : undefined,
						}}
					/>
					<button className={`fisico tab-button ${activeTab === 1 ? "active" : ""}`} onClick={() => handleTabChange(1)}>
						<FisicoMecanicoIcon size={"1.5rem"} />
						<span>Físico Mecânico</span>
					</button>
					<button className={`substancia tab-button ${activeTab === 2 ? "active" : ""}`} onClick={() => handleTabChange(2)}>
						<SubstanciasIcon size={"1.5rem"} />
						<span>Substâncias restritas e não restritivas</span>
					</button>
					<button className={`microbiologica tab-button ${activeTab === 3 ? "active" : ""}`} onClick={() => handleTabChange(3)}>
						<MicrobiologiaIcon size={"1.5rem"} />
						<span>Microbiologia</span>
					</button>
					<button className={`biomecanica tab-button ${activeTab === 4 ? "active" : ""}`} onClick={() => handleTabChange(4)}>
						<BiomecanicaIcon size={"1.5rem"} />
						<span>Biomecânica</span>
					</button>
				</div>
				<div className="tab-content">
					<div className={`tab-content-inner ${activeTab === 1 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Físico mecânico</h3>
								<p>
									O laboratório físico-mecânico disponibiliza serviços laboratoriais para o controle da qualidade em diversos segmentos como calçados, couro, bolsas, componentes e
									artefatos, têxteis, polímeros, entre outros.
								</p>
								<br />
								<p>
									Os ensaios físico-mecânicos têm como finalidade atender as necessidades de empresas que buscam desenvolver materiais e produtos, comprovando a qualidade para o
									atendimento das necessidades dos consumidores e também frente à concorrência, possibilitando também a participação em editais públicos.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-fisico-mecanico">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/fisico-mecanico.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 2 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Substâncias restritas e não restritivas</h3>
								<p>
									Oferecemos toda a infraestrutura para a realização de ensaios e apoio às empresas que buscam atender as exigências nacionais e internacionais com relação a presença
									de substâncias restritivas em seus produtos.
								</p>
								<br />
								<p>
									Além disso, disponibiliza serviços laboratoriais de controle da qualidade para identificação de substâncias químicas em seus produtos em diversos segmentos como
									calçados, bolsas, couro, sintéticos, componentes e artefatos, têxteis, polímeros, joias, entre outros.
								</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-substancias-restritas">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/substancias.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 3 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Microbiologia</h3>
								<p>Desde 2007, o Laboratório de Microbiologia realiza uma grande variedade de testes com bactérias, fungos e vírus para aumentar a qualidade dos produtos.</p>
								<Link onClick={scrollToTop} to="/solucoes-microbiologicas">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/microbiologia.webp" />
						</div>
					</div>
					<div className={`tab-content-inner ${activeTab === 4 ? "active" : ""}`}>
						<div className="wrapper">
							<div className="content">
								<h3>Biomecânica</h3>
								<p>
									O Laboratório de Biomecânica realiza serviços e pesquisas voltados a melhorias de calçados e componentes que agreguem atributos de conforto, performance/desempenho,
									saúde e segurança para os usuários, sejam eles crianças, mulheres, atletas ou trabalhadores.
								</p>
								<br />
								<p>Buscamos qualificar os produtos, conforme a sua funcionalidade e para qual objetivo ele será fabricado. Para isso, existem normas de Conforto em Calçados.</p>
								<Link onClick={scrollToTop} to="/laboratorio-de-biomecanica">
									<button>QUERO SABER MAIS</button>
								</Link>
							</div>
							<img src="/biomecanica.webp" />
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default TabsComponent;
