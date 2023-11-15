import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const pesquisaNoticiaSchema = z.object({
	pesquisa: z.string(),
});

const usePesquisaNoticiaForm = () => {
	const methods = useForm<z.infer<typeof pesquisaNoticiaSchema>>({
		resolver: zodResolver(pesquisaNoticiaSchema),
	});

	return {
		methods,
	};
};

export default usePesquisaNoticiaForm;

export type PesquisaNoticiaHandleSubmitForm = z.infer<typeof pesquisaNoticiaSchema>;
