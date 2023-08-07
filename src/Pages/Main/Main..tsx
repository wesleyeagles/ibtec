import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// Mutations

const Main = () => {
	return (
		<div className="container-wrapper">
			<ToastContainer
				className={"react-toastify"}
				style={{
					top: "80px",
				}}
			/>
			<div className="main">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Main;
