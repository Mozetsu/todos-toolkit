import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { createTodo } from "../../../redux/slices/todosSlice";
import Input from "../../Atoms/Input";
import { KeyEvent, InputEvent } from "./Functions";

function InputBox() {
	const [input, setInput] = useState<string>("");
	const dispatch = useAppDispatch();

	const addTodo = () => {
		if (!input.trim().length) return;
		dispatch(createTodo({ id: nanoid(), text: input }));
		setInput("");
	};

	const handleKey = (e: KeyEvent) => {
		if (e.key === "Enter") addTodo();
	};

	const handleInput = (e: InputEvent) => setInput(e.target.value);

	return (
		<div className="absolute bottom-0 w-full">
			<Input value={input} placeholder="New Todo..." onChange={(e) => handleInput(e)} onKeyDown={(e) => handleKey(e)} />
		</div>
	);
}

export default InputBox;
