import { removeTodo, Todo, toggleTodo } from "../../../redux/slices/todosSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getVisibleTodos } from "./Functions";
import TodoItem from "../../Atoms/TodoItem";

function Todos() {
	const dispatch = useAppDispatch();
	const { todos, filter } = useAppSelector((state) => state);
	const appTodos: Todo[] = getVisibleTodos(todos, filter);

	return (
		<ul className="bg-base-100 p-3 rounded-box">
			{appTodos?.map((todo) => (
				<TodoItem
					key={todo.id}
					text={todo.text}
					completed={todo.completed as boolean}
					toggleTodo={() => dispatch(toggleTodo(todo))}
					removeTodo={() => dispatch(removeTodo(todo))}
				/>
			))}
		</ul>
	);
}

export default Todos;
