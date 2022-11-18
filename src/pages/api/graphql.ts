import { createYoga, createSchema } from 'graphql-yoga';
import { resolvers } from './resolvers';
import { typeDefs } from './schemas';

const schema = createSchema({
  typeDefs,
  resolvers,
})

export default createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
})