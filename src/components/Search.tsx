import { BsSearch } from 'react-icons/bs'

type Props = { onSearch: (search: string) => void, placeholder: string }

export default function Search(props: Props) {
    return (
        <div className="w-96 flex flex-row items-center bg-gray-900 rounded-xl">
            <form className='w-full flex flex-row items-center' onSubmit={(e) => {
                e.preventDefault();
                props.onSearch((e.target as HTMLFormElement).querySelector("input")?.value || "");
            }}>
                <input className="bg-transparent flex-1 outline-0 rounded-3xl px-2" placeholder={props.placeholder} type="text" />
                <button className="bg-green-500 hover:bg-green-900 text-white font-bold p-2.5 my-2 mr-2 rounded-full">
                    <BsSearch />
                </button>
            </form>

        </div>
    )
}