import Dropdown from "./Dropdown";

interface Props {
	id: string;
	text: string;
	completed: boolean;
	toggleTodo: () => void;
	removeTodo: () => void;
}

function TodoItem({ id, text, completed, toggleTodo, removeTodo }: Props) {
	return (
		<li className="flex items-center gap-x-4 w-full relative my-2 p-2 border-b-2 border-b-gray-100">
			<input
				id={id}
				type="radio"
				className="radio radio-sm checked:bg-gray-400"
				checked={completed}
			/>
			<label
				htmlFor={id}
				className={`flex-1 font-medium text-gray-500 ${
					completed && "line-through text-gray-300"
				}`}
				onClick={() => toggleTodo()}
			>
				{text}
			</label>
			<Dropdown removeTodo={() => removeTodo()} />
		</li>
	);
}

export default TodoItem;
