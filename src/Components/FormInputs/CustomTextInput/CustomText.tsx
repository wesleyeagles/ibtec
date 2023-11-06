import { Button, Form, InputGroup } from "react-bootstrap";
import { InputHTMLAttributes, useState } from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import "./CustomText.scss";

interface ICustomTextInput<TFields extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
	placeholder?: string;
}

const CustomText = <TFields extends FieldValues>({ name, control, label, placeholder, ...props }: ICustomTextInput<TFields>) => {
	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, ...field }, fieldState }) => (
					<>
						<input
							id={props.id || name}
							{...field}
							{...props}
							placeholder={placeholder}
							onChange={(e) => {
								onChange(e.target.value);
								props.onChange?.(e, e.target.value);
							}}
							className={`my-input ${fieldState.error ? "invalid-input" : null}`}
						/>
						<Form.Control.Feedback type="invalid" className="my-error">
							{fieldState.error?.message?.toString()}
						</Form.Control.Feedback>
					</>
				)}
			/>
		</Form.Group>
	);
};

export default CustomText;

export const CustomControlledPasswordInput = <TFields extends FieldValues>({ name, control, label, ...props }: ICustomTextInput<TFields>) => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Form.Group controlId={name} className="form-group custom-text-input">
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, ...field }, fieldState }) => (
					<>
						<InputGroup className={`${isFocused || inputValue ? "input-group-focused" : "input-group"} mb-1`}>
							<input
								id={props.id || name}
								{...field}
								{...props}
								onChange={(e) => {
									onChange(e.target.value);
									setInputValue(e.target.value); // Atualiza o estado inputValue
									props.onChange?.(e, e.target.value);
								}}
								type={`${showPassword ? "text" : "password"}`}
								onFocus={() => setIsFocused(true)}
								onBlur={() => setIsFocused(false)}
								className={`my-input password ${fieldState.error ? "invalid-input" : null}`}
							/>
							<InputGroup className="btn-toggle-password">
								<Button variant="outline-secondary" onClick={() => setShowPassword(!showPassword)}>
									{showPassword ? <RiEyeFill color="#29777b" size={"1.5rem"} /> : <RiEyeCloseFill color="#29777b" size={"1.5rem"} />}
								</Button>
							</InputGroup>
							<Form.Label className={`placeholder-label-password ${isFocused || inputValue ? "label-focus-password" : ""}`}>{label}</Form.Label>
						</InputGroup>
						<Form.Control.Feedback type="invalid" className="my-error">
							{fieldState.error?.message?.toString()}
						</Form.Control.Feedback>
					</>
				)}
			/>
		</Form.Group>
	);
};
