import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4u8hxx30mta01unftbacb1e/master",
  cache: new InMemoryCache(),
});
