export const QuerySearchJokes = `
  query SearchJokes($query: String!) {
    searchJokes(query: $query) {
      id
      value
    }
  }
`;