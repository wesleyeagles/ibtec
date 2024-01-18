import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const cadastrarEventoSchema = z.object({
	imagem: z.instanceof(Blob, {
		message: "Nenhum arquivo selecionado",
	}),
	nome: z.string({
		required_error: "Campo obrigatório",
	}),
	sobre: z.string({
		required_error: "Campo obrigatório",
	}),
	nomeEvento: z.string().optional().nullable(),
	categoriaEvento: z.string().optional().nullable(),
	publicoAlvo: z.string().optional().nullable(),
	objetivos: z.string().optional().nullable(),
	tematicas: z.string().optional().nullable(),
	cargaHoraria: z.string().nullable().optional(),
	horario: z.string().nullable().optional(),
	horarioFim: z.string().nullable().optional(),
	modalidade: z.string().nullable().optional(),
	local: z.string().nullable().optional(),
	data: z.string().nullable().optional(),
	dataFim: z.string().nullable().optional(),
	link: z.string().nullable().optional(),
	facebook: z.string().nullable().optional(),
	instagram: z.string().nullable().optional(),
	linkedin: z.string().nullable().optional(),
	youtube: z.string().nullable().optional(),
});

const useEventoForm = () => {
	const methods = useForm<z.infer<typeof cadastrarEventoSchema>>({
		resolver: zodResolver(cadastrarEventoSchema),
	});

	return {
		methods,
	};
};

export default useEventoForm;

export type EventoHandleSubmitForm = z.infer<typeof cadastrarEventoSchema>;
