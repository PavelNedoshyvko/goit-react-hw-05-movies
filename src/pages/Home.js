import { fetchAllMovies } from "api";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react";
import { Title } from "./Home.styled";


export default function Home() {

	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getAllMovies() {
			try {
				setError(false);
				setLoading(true);
				const { results } = await fetchAllMovies();
				setMovies(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getAllMovies();
	}, []);

	return (
		<>
			{error && <p>Something went wrong! Try again</p>}
			{loading && <Loader />}
			<Title>Trending today</Title>
			{movies.length > 0 && <MoviesList movies={movies} />}
		</>
	);
};