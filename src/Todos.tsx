import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { toggleTodo } from "./redux/todos";
import type { Todo } from "./redux/todos";
import type { Filter } from "./redux/filter";

function Todos() {
	const { todos, filter } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const getVisibleTodos = (todos: Todo[], filter: Filter) => {
		switch (filter) {
			case "ALL":
				return todos;
			case "ACTIVE":
				return todos.filter((todo) => !todo.completed);
			case "COMPLETED":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	const visibleTodos = getVisibleTodos(todos, filter);

	return (
		<ul>
			{visibleTodos?.map((todo) => (
				<li
					style={{
						textDecoration: todo.completed ? "line-through" : "initial",
					}}
					onClick={() => dispatch(toggleTodo(todo))}
					key={todo.id}
				>
					{todo.text}
				</li>
			))}
		</ul>
	);
}

export default Todos;
