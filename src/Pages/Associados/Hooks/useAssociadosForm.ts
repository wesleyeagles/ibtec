import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const associadosSchema = z.object({
	Segmento: z
		.string({
			required_error: "Segmento é um campo obrigatório",
		})
		.min(3, {
			message: "Nome deve conter no minimo 3 caracteres",
		}),
	Nome: z.string(),
});

const useAssociadosForm = () => {
	const methods = useForm<z.infer<typeof associadosSchema>>({
		resolver: zodResolver(associadosSchema),
	});

	return {
		methods,
	};
};

export default useAssociadosForm;

export type AssociadosHandleSubmitForm = z.infer<typeof associadosSchema>;
