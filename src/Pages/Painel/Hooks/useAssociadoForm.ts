import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const cadastrarAssociadoSchema = z.object({
	image: z.instanceof(Blob, {
		message: "Nenhum arquivo selecionado",
	}),
	fantasy_name: z.string({
		required_error: "Campo obrigatório",
	}),
	segment_id: z.number({
		required_error: "Campo obrigatório",
	}),
	city_id: z.number({
		required_error: "Campo obrigatório",
	}),
	state: z.string({
		required_error: "Campo obrigatório",
	}),
	address: z.string({
		required_error: "Campo obrigatório",
	}),
	neighborhood: z.string({
		required_error: "Campo obrigatório",
	}),
	zip_code: z.string({
		required_error: "Campo obrigatório",
	}),
	phone: z.string({
		required_error: "Campo obrigatório",
	}),
	website: z.string({
		required_error: "Campo obrigatório",
	}),
});

const useAssociadoForm = () => {
	const methods = useForm<z.infer<typeof cadastrarAssociadoSchema>>({
		resolver: zodResolver(cadastrarAssociadoSchema),
	});

	return {
		methods,
	};
};

export default useAssociadoForm;

export type AssociadoHandleSubmitForm = z.infer<typeof cadastrarAssociadoSchema>;
