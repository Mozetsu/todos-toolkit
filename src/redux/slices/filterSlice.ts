import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Filter {
	ALL = "ALL",
	ACTIVE = "ACTIVE",
	COMPLETED = "COMPLETED",
}

const initialState: Filter = Filter.ALL;

const filterSlice = createSlice({
	name: "filters",
	initialState: initialState as Filter,
	reducers: {
		setFilter: (state, action: PayloadAction<Filter>) => {
			return (state = action.payload);
		},
	},
});

const { actions, reducer } = filterSlice;
export const { setFilter } = actions;
export default reducer;
