import { useSearchParams } from "react-router-dom";
import { FieldInput, SearchBtn } from "./SearchForm.styled";

export const SearchForm = () => {

	const [setParams] = useSearchParams();

	const handleSubmit = value => {
		setParams({ query: value });
	};

	return (
		<>
			<form>
				<FieldInput type="text" name="query" />
				<SearchBtn type="submit" onClick={handleSubmit}>Search</SearchBtn>
			</form>
		</>
	);
};