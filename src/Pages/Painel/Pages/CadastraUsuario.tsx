import axios from "axios";
import CustomFileInput from "../../../Components/FormInputs/CustomFileInput/CustomFileInput";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../../../Components/FormInputs/CustomSelectInput/CustomSelect";
import { Button } from "react-bootstrap";
import useUsuarioForm, { UsuarioHandleSubmitForm } from "../Hooks/useUsuarioForm";
import { useUserContext } from "../../../Global/Contexts/UserContext";

const CadastraUsuario = () => {
	const { methods } = useUsuarioForm();
	const [error, setError] = useState<string | null>(null);

	const navigate = useNavigate();

	const { user } = useUserContext();

	useEffect(() => {
		const role = user?.user.role;

		if (role !== "admin") {
			navigate("/painel-administrativo/dashboard");

			toast.warning("Usuário não tem permissões para acessar essa página", {
				theme: "colored",
			});
		}
	}, [user]);

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

	const handleSubmit = async (values: UsuarioHandleSubmitForm) => {
		isSetCreating(true);

		const toastId = toast("Cadastrando usuário, por favor aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});
		try {
			await axios.post(
				"https://backend-production-9a06.up.railway.app/api/user/criar-usuario",
				{
					name: values.name,
					password: values.password,
					email: values.email,
					role: values.role,
					image: values.image,
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
				render: "Usuário cadastrado com sucesso!",
			});
			navigate("/painel-administrativo/lista-usuarios");
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
			<div className="cadastra-usuario">
				<div className="inputs">
					<h2>Cadastrar Usuário</h2>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<fieldset disabled={isCreating}>
							<div className="inputs-grid">
								<div className="nome">
									<CustomText placeholder="Digite o nome do usuário" control={methods.control} name="name" label="Nome *" />
								</div>
								<div className="email">
									<CustomText placeholder="Digite o email do usuário" control={methods.control} name="email" label="Email *" />
								</div>
								<div className="cargo">
									<CustomSelect
										options={[
											{
												label: "Admin",
												value: "admin",
											},
											{
												label: "Moderador",
												value: "moderador",
											},
											{
												label: "Usuário",
												value: "usuario",
											},
										]}
										placeholder="Selecione o cargo do usuário"
										control={methods.control}
										name="role"
										label="Cargo *"
									/>
								</div>
								<div className="senha">
									<CustomText type="password" placeholder="Digite uma senha" control={methods.control} name="password" label="Senha *" />
								</div>
								<div className="confirmar-senha">
									<CustomText type="password" placeholder="Confirme sua senha" control={methods.control} name="confirmPassword" label="Confirmar Senha *" />
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

export default CadastraUsuario;
