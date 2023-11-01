import { fetchMovieByQuery } from "api";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchForm } from "components/SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



export default function Movies() {

	const [movies, setMovie] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get('query');

	useEffect(() => {
		if (!searchQuery) return;
		async function getMovieByQuery() {
			try {
				setError(false);
				setLoading(true);
				const { results } = await fetchMovieByQuery(searchQuery);
				setMovie(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getMovieByQuery();
	}, [searchQuery]);

	return (
		<div>
			{error && <p>Something went wrong! Try again please</p>}
			{loading && <Loader />}
			<SearchForm />
			{movies.length > 0 && <MoviesList movies={movies} />}
		</div>
	);
};