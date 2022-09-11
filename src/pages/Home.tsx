import Todos from "../components/Molecules/Todos/Todos";
import Filters from "../components/Molecules/Filters";
import TextBox from "../components/Molecules/TextBox/TextBox";

function Home() {
	return (
		<main className="h-screen container mx-auto p-5 bg-slate-50 bg-opacity-90">
			<div className="h-full flex flex-col relative">
				<Todos />
				<Filters />
				<TextBox />
			</div>
		</main>
	);
}

export default Home;
