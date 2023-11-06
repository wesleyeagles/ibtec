import Modal from "react-bootstrap/Modal";
import { useState } from "react";

interface IListaImagem {
	src: string;
}

const ListaImagem = ({ src }: IListaImagem) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div role="button" className="lista-imagem" onClick={handleShow}>
				<img src={`https://dev.ibtec.org.br/dev/blog/${src}`} />
			</div>

			<Modal size="lg" show={show} onHide={handleClose} centered>
				<Modal.Body
					style={{
						backgroundImage: `url("https://dev.ibtec.org.br/dev/blog/${src}")`,
						backgroundSize: "cover",
						backgroundPosition: "center center",
						height: "400px",
					}}
				></Modal.Body>
			</Modal>
		</>
	);
};

export default ListaImagem;
