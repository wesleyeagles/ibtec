import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { InputHTMLAttributes } from "react";
import { Form } from "react-bootstrap";

interface ICustomFileInput<TFields extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: File | null) => void;
	placeholder?: string;
}

const CustomFileInput = <TFields extends FieldValues>({ name, control, label, ...props }: ICustomFileInput<TFields>) => {
	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field, fieldState }) => (
					<>
						<input
							id={props.id || name}
							type="file"
							placeholder={props.placeholder}
							onChange={(e) => {
								const file = e.target.files ? e.target.files[0] : null;
								field.onChange(file); // Atualize o campo 'imagem' com o valor 'file'
								props.onChange?.(e, file);
							}}
							className={`my-input ${fieldState.error ? "invalid-input" : ""}`}
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

export default CustomFileInput;
