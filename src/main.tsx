import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routing/Router";
import { ApolloProvider } from "@apollo/client";
import { ToastContainer } from "react-toastify";
import { ApolloServer } from "./Lib/Apollo";

import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={ApolloServer}>
			<ToastContainer />
			<RouterProvider router={router} />
		</ApolloProvider>
	</React.StrictMode>
);
