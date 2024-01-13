import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { ApolloServer } from "./Lib/Apollo";
import { PrimeReactProvider } from "primereact/api";

import "./main.scss";
import { UserProvider } from "./Global/Contexts/UserContext";
import "primereact/resources/themes/lara-light-cyan/theme.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserProvider>
			<PrimeReactProvider>
				<ApolloProvider client={ApolloServer}>
					<ToastContainer />
					<RouterProvider router={router} />
				</ApolloProvider>
			</PrimeReactProvider>
		</UserProvider>
	</React.StrictMode>
);
