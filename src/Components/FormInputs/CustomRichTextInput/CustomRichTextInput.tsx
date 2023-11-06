import React from "react";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Form, InputGroup } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface ICustomRichTextInput<TFields extends FieldValues> {
	name: Path<TFields>;
	control: Control<TFields>;
	label?: string;
}

const CustomRichTextInput = <TFields extends FieldValues>({ name, control, label }: ICustomRichTextInput<TFields>) => {
	const toolbarOptions = [
		["bold", "italic", "underline", "strike"],
		["link"], // toggled buttons
		["blockquote", "code-block"],
		[{ list: "ordered" }, { list: "bullet" }],
		[{ script: "sub" }, { script: "super" }], // superscript/subscript
		[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ align: [] }],
	];

	return (
		<Form.Group controlId={name} className="form-group">
			<Form.Label>{label}</Form.Label>
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<InputGroup>
						<ReactQuill
							value={field.value || ""}
							onChange={field.onChange}
							modules={{
								toolbar: toolbarOptions,
							}}
						/>
					</InputGroup>
				)}
			/>
		</Form.Group>
	);
};

export default CustomRichTextInput;
