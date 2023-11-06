import { useUserContext } from "../../Global/Contexts/UserContext";

const Navbar = () => {
	const { user } = useUserContext();

	return (
		<div className="navbar-painel">
			<div className="content">
				<div className="foto">
					<img src="/poze.jpg" alt="foto" />
				</div>
				<div className="nome">
					<h2>{user?.name}</h2>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
