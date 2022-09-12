import { useAppSelector } from "../../redux/hooks";

interface Props {
	text: string;
	setFilter: () => void;
}

function FilterItem({ text, setFilter }: Props) {
	const { filter } = useAppSelector((state) => state);
	return (
		<li
			className={`btn btn-ghost rounded flex items-center justify-start ${
				filter === text && "btn-success"
			}`}
			onClick={() => setFilter()}
		>
			{text}
		</li>
	);
}

export default FilterItem;
