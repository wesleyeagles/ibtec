import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../../Components/FormInputs/CustomSelectInput/CustomSelect";
import { Button } from "react-bootstrap";
import useAssociadoForm, { AssociadoHandleSubmitForm } from "../Hooks/useAssociadoForm";

const CadastraAssociado = () => {
	const { methods } = useAssociadoForm();
	const [error, setError] = useState<string | null>(null);
	const [cities, setCities] = useState([]);

	const navigate = useNavigate();

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const img = new Image();
			img.src = window.URL.createObjectURL(file);

			img.onload = () => {
				const minWidth = 200; // Defina o tamanho mínimo desejado em pixels
				const minHeight = 200;

				if (img.naturalWidth < minWidth || img.naturalHeight < minHeight) {
					setError(`A imagem deve ter pelo menos ${minWidth}x${minHeight} pixels, se não, poderá ficar sem qualidade`);
				} else {
					setError(null);
					const reader = new FileReader();

					reader.readAsDataURL(file);
				}
			};
		}
	};

	const [isCreating, isSetCreating] = useState(false);

	const handleSubmit = async (values: AssociadoHandleSubmitForm) => {
		isSetCreating(true);

		console.log(values);

		const toastId = toast("Cadastrando associado, por favor aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});
		try {
			await axios.post("https://backend-production-9a06.up.railway.app/api/associates/criar-associado", values, {
				headers: {
					"Content-Type": "multipart/form-data", // Certifique-se de definir o cabeçalho apropriado para upload de arquivo
				},
			});

			isSetCreating(false);
			toast.update(toastId, {
				isLoading: false,
				autoClose: 3000,
				theme: "colored",
				type: "success",
				render: "Associado cadastrado com sucesso!",
			});
			navigate("/painel-administrativo/lista-associados");
		} catch (err: any) {
			isSetCreating(false);
			const error = err.response.data.error;
			toast.update(toastId, {
				theme: "colored",
				type: "error",
				isLoading: false,
				autoClose: 3000,
				render: error,
			});
		}
	};

	const fetchData = async () => {
		try {
			const response = await axios.get("https://backend-production-9a06.up.railway.app/api/cities/todas-cidades");

			if (!response.data) return;

			setCities(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="cadastra-associado">
				<div className="inputs">
					<h2>Cadastrar Associado</h2>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<fieldset disabled={isCreating}>
							<div className="inputs-grid">
								<div className="nome">
									<CustomText placeholder="Digite o nome do associado" control={methods.control} name="fantasy_name" label="Nome *" />
								</div>
								<div className="address">
									<CustomText placeholder="Digite o endereço do associado" control={methods.control} name="address" label="Endereço *" />
								</div>
								<div className="segmento">
									<CustomSelect
										options={[
											{
												label: "Artefatos",
												value: 1,
											},
											{
												label: "Calçados",
												value: 2,
											},
											{
												label: "Componentes",
												value: 3,
											},
											{
												label: "Confecções",
												value: 4,
											},
											{
												label: "Couros",
												value: 5,
											},
											{
												label: "EPIs",
												value: 6,
											},
											{
												label: "Máquinas e Ferramentas",
												value: 7,
											},
											{
												label: "Produtos Químicos",
												value: 8,
											},
											{
												label: "Serviços",
												value: 9,
											},
											{
												label: "Outros",
												value: 10,
											},
										]}
										placeholder="Selecione o segmento do associado"
										control={methods.control}
										name="segment_id"
										label="Segmento *"
									/>
								</div>
								<div className="cidade">
									<CustomSelect
										options={cities.map((citie: any) => ({
											label: citie.city,
											value: citie.id,
										}))}
										placeholder="Selecione a cidade do associado"
										control={methods.control}
										name="city_id"
										label="Cidade *"
									/>
								</div>
								<div className="estado">
									<CustomText placeholder="Digite o estado do associado" control={methods.control} name="state" label="Estado *" />
								</div>
								<div className="bairro">
									<CustomText placeholder="Digite o bairro do associado" control={methods.control} name="neighborhood" label="Bairro *" />
								</div>
								<div className="cep">
									<CustomText placeholder="Digite o cep do associado" control={methods.control} name="zip_code" label="CEP *" />
								</div>
								<div className="telefone">
									<CustomText placeholder="Digite o telefone do associado" control={methods.control} name="phone" label="Telefone *" />
								</div>
								<div className="site">
									<CustomText placeholder="Digite o site do associado" control={methods.control} name="website" label="Site" />
								</div>
								<div className="imagem">
									<CustomFileInput onChange={handleImageChange} control={methods.control} name="image" label="Imagem *" />
									{error && <div>{error}</div>}
								</div>
							</div>
							<div className="btn-enviar">
								<Button variant="success" type="submit" size="lg">
									Enviar
								</Button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</>
	);
};

export default CadastraAssociado;
