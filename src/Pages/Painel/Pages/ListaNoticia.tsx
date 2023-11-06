import axios from "axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import DataTable from "react-data-table-component";
import ptBR from "date-fns/locale/pt-BR";
import ListaImagem from "./Components/ListaImagem";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import { TbTrashXFilled } from "react-icons/tb";
import { MdModeEditOutline } from "react-icons/md";

interface Post {
	id: number;
	slug: string;
	titulo: string;
	conteudo: string;
	imagem: string;
	createdAt: string;
	updatedAt: string;
}

const ListaNoticia = () => {
	const [data, setData] = useState<Post[]>();

	const [isDeleting, setIsDeleting] = useState(false);

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [idDelete, setIdDelete] = useState<number | undefined>();

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/posts/ultimos-posts");

			if (!response.data) return;

			setData(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (postId: number | undefined) => {
		setIsDeleting(true);
		const toastId = toast("Deletando notícia, por favor aguarde...", {
			isLoading: true,
			autoClose: false,
			theme: "colored",
			type: "default",
		});
		try {
			// Faça a solicitação de exclusão para o servidor
			await axios.delete(`http://localhost:3000/api/posts/deletar/${postId}`);

			// Atualize os dados após a exclusão
			// Você pode recarregar os dados da API ou remover a linha da tabela
			setIsDeleting(false);
			toast.update(toastId, {
				autoClose: 3000,
				theme: "colored",
				render: "Notícia deletada com sucesso!",
				isLoading: false,
				type: "success",
			});
			fetchData();

			handleClose();

			setIdDelete(undefined);
		} catch (error) {
			setIsDeleting(false);
			toast.update(toastId, {
				autoClose: 3000,
				theme: "colored",
				isLoading: false,
				render: "Erro ao deletar notícia",
				type: "error",
			});

			handleClose();
			setIdDelete(undefined);
		}
	};

	const columns = [
		{
			name: "Código",
			selector: (row: any) => row["id"],
			width: "6%",
			sortable: true,
		},
		{
			name: "Thumb",
			selector: (row: any) => <ListaImagem src={row.imagem} />,
			sort: true,
			width: "7%",
			sortable: true,
		},
		{
			name: "Titulo",
			selector: (row: any) => row["titulo"],
			sort: true,
			width: "auto",
			sortable: true,
		},
		{
			name: "Cadastrado em",
			selector: (row: any) => {
				return format(new Date(row.createdAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
			},
			sort: true,
			width: "14%",
			sortable: true,
		},
		{
			name: "Atualizado em",
			selector: (row: any) => {
				return format(new Date(row.updatedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
			},
			sort: true,
			width: "14%",
			sortable: true,
		},
		{
			name: "Ações",
			cell: (row: any) => (
				<div className="d-flex gap-2">
					<MdModeEditOutline
						color="green"
						size={"1.5rem"}
						role="button"
						onClick={() => {
							setIdDelete(row.id);
							handleShow();
						}}
					/>
					<TbTrashXFilled
						color="red"
						size={"1.5rem"}
						role="button"
						onClick={() => {
							setIdDelete(row.id);
							handleShow();
						}}
					/>
				</div>
			),
			allowOverflow: true,
			button: true,
			width: "10%",
		},
	];

	return (
		<>
			<div className="listagem-noticias">
				<h2>Listagem de Notícias</h2>
				{data ? (
					<div>
						<DataTable
							responsive
							data={data}
							columns={columns}
							striped
							pagination
							paginationComponentOptions={{ rowsPerPageText: "Linhas por página" }}
							paginationRowsPerPageOptions={[10]}
							highlightOnHover
						/>
					</div>
				) : null}
			</div>
			<Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={!isDeleting}>
				<fieldset disabled={isDeleting}>
					<Modal.Body
						style={{
							paddingBlock: "3rem",
						}}
					>
						<h2 className="text-center">Deseja realmente deletar essa notícia?</h2>
						<div className="btns-fire">
							<Button size="lg" variant="success" className="btn-sim" onClick={() => handleDelete(idDelete)}>
								Sim
							</Button>
							<Button
								size="lg"
								variant="danger"
								className="btn-não"
								onClick={() => {
									setIdDelete(undefined);
									handleClose();
								}}
							>
								Não
							</Button>
						</div>
					</Modal.Body>
				</fieldset>
			</Modal>
		</>
	);
};

export default ListaNoticia;
