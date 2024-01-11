import { useUserContext } from "../../Global/Contexts/UserContext";

const Navbar = () => {
	const { user } = useUserContext();

	return (
		<div className="navbar-painel">
			{user ? (
				<div className="content">
					<div className="foto">
						<img src={`https://dev.ibtec.org.br/dev/blog/${user.user.image}`} alt="foto" />
					</div>
					<div className="nome">
						<h2>{user?.user.name}</h2>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navbar;
