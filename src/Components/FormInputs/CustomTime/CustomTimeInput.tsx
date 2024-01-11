import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { Control, FieldValues, Path } from "react-hook-form/dist/types";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "./CustomTimeInput.scss";
import { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";

// Registre o locale para português do Brasil
registerLocale("pt-BR", ptBR);

interface ICustomTimePicker<TFields extends FieldValues> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
	onChange?: (date: Date | null) => void;
	placeholder?: string;
}

const CustomTimePicker = <TFields extends FieldValues>({ name, control, label, placeholder, onChange, ...props }: ICustomTimePicker<TFields>) => {
	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange: onControllerChange, value }, fieldState }) => (
					<>
						<TimePicker
							onChange={(newTime: string | Date | null) => {
								if (typeof newTime === "string") {
									onControllerChange(newTime);
									onChange?.(new Date(`01/01/2021 ${newTime}`));
								} else if (newTime instanceof Date) {
									const formattedTime = newTime.toTimeString().slice(0, 8); // Pega apenas a parte da hora (HH:mm:ss)
									onControllerChange(formattedTime);
									onChange?.(newTime);
								}
							}}
							value={value ? value.split(" ")[1] : "00:00:00"}
							disableClock={true}
							clearIcon={null}
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

export default CustomTimePicker;
