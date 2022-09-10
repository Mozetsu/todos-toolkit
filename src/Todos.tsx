import { useState } from "react";
import { toggleTodo } from "./redux/todos";
import { createTodo } from "./redux/todos";
import type { Todo } from "./redux/todos";
import type { Filter } from "./redux/filter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function Todos() {
	const [input, setInput] = useState<string>("");
	const [indexCounter, setIndexCounter] = useState<number>(0);

	// redux
	const dispatch = useAppDispatch();
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
	const { todos, filter } = useAppSelector((state) => state);

	const addTodo = () => {
		if (!input.trim().length) return;

		dispatch(createTodo({ id: indexCounter, text: input }));
		setInput("");
		setIndexCounter(indexCounter + 1);
	};

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
		<>
			<input value={input} type="text" placeholder="add todo..." onChange={(e) => handleInput(e)} />
			<button onClick={() => addTodo()}>Add</button>
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
		</>
	);
}

export default Todos;
