import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import CarContext from '@/context/carContext';
import carModule from './car';

/**
 * Creates Apollo server
 */
const schema = buildFederatedSchema([
  carModule,
]);

const apolloServer = async () => new ApolloServer({
  schema,
  dataSources: () => ({
    carContext: new CarContext(),
  }),
  introspection: true,
  playground: true,
});

export default apolloServer;
