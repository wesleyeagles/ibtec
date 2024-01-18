import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import useEventoForm, { EventoHandleSubmitForm } from "../Hooks/useEventoForm";
import CustomDatePicker from "../../../Components/FormInputs/CustomDate/CustomDateInput";
import CustomSelect from "../../../Components/FormInputs/CustomSelectInput/CustomSelect";
import { Button } from "react-bootstrap";
import { useUserContext } from "../../../Global/Contexts/UserContext";
import { addDays } from "date-fns";

interface Horario {
	value: string;
	label: string;
}

const EditarEvento = () => {
	const { methods } = useEventoForm();
	const [error, setError] = useState<string | null>(null);
	const [imageResponse, setImageResponse] = useState<string>("");
	const [imageName, setImageName] = useState<string | null>(null);
	const [id, setId] = useState();

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

	const { slug } = useParams();

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

		if (file?.name) {
			setImageName(file.name);
		}

		if (file) {
			const img = new Image();
			img.src = window.URL.createObjectURL(file);

			img.onload = () => {
				const minWidth = 800; // Defina o tamanho mínimo desejado em pixels
				const minHeight = 400;

				if (img.naturalWidth < minWidth || img.naturalHeight < minHeight) {
					setError(`A imagem deve ter pelo menos ${minWidth}x${minHeight} pixels`);
				} else {
					setError(null);
					const reader = new FileReader();
					reader.readAsDataURL(file);
				}
			};
		}
	};

	useEffect(() => {
		if (!slug) return;

		const fetchPost = async (slug: string) => {
			const toastId = toast("Carregando evento, por favor aguarde...", {
				autoClose: false,
				type: "default",
				isLoading: true,
			});
			try {
				const response = await axios.get(`https://backend-production-9a06.up.railway.app/api/event/${slug}`);

				if (response.data) {
					methods.setValue("nome", response.data.nome);
					methods.setValue("sobre", response.data.sobre);
					methods.setValue("sobre", response.data.sobre);

					methods.setValue("data", addDays(new Date(response.data.data), 1).toISOString().split("T")[0]);

					methods.setValue("dataFim", addDays(new Date(response.data.dataFim), 1).toISOString().split("T")[0]);

					methods.setValue("publicoAlvo", response.data.publicoAlvo);
					methods.setValue("objetivos", response.data.objetivos);
					methods.setValue("tematicas", response.data.tematicas);

					methods.setValue("cargaHoraria", response.data.cargaHoraria);
					methods.setValue("horario", response.data.horario);
					methods.setValue("horarioFim", response.data.horarioFim);
					methods.setValue("modalidade", response.data.modalidade);
					methods.setValue("local", response.data.local);
					methods.setValue("link", response.data.link);

					methods.setValue("facebook", response.data.facebook);
					methods.setValue("instagram", response.data.instagram);
					methods.setValue("linkedin", response.data.linkedin);
					methods.setValue("youtube", response.data.youtube);

					setId(response.data.id);

					const imageBlob = new Blob([response.data.originalImageBuffer], { type: "image/webp" });

					const imageFile = new File([imageBlob], response.data.imagem, { type: imageBlob.type });

					setImageResponse(imageFile.name);

					methods.setValue("imagem", imageFile);

					toast.update(toastId, {
						render: "Evento carregado com sucesso.",
						type: "success",
						theme: "colored",
						isLoading: false,
						autoClose: 3000,
					});
				}
			} catch (err) {
				toast.update(toastId, {
					render: "Ocorreu um erro ao carregar evento, tente novamente mais tarde",
					type: "error",
					theme: "colored",
					isLoading: false,
					autoClose: 3000,
				});
			}
		};

		fetchPost(slug);
	}, [slug]);

	const [isCreating, isSetCreating] = useState(false);

	const handleSubmit = async (values: EventoHandleSubmitForm) => {
		isSetCreating(true);
		const toastId = toast("Editando evento, por favor aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});
		try {
			const formData = new FormData();
			if (imageName) {
				if (imageName != imageResponse) {
					formData.append("imagem", values.imagem);
				}
			}

			formData.append("nome", values.nome);
			formData.append("sobre", values.sobre);

			if (values.data) {
				formData.append("data", addDays(new Date(values.data), -1).toISOString().split("T")[0]);
			}

			if (values.dataFim) {
				formData.append("dataFim", addDays(new Date(values.dataFim), -1).toISOString().split("T")[0]);
			}

			if (values.publicoAlvo) {
				formData.append("publicoAlvo", values.publicoAlvo as any);
			}

			if (values.cargaHoraria) {
				formData.append("cargaHoraria", values.cargaHoraria);
			}

			if (values.horario) {
				formData.append("horario", values.horario);
			}

			if (values.horarioFim) {
				formData.append("horarioFim", values.horarioFim);
			}

			if (values.modalidade) {
				formData.append("modalidade", values.modalidade);
			}

			if (values.local) {
				formData.append("local", values.local);
			}

			if (values.link) {
				formData.append("link", values.link);
			}

			if (values.facebook) {
				formData.append("facebook", values.facebook);
			}

			if (values.instagram) {
				formData.append("instagram", values.instagram);
			}

			if (values.linkedin) {
				formData.append("linkedin", values.linkedin);
			}

			if (values.youtube) {
				formData.append("youtube", values.youtube);
			}

			const response = await axios.put(`https://backend-production-9a06.up.railway.app/api/event/editar/${id}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			isSetCreating(false);
			toast.update(toastId, {
				isLoading: false,
				autoClose: 3000,
				theme: "colored",
				type: imageName != imageResponse ? "success" : "info",
				render: imageName === imageResponse ? response.data.message : "Evento editado com sucesso",
			});
			navigate("/painel-administrativo/lista-eventos");
		} catch (err: any) {
			isSetCreating(false);
			const error = err.response.data.error;
			console.log(err);
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
					<h2>Editar evento</h2>
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
								<div className="data-fim">
									<CustomDatePicker placeholder="Digite a data que o evento finalizará" control={methods.control} name="dataFim" label="Data do Fim do Evento" />
								</div>
								<div className="horario">
									<CustomSelect options={horarios} placeholder="Selecione o horário que o evento vai começar" control={methods.control} name="horario" label="Horário do Evento" />
								</div>
								<div className="horario-fim">
									<CustomSelect
										options={horarios}
										placeholder="Selecione o horário que o evento vai acabar"
										control={methods.control}
										name="horarioFim"
										label="Horário do Fim do Evento"
									/>
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

export default EditarEvento;
