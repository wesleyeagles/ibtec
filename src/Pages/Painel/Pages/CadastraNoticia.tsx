import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomRichTextInput from "../../../Components/FormInputs/CustomRichTextInput/CustomRichTextInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import useNoticiaForm, { NoticiaHandleSubmitForm } from "../Hooks/useNoticiaForm";
import { useState } from "react";
import { toast } from "react-toastify";

const CadastraNoticia = () => {
	const { methods } = useNoticiaForm();
	const [previewImage, setPreviewImage] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const [isCreating, isSetCreating] = useState(false);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];

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

	const handleSubmit = async (values: NoticiaHandleSubmitForm) => {
		isSetCreating(true);
		const toastId = toast("Cadastrando post, por favor aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});
		try {
			const response = await axios.post(
				"http://localhost:3000/api/posts/criar-post",
				{
					...values,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data", // Certifique-se de definir o cabeçalho apropriado para upload de arquivo
					},
				}
			);

			isSetCreating(false);
			toast.update(toastId, {
				isLoading: false,
				autoClose: 3000,
				theme: "colored",
				type: "success",
				render: "Post cadastrado com sucesso!",
			});
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
						<h2>Cadastrar notícia</h2>
						<form onSubmit={methods.handleSubmit(handleSubmit)}>
							<fieldset disabled={isCreating}>
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
									<button disabled={!methods.watch("conteudo")}>Enviar</button>
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

export default CadastraNoticia;
