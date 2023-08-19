import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const newsLetterSchema = z.object({
	Email: z
		.string({
			required_error: "Email é um campo obrigatório",
		})
		.email({
			message: "Email inválido",
		}),
});

const useNewsletterForm = () => {
	const methods = useForm<z.infer<typeof newsLetterSchema>>({
		resolver: zodResolver(newsLetterSchema),
	});

	return {
		methods,
	};
};

export default useNewsletterForm;

export type NewsletterHandleSubmitForm = z.infer<typeof newsLetterSchema>;
