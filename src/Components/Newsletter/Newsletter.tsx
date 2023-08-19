import { toast } from "react-toastify";
import { FacebookIcon, InstagramIcon, LinkedinIcon, NewsletterIcon, YoutubeIcon } from "../../assets/Icones";
import CustomText from "../FormInputs/CustomTextInput/CustomText";
import GridContainer from "../GridContainer/GridContainer";
import "./Components.Newsletter.scss";
import useNewsletterForm, { NewsletterHandleSubmitForm } from "./Hooks/useNewsletterForm";
import { useState } from "react";

const Newsletter = () => {
	const { methods } = useNewsletterForm();

	const [isFormDisabled, setFormDisabled] = useState(false);

	const handleSubmit = async (values: NewsletterHandleSubmitForm) => {
		setFormDisabled(true);
		const toastId = toast.loading("Assinando newsletter, aguarde...", {
			type: toast.TYPE.DEFAULT,
			autoClose: false,

			pauseOnFocusLoss: false,
			pauseOnHover: false,

			theme: "colored",
			isLoading: true,
			bodyStyle: {
				...({ "--icon-width": "30px" } as any),
			},
		});

		try {
			const response = await fetch("https://formspree.io/mbjvgzba", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			});

			if (response.ok) {
				console.log("Inscrição na newsletter realizada com sucesso!");
				toast.dismiss(toastId);

				setFormDisabled(false);
				toast.success("Assinado newsletter com sucesso", {
					autoClose: 2000,
					theme: "colored",
				});
			} else {
				toast.dismiss(toastId);

				setFormDisabled(false);
				toast.error("Erro ao assinar newsletter", {
					autoClose: 2000,
					theme: "colored",
				});
			}
		} catch (error) {
			toast.dismiss(toastId);

			setFormDisabled(false);
			toast.error("Erro ao assinar newsletter", {
				autoClose: 2000,
				theme: "colored",
			});
		}
	};
	return (
		<div className="newsletter">
			<GridContainer>
				<div className="wrapper">
					<div className="label">
						<NewsletterIcon />
						<h3>
							Assine nossa <strong>Newsletter</strong>
						</h3>
					</div>
					<div className="form">
						<form onSubmit={methods.handleSubmit(handleSubmit)}>
							<fieldset className="d-flex gap-4" disabled={isFormDisabled}>
								<CustomText placeholder="Seu melhor e-mail" name="Email" control={methods.control} />
								<div className="inline">
									<button type="submit">Cadastrar</button>
								</div>
							</fieldset>
						</form>
					</div>
					<div className="social d-flex align-items-center gap-4">
						<p>Siga nas redes</p>
						<div className="d-flex align-items-end gap-3">
							<a href="https://www.facebook.com/ibtecbrasil/" rel="noreferrer" target="_blank">
								<FacebookIcon size={"1.5rem"} />
							</a>
							<a href="https://www.instagram.com/ibtecbrasil/" rel="noreferrer" target="_blank">
								<InstagramIcon size={"1.5rem"} />
							</a>
							<a href="https://www.linkedin.com/company/ibtecbrasil/" rel="noreferrer" target="_blank">
								<LinkedinIcon size={"1.5rem"} />
							</a>
							<a href="https://www.youtube.com/user/ibtec1" rel="noreferrer" target="_blank">
								<YoutubeIcon size={"1.5rem"} />
							</a>
						</div>
					</div>
				</div>
			</GridContainer>
		</div>
	);
};

export default Newsletter;
