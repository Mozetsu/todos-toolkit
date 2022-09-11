import { Filter, setFilter } from "../../redux/slices/filterSlice";
import { useAppDispatch } from "../../redux/hooks";
import FilterItem from "../Atoms/FilterItem";

function Filters() {
	const dispatch = useAppDispatch();
	const filters = Object.keys(Filter);

	return (
		<ul className="flex justify-between">
			{filters.map((filter, idx) => {
				const TFilter = filter as Filter;
				return <FilterItem text={TFilter} key={idx + filter} setFilter={() => dispatch(setFilter(TFilter))} />;
			})}
		</ul>
	);
}

export default Filters;
