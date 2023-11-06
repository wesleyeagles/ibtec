import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginSchema = z.object({
	Email: z
		.string({
			required_error: "Email é um campo obrigatório",
		})
		.email({
			message: "Email inválido",
		}),
	Password: z
		.string({
			required_error: "Senha é um campo obrigatório",
		})
		.min(6, {
			message: "Número minimo de caracteres é 6",
		})
		.max(10, {
			message: "Número máximo de caracteres é 10",
		}),
});

const useLoginForm = () => {
	const methods = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
	});

	return {
		methods,
	};
};

export default useLoginForm;

export type LoginHandleSubmitForm = z.infer<typeof loginSchema>;
