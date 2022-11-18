import axios from "axios";
import { Joke } from "../../../types/joke";

export const resolvers = {
  Query: {
    async getRandomJoke() {
      let response = await axios.get("https://api.chucknorris.io/jokes/random");
      return { id: response.data.id, value: response.data.value };
    },
    async searchJokes(_: any, params: { query: string }, __: any) {
      try {
        let response = await axios.get("https://api.chucknorris.io/jokes/search", {
          params: {
            query: params.query
          }
        });
        let data = response.data.result as Joke[];
        return data.map((joke) => {
          return { id: joke.id, value: joke.value }
        });
      } catch (error) {
        console.log(error);
        return [];
      }
    }
  },
};
