import { Form } from "react-bootstrap";
import { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
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
