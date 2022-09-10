import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = "ALL" | "ACTIVE" | "COMPLETED";

const initialState: Filter = "ALL";

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
