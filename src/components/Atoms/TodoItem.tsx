import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

interface Props {
	text: string;
	completed: boolean;
	toggleTodo: () => void;
	removeTodo: () => void;
}

function TodoItem({ text, completed, toggleTodo, removeTodo }: Props) {
	return (
		<li className="flex items-center gap-x-4 w-full relative my-2 p-2 border-b-2 border-b-gray-100">
			<input
				type="radio"
				className="radio radio-sm checked:bg-gray-400"
				checked={completed}
			/>
			<p
				className={`flex-1 font-medium text-gray-500 ${
					completed && "line-through text-gray-300"
				}`}
				onClick={() => toggleTodo()}
			>
				{text}
			</p>
			<EllipsisVerticalIcon opacity={".4"} width={"1.3rem"} />
		</li>
	);
}

export default TodoItem;
