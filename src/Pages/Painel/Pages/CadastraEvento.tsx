import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useEventoForm, { EventoHandleSubmitForm } from "../Hooks/useEventoForm";
import CustomDatePicker from "../../../Components/FormInputs/CustomDate/CustomDateInput";
import CustomSelect from "../../../Components/FormInputs/CustomSelectInput/CustomSelect";
import { Button } from "react-bootstrap";
import { useUserContext } from "../../../Global/Contexts/UserContext";

interface Horario {
	value: string;
	label: string;
}

const CadastraEvento = () => {
	const { methods } = useEventoForm();
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	const { user } = useUserContext();

	useEffect(() => {
		const role = user?.user.role;

		if (role === "usuario") {
			navigate("/painel-administrativo/dashboard");

			toast.warning("Usuário não tem permissões para acessar essa página", {
				theme: "colored",
			});
		}
	}, [user]);

	const horarios: Horario[] = [];

	for (let horas = 0; horas < 24; horas++) {
		for (let minutos = 0; minutos < 60; minutos += 15) {
			const horaFormatada = `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
			horarios.push({
				value: horaFormatada,
				label: horaFormatada,
			});
		}
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

		if (file) {
			const img = new Image();
			img.src = window.URL.createObjectURL(file);

			img.onload = () => {
				const minWidth = 800; // Defina o tamanho mínimo desejado em pixels
				const minHeight = 400;

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

	const handleSubmit = async (values: EventoHandleSubmitForm) => {
		isSetCreating(true);

		const toastId = toast("Cadastrando evento, por favor aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});
		try {
			await axios.post("https://backend-production-9a06.up.railway.app/api/event/criar-evento", values, {
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
				render: "Evento cadastrado com sucesso!",
			});
			navigate("/painel-administrativo/lista-eventos");
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

	return (
		<>
			<div className="cadastra-evento">
				<div className="inputs">
					<h2>Cadastrar evento</h2>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<fieldset disabled={isCreating}>
							<div className="inputs-grid">
								<div className="titulo">
									<CustomText placeholder="Digite o título do evento" control={methods.control} name="nome" label="Título *" />
								</div>
								<div className="sobre">
									<CustomText placeholder="Digite a descrição do evento" control={methods.control} name="sobre" label="Sobre *" />
								</div>

								<div className="carga">
									<CustomText placeholder="Digite a carga horária evento" control={methods.control} name="cargaHoraria" label="Carga horária" />
								</div>
								<div className="data">
									<CustomDatePicker placeholder="Digite a data que será realizado o evento" control={methods.control} name="data" label="Data do Evento" />
								</div>
								<div className="horario">
									<CustomSelect options={horarios} placeholder="Selecione o horário que o evento vai começar" control={methods.control} name="horario" label="Horário do Evento" />
								</div>
								<div className="modalidade">
									<CustomSelect
										options={[
											{
												label: "Presencial",
												value: "Presencial",
											},
											{
												label: "Online",
												value: "Online",
											},
											{
												label: "Presencial e Online",
												value: "Presencial e Online",
											},
										]}
										placeholder="Escolha a modalidade do evento"
										control={methods.control}
										name="modalidade"
										label="Modalidade"
									/>
								</div>
								<div className="local">
									<CustomText placeholder="Digite o local aonde o evento se realizará" control={methods.control} name="local" label="Local" />
								</div>
								<div className="link">
									<CustomText placeholder="Digite um link caso necessário, como um link de inscrição" control={methods.control} name="link" label="Link" />
								</div>
								<div className="imagem">
									<CustomFileInput onChange={handleImageChange} control={methods.control} name="imagem" label="Imagem *" />
									{error && <div>{error}</div>}
								</div>
								<div className="alvo">
									<CustomText placeholder="Cada público separado por virgula" control={methods.control} name="publicoAlvo" label="Público Alvo" />
								</div>
								<div className="objetivos">
									<CustomText placeholder="Cada objetivo separado por virgula" control={methods.control} name="objetivos" label="Objetivos" />
								</div>
								<div className="tematicas">
									<CustomText placeholder="Cada temática separada por virgula" control={methods.control} name="tematicas" label="Temáticas" />
								</div>
							</div>

							<span className="links-title">Links de Transmissão</span>
							<div className="links-grid">
								<div className="facebook">
									<CustomText placeholder="Adicione o link da live do facebook" control={methods.control} name="facebook" label="Facebook" />
								</div>
								<div className="instagram">
									<CustomText placeholder="Adicione o link da live do instagram" control={methods.control} name="instagram" label="Instagram" />
								</div>
								<div className="linkedin">
									<CustomText placeholder="Adicione o link da live do linkedin" control={methods.control} name="linkedin" label="Linkedin" />
								</div>
								<div className="Youtube">
									<CustomText placeholder="Adicione o link da live do youtube" control={methods.control} name="youtube" label="Youtube" />
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

export default CadastraEvento;
