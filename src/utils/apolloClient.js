import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';

const PIPEFY_URL = 'https://api.pipefy.com/graphql';
const _AUTH = `eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE2ODYzMTYzMjIsImp0aSI6ImQyNTU2Yjk5LTZiNzUtNGJjMS1iNzczLWQ1OTg1NGFlODY4ZiIsInN1YiI6MzAyNTYwMTU0LCJ1c2VyIjp7ImlkIjozMDI1NjAxNTQsImVtYWlsIjoicmFjY2hlbHZlbGFzY29AZ21haWwuY29tIiwiYXBwbGljYXRpb24iOjMwMDI1NDU5OSwic2NvcGVzIjpbXX0sImludGVyZmFjZV91dWlkIjpudWxsfQ.BH-kl1ZW3XmcZQPiT-JlNQ8Ll5WFTDc7qUuzKdXClyQaIGjv-e2ipnvLsz-Egc3DnGcuTHjn6ztg56DjsopzaA`;

const httpLink = new HttpLink({ uri: PIPEFY_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
  // Adicione o token de autenticação no cabeçalho da solicitação
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${_AUTH}`,
    },
  }));

  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
});