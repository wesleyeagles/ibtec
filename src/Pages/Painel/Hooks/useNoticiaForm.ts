import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const cadastrarNoticiaSchema = z.object({
	imagem: z.instanceof(Blob),
	conteudo: z.string(),
	titulo: z.string(),
});

const useNoticiaForm = () => {
	const methods = useForm<z.infer<typeof cadastrarNoticiaSchema>>({
		resolver: zodResolver(cadastrarNoticiaSchema),
	});

	return {
		methods,
	};
};

export default useNoticiaForm;

export type NoticiaHandleSubmitForm = z.infer<typeof cadastrarNoticiaSchema>;
