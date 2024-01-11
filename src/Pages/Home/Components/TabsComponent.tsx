import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.Components.Style.scss";
import { BiomecanicaIcon, FisicoMecanicoIcon, MicrobiologiaIcon, SubstanciasIcon } from "../../../assets/Icones";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../../Hooks/useMediaQuery";

const TabsComponent: React.FC = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const [borderPosition, setBorderPosition] = useState<number>(0);

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
								Oferecemos toda a infraestrutura para a realização de ensaios e apoio às empresas que buscam atender as exigências nacionais e internacionais com relação a presença de
								substâncias restritivas em seus produtos.
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
};

export default TabsComponent;
