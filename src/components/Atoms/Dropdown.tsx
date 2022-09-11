import { EllipsisVerticalIcon, TrashIcon } from "@heroicons/react/24/solid";

function Dropdown() {
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-xs">
				<EllipsisVerticalIcon width="1rem" />
			</label>
			<ul
				tabIndex={0}
				className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
			>
				<li>
					<span>Delete</span>
				</li>
			</ul>
		</div>
	);
}

export default Dropdown;
