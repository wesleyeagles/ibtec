import classNames from "classnames";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Control, Controller } from "react-hook-form";
import { FieldValues, Path } from "react-hook-form/dist/types";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { To } from "react-router-dom";
import InvalidMessage from "../InvalidMessage/InvalidMessage";

interface IUncontrolledCustomNumberFieldProps extends Omit<NumericFormatProps, "onBlur"> {
	removeFormatFocus?: boolean;

	onBlur?: (event: React.FocusEvent<HTMLInputElement>, value: string | number | null | undefined) => void;
}

interface ICustomNumberFieldProps<TFields extends FieldValues> extends IUncontrolledCustomNumberFieldProps {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;

	tooltip?: string;
	setFormattedValue?: boolean;

	link?: To;
	canBeNull?: boolean;
}

export const UncontrolledCustomNumberInput = ({ removeFormatFocus = true, ...props }: IUncontrolledCustomNumberFieldProps) => {
	const [removeSuffixPrefix, setRemoveSuffixPrefix] = useState(!removeFormatFocus);

	return (
		<NumericFormat
			className={`form-control`}
			decimalSeparator=","
			{...props}
			thousandSeparator={removeSuffixPrefix ? "" : props.thousandSeparator ?? "."}
			suffix={removeSuffixPrefix ? undefined : props.suffix}
			prefix={removeSuffixPrefix ? undefined : props.prefix}
			fixedDecimalScale={removeSuffixPrefix ? false : props.fixedDecimalScale}
			allowLeadingZeros={props.allowLeadingZeros}
			id={props.id || props.name}
			autoFocus={props.autoFocus}
			onFocus={(e) => {
				props.onFocus?.(e);

				if (removeFormatFocus) setRemoveSuffixPrefix(true);

				setTimeout(() => {
					e.target.setSelectionRange(0, e.target.value.length);
				}, 10);
			}}
			onBlur={(e) => {
				props.onBlur?.(e, props.value);

				if (removeFormatFocus) setRemoveSuffixPrefix(false);
			}}
		/>
	);
};

const CustomNumberInput = <TFields extends FieldValues>({
	name,
	control,
	label,
	removeFormatFocus = true,
	tooltip,
	setFormattedValue,
	link,
	canBeNull = false,
	...props
}: ICustomNumberFieldProps<TFields>) => {
	const inputRef = useRef<any>();

	return (
		<>
			<Form.Group>
				{label != null && (
					<Form.Label aria-disabled={props.disabled} htmlFor={props.id || name}>
						{label}
					</Form.Label>
				)}
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, ref, value, ...field }, fieldState: { error } }) => (
						<>
							<span className="d-flex flex-nowrap w-100 align-items-stretch input-span">
								<UncontrolledCustomNumberInput
									{...field}
									{...props}
									getInputRef={(el: HTMLInputElement) => {
										inputRef.current = el;
										ref(el);
									}}
									className={classNames(
										"form-control",
										{
											"invalid-input": !!error?.message,
											"rounded-end-0": !!link,
										},
										props.className
									)}
									onValueChange={(values, sourceInfo) => {
										if (setFormattedValue) {
											if (canBeNull && values.formattedValue === "") {
												onChange(null);
											} else {
												onChange(values.formattedValue);
											}
										} else if (props.valueIsNumericString) {
											if (canBeNull && values.value === "") {
												onChange(null);
											} else {
												onChange(values.value);
											}
										} else {
											if (canBeNull && values.floatValue == null) {
												onChange(null);
											} else {
												onChange(values.floatValue ?? 0);
											}
										}

										if (props.onValueChange) props.onValueChange(values, sourceInfo);
									}}
									value={value ?? ""}
									removeFormatFocus={removeFormatFocus}
									onBlur={(e) => {
										props.onBlur?.(e, value);
									}}
								/>
							</span>
							<InvalidMessage message={error?.message} />
						</>
					)}
				/>
			</Form.Group>
		</>
	);
};

export default CustomNumberInput;
