import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomRichTextInput from "../../../Components/FormInputs/CustomRichTextInput/CustomRichTextInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import useNoticiaForm, { NoticiaHandleSubmitForm } from "../Hooks/useNoticiaForm";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../../../Global/Contexts/UserContext";
import CustomCheckbox from "../../../Components/FormInputs/CustomCheckbox/CustomCheckbox";
import CustomSelect from "../../../Components/FormInputs/CustomSelectInput/CustomSelect";

const EditarNoticia = () => {
	const { methods } = useNoticiaForm();
	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [imageResponse, setImageResponse] = useState<string>("");
	const [imageName, setImageName] = useState<string | null>(null);

	const navigate = useNavigate();

	const { id } = useParams();

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
					setPreviewImage(null); // Limpa o estado da imagem
				} else {
					setError(null);
					const reader = new FileReader();

					reader.onload = (event) => {
						const preview = event.target?.result;
						if (typeof preview === "string") {
							setPreviewImage(preview);
						}
					};

					reader.readAsDataURL(file);
				}
			};
		}
	};

	useEffect(() => {
		if (!id) return;

		const fetchPost = async (id: number) => {
			const toastId = toast("Carregando post, por favor aguarde...", {
				autoClose: false,
				type: "default",
				isLoading: true,
			});
			try {
				const response = await axios.get(`https://backend-production-9a06.up.railway.app/api/posts/post/${id}`);

				if (response.data) {
					methods.setValue("titulo", response.data.titulo);
					methods.setValue("conteudo", response.data.conteudo);
					methods.setValue("destaque", response.data.destaque === 0 ? false : true);
					methods.setValue("tipo", response.data.tipo);

					const imageBlob = new Blob([response.data.originalImageBuffer], { type: "image/webp" });

					const imageFile = new File([imageBlob], response.data.imagem, { type: imageBlob.type });

					setImageResponse(imageFile.name);

					methods.setValue("imagem", imageFile);

					// Não precisa mais criar um Blob/File para a pré-visualização
					setPreviewImage(`https://dev.ibtec.org.br/dev/blog/${response.data.imagem}`);

					toast.update(toastId, {
						render: "Post carregado com sucesso.",
						type: "success",
						theme: "colored",
						isLoading: false,
						autoClose: 3000,
					});
				}
			} catch (err) {
				console.log(err);

				toast.update(toastId, {
					render: "Ocorreu um erro ao carregar post, tente novamente mais tarde",
					type: "error",
					theme: "colored",
					isLoading: false,
					autoClose: 3000,
				});
			}
		};

		fetchPost(Number(id));
	}, [id]);

	const [isCreating, isSetCreating] = useState(false);

	const handleSubmit = async (values: NoticiaHandleSubmitForm) => {
		isSetCreating(true);
		const toastId = toast("Editando post, por favor aguarde...", {
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

			formData.append("titulo", values.titulo);
			formData.append("conteudo", values.conteudo);
			formData.append("tipo", values.tipo);
			formData.append("destaque", values.destaque ? "1" : "0");

			const response = await axios.put(`https://backend-production-9a06.up.railway.app/api/posts/post/editar/${id}`, formData, {
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
				render: imageName === imageResponse ? response.data.message : "Post editado com sucesso",
			});
			navigate("/painel-administrativo/lista-noticias");
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
			<div className="cadastra-noticia">
				<div className="inputs">
					<div className="inputs-container">
						<h2>Editar notícia</h2>
						<form onSubmit={methods.handleSubmit(handleSubmit)}>
							<fieldset disabled={isCreating}>
								<div className="destaque text-white mt-3">
									<CustomCheckbox
										checkboxValue={{
											checked: 1,
											unchecked: 0,
										}}
										label="Essa nóticia é um destaque?"
										control={methods.control}
										name="destaque"
									/>
								</div>
								<div className="tipo">
									<CustomSelect
										name="tipo"
										label="Tipo"
										placeholder="Selecione o tipo"
										control={methods.control}
										options={[
											{ value: "Mercado", label: "Mercado" },
											{ value: "Negocios", label: "Nossos Negócios" },
										]}
									/>
								</div>
								<div className="imagem">
									<CustomFileInput control={methods.control} name="imagem" onChange={handleImageChange} label="Imagem" />
									{error && <p className="text-danger">{error}</p>}
								</div>
								<div className="titulo">
									<CustomText placeholder="exemplo: Título do meu blog 1" control={methods.control} name="titulo" label="Título" />
								</div>
								<div className="rich-text">
									<CustomRichTextInput control={methods.control} name="conteudo" label="Conteúdo" />
								</div>
								<div className="btn-enviar">
									<button disabled={!methods.watch("conteudo")}>Editar</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
				<div className="pre-visualizacao">
					<div className="inputs-container">
						<h2 className="text-center">Pré-Visualização</h2>
						<div className="imagem">
							{previewImage ? <img src={previewImage} alt="Preview" id="imagemPreview" /> : <img src="https://placehold.co/800x400" alt="Preview" id="imagemPreview" />}
						</div>
						<div className="titulo">
							<h3>{methods.watch("titulo") ? methods.watch("titulo") : "Titulo"}</h3>
						</div>
						<div className="content">
							<div
								dangerouslySetInnerHTML={{
									__html: methods.watch("conteudo"),
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditarNoticia;
