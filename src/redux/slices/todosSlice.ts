import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import mockData from "../../mocks/todos";

export type Todo = {
	id: string;
	text: string;
	completed?: boolean;
};

// const initialState: Todo[] = [];
const initialState: Todo[] = mockData;

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		createTodo: (state, action: PayloadAction<Todo>) => {
			state.push({ ...action.payload, completed: false });
		},
		toggleTodo: (state, action: PayloadAction<Todo>) => {
			const { id } = action.payload;
			state.map((todo) => {
				todo.id === id ? (todo.completed = !todo.completed) : todo;
			});
		},
		removeTodo: (state, action: PayloadAction<Todo>) => {
			const { id } = action.payload;
			const index = state.findIndex((todo) => todo.id === id);
			state.splice(index, 1);
		},
	},
});

const { actions, reducer } = todosSlice;
export const { createTodo, toggleTodo, removeTodo } = actions;
export default reducer;
