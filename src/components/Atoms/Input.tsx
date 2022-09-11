import { InputEvent, KeyEvent } from "../Molecules/TextBox/Functions";

interface Props {
	value: string;
	placeholder: string;
	onChange: (e: InputEvent) => void;
	onKeyDown: (e: KeyEvent) => void;
}

function Input({ value, placeholder, onChange, onKeyDown }: Props) {
	return (
		<input
			type="text"
			className="input shadow-sm w-full rounded-md font-medium transition-none text-gray-500 placeholder:text-gray-400 focus:outline-none ring-2 ring-gray-200 focus:ring-gray-400"
			value={value}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
			onKeyDown={(e) => onKeyDown(e)}
		/>
	);
}

export default Input;
