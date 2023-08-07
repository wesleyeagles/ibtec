import { ApolloClient, InMemoryCache } from "@apollo/client";

export const ApolloServer = new ApolloClient({
	uri: import.meta.env.VITE_HYGRAPH_URI,
	headers: {
		Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
	},

	cache: new InMemoryCache(),
});
