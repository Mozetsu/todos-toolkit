import { setFilter } from "./redux/filter";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function Filters() {
	const { filter } = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	return (
		<ul style={{ padding: 0, display: "flex", gap: ".5rem", listStyle: "none" }}>
			<li
				style={{ textDecoration: filter === "ALL" ? "underline" : "none" }}
				onClick={() => dispatch(setFilter("ALL"))}
			>
				ALL
			</li>
			<li
				style={{ textDecoration: filter === "ACTIVE" ? "underline" : "none" }}
				onClick={() => dispatch(setFilter("ACTIVE"))}
			>
				ACTIVE
			</li>
			<li
				style={{ textDecoration: filter === "COMPLETED" ? "underline" : "none" }}
				onClick={() => dispatch(setFilter("COMPLETED"))}
			>
				COMPLETED
			</li>
		</ul>
	);
}

export default Filters;
