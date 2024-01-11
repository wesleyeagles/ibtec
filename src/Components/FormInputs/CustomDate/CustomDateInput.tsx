import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
import DatePicker from "react-datepicker";
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDateInput.scss";

interface ICustomDatePicker<TFields extends FieldValues> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
	onChange?: (date: Date | null) => void;
	placeholder?: string;
}

const CustomDatePicker = <TFields extends FieldValues>({ name, control, label, placeholder, onChange, ...props }: ICustomDatePicker<TFields>) => {
	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange: onControllerChange, value }, fieldState }) => (
					<>
						<DatePicker
							selected={value ? new Date(value) : null}
							onChange={(date: Date | null) => {
								onControllerChange(date?.toISOString() || "");
								onChange?.(date);
							}}
							placeholderText={placeholder}
							className={`my-input ${fieldState.error ? "invalid-input" : null}`}
							dateFormat="dd/MMM/yyyy" // You can customize the date format
							locale={pt} // Defina o locale para português do Brasil
							{...props}
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

export default CustomDatePicker;
