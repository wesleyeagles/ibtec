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
	publicoAlvo: z.array(z.string().trim()),
	objetivos: z.array(z.string().trim()),
	tematicas: z.array(z.string().trim()),
	cargaHoraria: z.string().nullable().optional(),
	horario: z.string().nullable().optional(),
	modalidade: z.string().nullable().optional(),
	local: z.string().nullable().optional(),
	data: z.string().nullable().optional(),
	link: z.string().nullable().optional(),
	facebook: z.string().nullable().optional(),
	instagram: z.string().nullable().optional(),
	linkedin: z.string().nullable().optional(),
	youtube: z.string().nullable().optional(),
});

const useEventoForm = () => {
	const methods = useForm<z.infer<typeof cadastrarEventoSchema>>({
		resolver: zodResolver(cadastrarEventoSchema),
		defaultValues: {
			publicoAlvo: [" "],
			objetivos: [" "],
			tematicas: [" "],
			// other default values...
		},
	});

	const { fields, append, remove } = useFieldArray({
		control: methods.control,
		name: "publicoAlvo" as unknown as never,
	});

	const {
		fields: fieldsObjetivos,
		append: appendObjetivos,
		remove: removeObjetivos,
	} = useFieldArray({
		control: methods.control,
		name: "objetivos" as unknown as never,
	});

	const {
		fields: fieldsTematicas,
		append: appendTematicas,
		remove: removeTematicas,
	} = useFieldArray({
		control: methods.control,
		name: "tematicas" as unknown as never,
	});

	return {
		methods,
		fields,
		append,
		remove,
		fieldsObjetivos,
		appendObjetivos,
		removeObjetivos,
		appendTematicas,
		fieldsTematicas,
		removeTematicas,
	};
};

export default useEventoForm;

export type EventoHandleSubmitForm = z.infer<typeof cadastrarEventoSchema>;
