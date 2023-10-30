import { fetchMovieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {

	const [movie, setMovie] = useState({});
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { movieId } = useParams();

	useEffect(() => {
		if (!movieId) return;
		async function getMovieDetails() {
			try {
				setError(false);
				setLoading(true);
				const results = await fetchMovieDetails(movieId);
				setMovie(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getMovieDetails();
	}, [movieId]);

	const { poster_path, title, release_date, overview, genres, vote_average } = movie;

	const posterBaseURL = `https://image.tmdb.org/t/p/w500`;

	// Сделать проверку на наличие постера и других элементов

	return (
		<>

			{loading && <Loader />}

			<button type="button">Go back</button>

			{error && <p>Something went wrong! Try again please</p>}


			{title ? <h2>{title}</h2> : <p>We don't have any title for this movie</p>}
			{release_date ? <p>{release_date}</p> : <p>We don't have any release_date for this movie</p>}
			{vote_average ? <p>{vote_average}</p> : <p>We don't have any vote_average for this movie</p>}
			{overview ? <p>{overview}</p> : <p>We don't have any overview for this movie</p>}
			{genres && <p>{genres.map(({ name }) => name)}</p>}
			{poster_path ? <img src={posterBaseURL + poster_path} alt={overview} /> :
				<img src={'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'} alt={"no poster available"} />}


			{/* <h2>{title}</h2>
			<p>{release_date}</p>
			<p>{vote_average}</p>
			<p>{overview}</p> */}
			{/* <p>{genres.map(({ name }) => name)}</p> */}



			<p>Additional information</p>

			<ul>
				<li><Link to={`cast`}>Cast</Link></li>
				<li><Link to={`reviews`}>Reviews</Link></li>
			</ul>

			<Outlet />

		</>

	);
};