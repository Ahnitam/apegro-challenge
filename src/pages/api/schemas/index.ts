export const typeDefs = /* GraphQL */ `
  type Joke {
    id: String!
    value: String!
  }
  type Query {
    getRandomJoke: Joke
    searchJokes(query: String!): [Joke!]
  }
`