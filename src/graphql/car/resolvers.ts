import { GraphQLResolverMap } from 'apollo-graphql';
import CarContext from '@/context/carContext';

interface ResolverOptions {
  dataSources: {
    carContext: CarContext,
  }
}

const resolvers: GraphQLResolverMap<any> = {
  Query: {
    cars:
      (_: any, __: any, { dataSources }: ResolverOptions) => dataSources.carContext.getCars(),
  },
  Mutation: {
    createCar:
      (_:any, car: any, { dataSources }: ResolverOptions) => dataSources
        .carContext.createCar(car),
  },
};

export default resolvers;
