import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Blog = () => {
	const [paragraphs, setParagraphs] = useState(["Teste", "Teste2"]);
	const [value, setValue] = useState("");

	return (
		<div className="text-white">
			<div className="">
				<ReactQuill theme="snow" value={value} onChange={setValue} />
			</div>
			{paragraphs.map((paragraph, index) => (
				<div key={index}>{paragraph}</div>
			))}
		</div>
	);
};

export default Blog;
