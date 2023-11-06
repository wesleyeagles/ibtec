import { Button } from "react-bootstrap";
import CustomTextArea from "../../Components/FormInputs/CustomTextArea/CustomTextArea";
import CustomText from "../../Components/FormInputs/CustomTextInput/CustomText";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { CheckIcon, CloseIcon, MailFooterIcon, PhoneFooterIcon, PinFooterIcon } from "../../assets/Icones";
import useContatoForm, { ContatoHandleSubmitForm } from "./Hooks/useContatoForm";
import axios from "axios";
import "./Pages.Contato.Style.scss";
import { toast } from "react-toastify";
import { useState } from "react";
import CustomNumberInput from "../../Components/FormInputs/CustomNumberInput/CustomNumber";
import CustomPatternInput from "../../Components/FormInputs/CustomPatternInput/CustomPatternInput";

const Contato = () => {
	const { methods } = useContatoForm();

	const [isLoadingForm, setIsLoadingForm] = useState(false);

	const onSubmit = (values: ContatoHandleSubmitForm, e: any) => {
		e.preventDefault();
		setIsLoadingForm(true);

		const toastId = toast.loading("Enviando formulário de contato...", {
			theme: "colored",
			isLoading: true,
		});

		axios
			.post("https://ibtec-backend.onrender.com/enviar-formulario", {
				...values,
			})
			.then((res) => {
				toast.update(toastId, {
					autoClose: 2500,
					theme: "colored",
					type: "success",
					icon: <CheckIcon size={"1.5rem"} color="#FFF" fill="#FFF" />,
					render: res.data,
				});

				setIsLoadingForm(false);

				setTimeout(() => {
					toast.dismiss(toastId);
				}, 2500);
			})
			.catch((err) => {
				toast.update(toastId, {
					autoClose: 2500,
					theme: "colored",
					type: "error",
					icon: <CloseIcon size={"1.5rem"} color="#FFF" fill="#FFF" />,
					render: err,
				});

				setIsLoadingForm(false);

				setTimeout(() => {
					toast.dismiss(toastId);
				}, 2500);
				console.log(err);
			});
	};

	return (
		<div className="contato">
			<GridContainer>
				<div className="wrapper">
					<div>
						<h1>Entrar em contato</h1>

						<div className="contacts">
							<div className="contato-single">
								<div className="icon">
									<MailFooterIcon size={"1.6rem"} />
								</div>
								<h3 className="name">E-mail</h3>
								<span className="label">ibtec@ibtec.org.br</span>
							</div>

							<div className="contato-single">
								<div className="icon">
									<PhoneFooterIcon size={"1.6rem"} />
								</div>
								<h3 className="name">Telefone</h3>
								<span className="label">51 3553.1000</span>
							</div>

							<div className="contato-single">
								<div className="icon">
									<PinFooterIcon size={"1.6rem"} />
								</div>
								<h3 className="name">Localização</h3>
								<span className="label">
									Novo Hamburgo - RS Rua Araxá, <br />
									750B. Ideal, CEP: 93334-000
								</span>
							</div>
						</div>
					</div>

					<div className="form">
						<h2>Fale com um especialista</h2>
						<p>Preencha o formulário abaixo, logo entraremos em contato com você.</p>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<fieldset disabled={isLoadingForm}>
								<div className="grid-form">
									<div className="nome">
										<CustomText control={methods.control} name="Nome" placeholder="Nome" />
									</div>
									<div className="email">
										<CustomText control={methods.control} name="Email" placeholder="E-Mail" />
									</div>
									<div className="telefone">
										<CustomPatternInput format="(##) ####-####" control={methods.control} name="Telefone" placeholder="Telefone" />
									</div>
									<div className="assunto">
										<CustomText control={methods.control} name="Assunto" placeholder="Assunto" />
									</div>
									<div className="mensagem">
										<CustomTextArea control={methods.control} name="Mensagem" placeholder="Deixe sua mensagem" />
									</div>
								</div>
								<div className="btn-enviar">
									<Button type="submit">{isLoadingForm ? "Enviando..." : "Enviar"}</Button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>

				<div className="map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.527984103262!2d-51.1423273!3d-29.7044617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951942f97ab28d67%3A0x85b3f6615481a3fc!2sR.%20Arax%C3%A1%2C%20750%20-%20Ideal%2C%20Novo%20Hamburgo%20-%20RS%2C%2093334-000!5e0!3m2!1spt-BR!2sbr!4v1698060328123!5m2!1spt-BR!2sbr"
						width="100%"
						height="580"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</GridContainer>
		</div>
	);
};

export default Contato;
