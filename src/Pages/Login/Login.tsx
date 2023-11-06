import axios from "axios";
import CustomText, { CustomControlledPasswordInput } from "../../Components/FormInputs/CustomTextInput/CustomText";
import useLoginForm, { LoginHandleSubmitForm } from "./Hooks/useLoginForm";
import Cookies from "js-cookie";
import "./Styles/Login.scss";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { methods } = useLoginForm();
	const [isLogging, setIsLogging] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const token = Cookies.get("token");

		if (token) {
			toast("Usuário já autenticado", {
				theme: "colored",
				type: "success",
				autoClose: 3000,
			});

			navigate("/painel-administrativo/dashboard");
		}
	}, []);

	const handleLogin = async (values: LoginHandleSubmitForm) => {
		const toastId = toast("Autenticando, aguarde...", {
			autoClose: false,
			type: "default",
			isLoading: true,
		});

		setIsLogging(true);

		try {
			const response = await axios.post("http://localhost:3000/api/auth/login", {
				email: values.Email,
				password: values.Password,
			});

			const token = response.data.token;
			Cookies.set("token", token, { expires: 1 }); // Expirará em 7 dias
			Cookies.set("userId", response.data.user.id);

			if (token) {
				toast.update(toastId, {
					theme: "colored",
					type: "success",
					isLoading: false,
					autoClose: 3000,
					render: "Login efetuado com sucesso",
				});

				navigate("/painel-administrativo/dashboard");
			}
		} catch (err: any) {
			const error = err.response.data.message;
			toast.update(toastId, {
				theme: "colored",
				type: "error",
				isLoading: false,
				autoClose: 3000,
				render: error,
			});

			setIsLogging(false);
		}
	};

	return (
		<div className="login">
			<div className="login-container">
				<div className="title">
					<h3>LOGIN</h3>
				</div>
				<form onSubmit={methods.handleSubmit(handleLogin)}>
					<fieldset disabled={isLogging}>
						<div className="email">
							<CustomText control={methods.control} name="Email" placeholder="Email" />
						</div>
						<div className="password">
							<CustomControlledPasswordInput maxLength={10} control={methods.control} name="Password" placeholder="Senha" />
						</div>

						<button className="btn-entrar">Entrar</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default Login;
