interface Props {
	removeTodo: () => void;
}

function Dropdown({ removeTodo }: Props) {
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-circle text-gray-400 hover:bg-opacity-5 btn-ghost btn-sm">
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
						fill="currentColor"
					/>
					<path
						d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
						fill="currentColor"
					/>
					<path
						d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
						fill="currentColor"
					/>
				</svg>
			</label>
			<div
				tabIndex={0}
				className="card p-1 mt-1 text-gray-500 dropdown-content shadow bg-base-100 rounded w-32"
			>
				<button
					onClick={() => removeTodo()}
					className="btn btn-sm btn-ghost hover:bg-opacity-5 rounded flex items-center justify-start"
				>
					<label>
						<svg
							className="relative -bottom-[1px]"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M17 5V4C17 2.89543 16.1046 2 15 2H9C7.89543 2 7 2.89543 7 4V5H4C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H5V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H17ZM15 4H9V5H15V4ZM17 7H7V18C7 18.5523 7.44772 19 8 19H16C16.5523 19 17 18.5523 17 18V7Z"
								fill="currentColor"
							/>
							<path d="M9 9H11V17H9V9Z" fill="currentColor" />
							<path d="M13 9H15V17H13V9Z" fill="currentColor" />
						</svg>
					</label>
					<span className="ml-2">Delete</span>
				</button>
			</div>
		</div>
	);
}

export default Dropdown;
