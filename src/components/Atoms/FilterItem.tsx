import { useAppSelector } from "../../redux/hooks";

interface Props {
	text: string;
	setFilter: () => void;
}

function FilterItem({ text, setFilter }: Props) {
	const { filter } = useAppSelector((state) => state);
	return (
		<li
			className={`border-2 border-indigo-100 rounded-md text-sm ${filter === text && "font-bold bg-indigo-300 text-white"}`}
			onClick={() => setFilter()}
		>
			{text}
		</li>
	);
}

export default FilterItem;
