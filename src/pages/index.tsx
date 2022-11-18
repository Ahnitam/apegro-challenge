import { client } from "../graphql/client/graphql-client";
import { QueryRandomJoke } from "../graphql/queries/getRandomJoke";
import { QuerySearchJokes } from "../graphql/queries/searchJoke";

const getRandomJoke = async () => {
  return await client({ query: QueryRandomJoke });
}

const searchJoke = async (q: string) => {
  return await client({ query: QuerySearchJokes, variables: { query: q } });
}

export default function Home() {
  return (
    <div >
      Hello World!
    </div>
  )
}
