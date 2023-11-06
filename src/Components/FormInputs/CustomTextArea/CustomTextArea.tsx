import { Form } from "react-bootstrap";
import { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
import "./CustomTextArea.scss";

interface ICustomTextInput<TFields extends FieldValues> extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, value: string) => void;
	placeholder?: string;
}

const CustomTextArea = <TFields extends FieldValues>({ name, control, label, placeholder, ...props }: ICustomTextInput<TFields>) => {
	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, ...field }, fieldState }) => (
					<>
						<textarea
							rows={4}
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

export default CustomTextArea;
