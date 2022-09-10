import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos";
import filterReducer from "./filter";

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
