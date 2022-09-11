import { Filter } from "../../../redux/slices/filterSlice";
import { Todo } from "../../../redux/slices/todosSlice";

export const getVisibleTodos = (todos: Todo[], filter: Filter) => {
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
