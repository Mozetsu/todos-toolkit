import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
	id: number;
	text: string;
	completed?: boolean;
};

const initialState: Todo[] = [];

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		createTodo: (state, action: PayloadAction<Todo>) => {
			state.push({ ...action.payload, completed: false });
		},
		toggleTodo: (state, action: PayloadAction<Todo>) => {
			const { id } = action.payload;
			state[id].completed = !state[id].completed;
		},
	},
});

const { actions, reducer } = todosSlice;
export const { createTodo, toggleTodo } = actions;
export default reducer;
