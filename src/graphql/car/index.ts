import { gql } from 'apollo-server-express';
import resolvers from './resolvers';
import typeDefs from './schema.graphql';

const carModule = {
  typeDefs: gql(`${typeDefs}`),
  resolvers,
};

export default carModule;
