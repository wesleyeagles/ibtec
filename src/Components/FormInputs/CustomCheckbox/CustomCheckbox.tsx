import { Form } from "react-bootstrap";
import { InputHTMLAttributes, PropsWithChildren } from "react";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
import "./checkbox.scss";

interface ICustomCheckboxProps<TFields extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>, "type">, PropsWithChildren {
	name: Path<TFields>;
	control: Control<TFields>;
	checkboxValue?: {
		checked?: any;
		unchecked?: any;
	};
	label?: string;
	placeholder?: string;
}

const CustomCheckbox = <TFields extends FieldValues>({ name, control, label, checkboxValue, placeholder, ...props }: ICustomCheckboxProps<TFields>) => {
	return (
		<Form.Group>
			<Controller
				name={name}
				control={control}
				render={({ field: { name, onChange, ...field }, fieldState }) => (
					<>
						<div className="checkbox-wrapper">
							<Form.Label htmlFor={name}>{label}</Form.Label>
							<Form.Check
								{...props}
								{...field}
								onChange={(e) => {
									if (e.target.checked) onChange(checkboxValue?.checked || true);
									else onChange(checkboxValue?.unchecked || false);

									props.onChange?.(e);
								}}
								id={props.id || name}
								type="switch"
								color="success"
								placeholder={placeholder}
								isInvalid={!!fieldState.error}
								checked={field.value === (checkboxValue?.checked || true)}
							/>
						</div>
						<Form.Control.Feedback type="invalid" className="my-error">
							{fieldState.error?.message?.toString()}
						</Form.Control.Feedback>
					</>
				)}
			/>
		</Form.Group>
	);
};

export default CustomCheckbox;
