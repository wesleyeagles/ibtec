import { useUserContext } from "../../Global/Contexts/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ setIsMenuOpen, isMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>; isMenuOpen: boolean }) => {
	const { user } = useUserContext();

	return (
		<div className="navbar-painel">
			{user ? (
				<div className="content">
					<div>
						<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="drawer-menu">
							<GiHamburgerMenu size={"1.5rem"} color="#FFF" />
						</button>
					</div>
					<div className="d-flex align-items-center">
						<div className="foto">
							<img src={`https://dev.ibtec.org.br/dev/blog/${user.user.image}`} alt="foto" />
						</div>
						<div className="nome">
							<h2>{user?.user.name}</h2>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Navbar;
