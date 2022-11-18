import { LoadingSpinner } from "../components/Loading";
import { Joke } from "../types/joke";

type JokesResulProps = { isLoading: boolean, jokes: Joke[] };

export default function JokesResul(props: JokesResulProps) {
    const isLoading = props.isLoading;
    const jokes = props.jokes;

    return (
        <div className="flex-1">
            {
                isLoading ? (
                    <div className="h-full flex flex-row items-center">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        {jokes.length > 0 ? <p>{jokes.length == 1 ? "Fato Encontrado: " : "Fatos Encontrados: "}</p> : null}
                        {jokes.map((joke) => <div key={joke.id} className="w-1/2 bg-gray-900 text-white rounded-xl p-2 m-2"><p className="text-justify">{joke.value}</p></div>)}
                    </div>
                )
            }
        </div>
    )
}
