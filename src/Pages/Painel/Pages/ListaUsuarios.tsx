import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal, Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { TbTrashXFilled } from "react-icons/tb";
import CustomText from "../../../Components/FormInputs/CustomTextInput/CustomText";
import usePesquisaNoticiaForm from "../Hooks/usePesquisaNoticiaForm";
import { useUserContext } from "../../../Global/Contexts/UserContext";
import { useNavigate } from "react-router-dom";

const ListaUsuarios = () => {
	const [data, setData] = useState<any[]>();

	const { methods } = usePesquisaNoticiaForm();

	const [isDeleting, setIsDeleting] = useState(false);

	const [show, setShow] = useState(false);

	const navigate = useNavigate();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [idDelete, setIdDelete] = useState<number | undefined>();

	const { user } = useUserContext();

	useEffect(() => {
		const role = user?.user.role;

		if (role !== "admin") {
			navigate("/painel-administrativo/dashboard");

			toast.warning("Usuário não tem permissões para acessar essa página", {
				theme: "colored",
			});
		}
	}, [user]);

	const fetchData = async () => {
		try {
			const response = await axios.get("https://backend-production-9a06.up.railway.app/api/user/todos-usuarios");

			if (!response.data) return;

			setData(response.data.users);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = async (usuarioId: number | undefined) => {
		setIsDeleting(true);
		const toastId = toast("Deletando usuário, por favor aguarde...", {
			isLoading: true,
			autoClose: false,
			theme: "colored",
			type: "default",
		});
		try {
			// Faça a solicitação de exclusão para o servidor
			await axios.delete(`https://backend-production-9a06.up.railway.app/api/user/deletar/${usuarioId}`);

			// Atualize os dados após a exclusão
			// Você pode recarregar os dados da API ou remover a linha da tabela
			setIsDeleting(false);
			toast.update(toastId, {
				autoClose: 3000,
				theme: "colored",
				render: "Usuário deletado com sucesso!",
				isLoading: false,
				type: "success",
			});
			fetchData();

			setTimeout(() => {
				window.location.reload();
			}, 500);

			handleClose();

			setIdDelete(undefined);
		} catch (error) {
			setIsDeleting(false);
			toast.update(toastId, {
				autoClose: 3000,
				theme: "colored",
				isLoading: false,
				render: "Erro ao deletar usuário",
				type: "error",
			});

			handleClose();
			setIdDelete(undefined);
		}
	};

	const columns = [
		{
			name: "Id",
			selector: (row: any) => row["id"],
			width: "6%",
			minWidth: "2rem",
			sortable: true,
		},
		{
			name: "Nome",
			selector: (row: any) => row["name"],
			sort: true,
			width: "30%",
			sortable: true,
		},
		{
			name: "Email",
			selector: (row: any) => row["email"],
			sort: true,
			width: "auto",
			sortable: true,
		},
		{
			name: "Cargo",
			selector: (row: any) => row.role.toUpperCase(),
			sort: true,
			width: "16%",
			sortable: true,
		},
		{
			name: "Ações",
			cell: (row: any) => (
				<div className="d-flex gap-2">
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

	const filterData = () => {
		const pesquisaText = methods.watch("pesquisa");
		if (!pesquisaText) return data;
		const filteredData = data?.filter((pesquisa) => pesquisa.email.toLocaleLowerCase().includes(pesquisaText.toLocaleLowerCase()));

		return pesquisaText ? filteredData : data;
	};

	return (
		<>
			<div className="listagem-noticias">
				<h2>Listagem de Usuários</h2>
				<div className="d-flex gap-3 pesquisa">
					<CustomText placeholder="Pesquisa por email" control={methods.control} name="pesquisa" />
				</div>
				{data ? (
					<div>
						<DataTable
							responsive
							data={filterData()}
							columns={columns}
							noDataComponent={
								<div className="py-5">
									<h5 className="m-0">Nenhum usuário encontrado</h5>
								</div>
							}
							striped
							pagination
							paginationComponentOptions={{ rowsPerPageText: "Linhas por página" }}
							paginationRowsPerPageOptions={[10]}
							highlightOnHover
						/>
					</div>
				) : (
					<div className="d-flex flex-column align-items-center align-itens-center mt-5 pt-5 w-100 gap-3">
						<Spinner variant="dark" />
						Carregando usuários, aguarde...
					</div>
				)}
			</div>
			<Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={!isDeleting}>
				<fieldset disabled={isDeleting}>
					<Modal.Body
						style={{
							paddingBlock: "3rem",
						}}
					>
						<h2 className="text-center">Deseja realmente deletar esse usuário?</h2>
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

export default ListaUsuarios;
