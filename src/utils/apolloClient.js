import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://api.pipefy.com/graphql",
    cache: new InMemoryCache(),
});
