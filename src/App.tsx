import { useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { createTodo } from "./redux/todos";
import Filters from "./Filters";
import Todos from "./Todos";

function App() {
	const [input, setInput] = useState<string>("");
	const [indexCounter, setIndexCounter] = useState<number>(0);

	// redux
	const dispatch = useAppDispatch();

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

	const addTodo = () => {
		if (!input.trim().length) return;

		dispatch(createTodo({ id: indexCounter, text: input }));
		setInput("");
		setIndexCounter(indexCounter + 1);
	};

	return (
		<div>
			<input value={input} type="text" placeholder="add todo..." onChange={(e) => handleInput(e)} />
			<button onClick={() => addTodo()}>Add</button>
			<Todos />
			<Filters />
		</div>
	);
}

export default App;
