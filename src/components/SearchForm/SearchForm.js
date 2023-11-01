import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {

	const [setParams] = useSearchParams();

	const handleSubmit = value => {
		setParams({ query: value });
	};

	return (
		<>
			<form>
				<input type="text" name="query" />
				<button type="submit" onClick={handleSubmit}>Search</button>
			</form>
		</>
	);
};