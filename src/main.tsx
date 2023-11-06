import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { ApolloServer } from "./Lib/Apollo";

import "./main.scss";
import { UserProvider } from "./Global/Contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<UserProvider>
			<ApolloProvider client={ApolloServer}>
				<ToastContainer />
				<RouterProvider router={router} />
			</ApolloProvider>
		</UserProvider>
	</React.StrictMode>
);
