import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const cadastrarNoticiaSchema = z.object({
	imagem: z.instanceof(Blob, {
		message: "A imagem deve ser um arquivo .png, .jpeg ou .jpg",
	}),
	conteudo: z.string(),
	titulo: z.string({
		required_error: "O título é obrigatório",
	}),
	tipo: z.string({
		required_error: "O tipo é obrigatório",
	}),
	destaque: z.boolean().nullable(),
});

const useNoticiaForm = () => {
	const methods = useForm<z.infer<typeof cadastrarNoticiaSchema>>({
		resolver: zodResolver(cadastrarNoticiaSchema),
		defaultValues: {
			destaque: false,
		},
	});

	return {
		methods,
	};
};

export default useNoticiaForm;

export type NoticiaHandleSubmitForm = z.infer<typeof cadastrarNoticiaSchema>;
