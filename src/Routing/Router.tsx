import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main.";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "inicio",
				element: <Home />,
			},
		],
	},
]);
