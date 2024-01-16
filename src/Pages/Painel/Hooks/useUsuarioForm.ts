import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const cadastrarUsuarioSchema = z
	.object({
		image: z.instanceof(Blob, {
			message: "Nenhum arquivo selecionado",
		}),
		name: z.string({
			required_error: "Campo obrigatório",
		}),
		role: z.string({
			required_error: "Campo obrigatório",
		}),
		email: z
			.string({
				required_error: "Campo obrigatório",
			})
			.email({
				message: "Email inválido",
			}),
		password: z
			.string({
				required_error: "Campo obrigatório",
			})
			.min(5, {
				message: "Minimo de 5 caracteres para a senha",
			})
			.max(10, {
				message: "Máximo de 10 caracteres para a senha",
			}),
		confirmPassword: z
			.string({
				required_error: "Campo obrigatório",
			})
			.min(5, {
				message: "Minimo de 5 caracteres para a senha",
			})
			.max(10, {
				message: "Máximo de 10 caracteres para a senha",
			}),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "As senhas não coincidem",
		path: ["confirmPassword"],
	});

const useUsuarioForm = () => {
	const methods = useForm<z.infer<typeof cadastrarUsuarioSchema>>({
		resolver: zodResolver(cadastrarUsuarioSchema),
	});

	return {
		methods,
	};
};

export default useUsuarioForm;

export type UsuarioHandleSubmitForm = z.infer<typeof cadastrarUsuarioSchema>;
