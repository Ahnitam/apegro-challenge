import Image from "next/image";
import { useState } from "react";
import Button from "../components/Button";
import Head from "../components/Head";
import Search from "../components/Search";
import { QueryRandomJoke } from "../graphql/queries/getRandomJoke";
import { QuerySearchJokes } from "../graphql/queries/searchJoke";
import { client } from "../graphql/client/graphql-client";
import { Joke } from "../types/joke";
import JokesResul from "../components/JokesResult";

const getRandomJoke = async () => {
  return await client({ query: QueryRandomJoke });
}

const searchJoke = async (q: string) => {
  return await client({ query: QuerySearchJokes, variables: { query: q } });
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [jokes, setjokes] = useState<Joke[]>([]);

  const _onSearch = async (q: string) => {
    setIsLoading(true);
    searchJoke(q || "").then((e) => {
      setIsLoading(false);
      setjokes(e.data.searchJokes || []);
    });
  };

  const _onClickRandom = async () => {
    setIsLoading(true);
    getRandomJoke().then((e) => {
      setjokes([e.data.getRandomJoke]);
      setIsLoading(false);
    });
  }

  return (
    <div className="h-screen flex flex-col items-center">
      <Head />
      <header className="p-4">
        <Image priority={true} src="/chuck_norris.png" alt="Chuck Norris" width="150" height="150" />
      </header>
      <main className="flex-1">
        <div className="h-full flex flex-col items-center">
          <Search placeholder="Digite sua pesquisa" onSearch={_onSearch} />
          <Button label="Fato Aleatório" onClick={_onClickRandom} />
          <JokesResul isLoading={isLoading} jokes={jokes} />
        </div>
      </main>
      <footer className="p-2">
        <p className="text-center text-gray-500 text-sm">Higor Pires © 2022 - Apegro Challenge </p>
      </footer>
    </div>
  )
}
