import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

interface DetalhesEmpresaProps {
	empresa: any;
}

const DetalhesAssociado: React.FC<DetalhesEmpresaProps> = ({ empresa }) => {
	const [dataCity, setCityData] = useState<any>();
	const [dataSegment, setSegmentData] = useState<any>();

	useEffect(() => {
		async function fetchDataCities() {
			try {
				const response = await axios.get("https://ibtec-backend.onrender.com/api/cities/todas-cidades");
				const city = response.data.filter((cities: any) => cities.id === empresa.city_id);
				setCityData(city);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		}

		async function fetchDataSegments() {
			try {
				const response = await axios.get("https://ibtec-backend.onrender.com/api/segments/todos-segmentos");
				const segment = response.data.filter((segment: any) => segment.id === empresa.segment_id);
				setSegmentData(segment[0].title);
			} catch (error) {
				console.error("Erro ao buscar dados:", error);
			}
		}

		fetchDataSegments();
		fetchDataCities();
	}, []);

	return (
		<div className="detalhes-empresa">
			{dataSegment && dataCity ? (
				<>
					<div className="image">
						<img src={`https://ibtec.org.br/media/associates/${empresa.image}`} alt={empresa.fantasy_name} />
					</div>
					<div>
						<h4>{empresa.fantasy_name}</h4>
						<p>
							<strong>Segmento:</strong> {dataSegment ? dataSegment : null}
						</p>
						<p>
							<strong>Endereço:</strong> {empresa.address}
						</p>
						<p>
							<strong>Cidade:</strong> {dataCity ? dataCity[0].city + " / " + dataCity[0].uf : null}
						</p>
						<p>
							<strong>CEP:</strong> {empresa.zip_code}
						</p>
						<p>
							<strong>Telefone:</strong> {empresa.phone}
						</p>
						<p>
							<strong>Site:</strong> {""}
							{empresa.website ? (
								<a href={empresa.website} target="_blank" rel="noreferrer">
									{empresa.website}
								</a>
							) : (
								"N/A"
							)}
						</p>
					</div>
				</>
			) : (
				<div className="d-flex justify-content-center m-auto pt-5 pb-5">
					<Spinner animation="border" role="status" variant="light">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			)}
		</div>
	);
};

export default DetalhesAssociado;
