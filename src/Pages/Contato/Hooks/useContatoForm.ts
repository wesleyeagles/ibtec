import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contatoSchema = z.object({
	Nome: z
		.string({
			required_error: "Nome é um campo obrigatório",
		})
		.min(3, {
			message: "Nome deve conter no minimo 3 caracteres",
		}),
	Email: z
		.string({
			required_error: "Email é um campo obrigatório",
		})
		.email({
			message: "Email inválido",
		}),
	Telefone: z
		.number({
			required_error: "Telefone é um campo obrigatório",
		})
		.min(1000000000, {
			message: "Formato de telefone inválido. Deve ser (99) 99999-9999.",
		}),
	Assunto: z
		.string({
			required_error: "Assunto é um campo obrigatório",
		})
		.nonempty({
			message: "Assunto é um campo obrigatório",
		}),
	Mensagem: z
		.string({
			required_error: "Mensagem é um campo obrigatório",
		})
		.nonempty({
			message: "Mensagem é um campo obrigatório",
		}),
});

const useContatoForm = () => {
	const methods = useForm<z.infer<typeof contatoSchema>>({
		resolver: zodResolver(contatoSchema),
	});

	return {
		methods,
	};
};

export default useContatoForm;

export type ContatoHandleSubmitForm = z.infer<typeof contatoSchema>;
