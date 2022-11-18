type Props = { label: string, onClick: () => void };

export default function Button(props: Props) {
    return (
        <button className="bg-green-500 hover:bg-green-900 p-2.5 my-2 mr-2 rounded-xl" onClick={props.onClick}>
            <p className="truncate text-white">{props.label}</p>
        </button>
    )
}