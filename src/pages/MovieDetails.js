import { fetchMovieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

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

	const location = useLocation();
	const backLink = location.state?.from ?? '/';

	const { poster_path, title, release_date, overview, genres, vote_average } = movie;

	const posterBaseURL = `https://image.tmdb.org/t/p/w500`;

	return (
		<>

			{loading && <Loader />}
			<Link to={backLink} >Go back</Link >

			{error && <p>Something went wrong! Try again please</p>}

			{Object.keys(movie).length !== 0 && title ?
				<h2>{title}</h2> :
				Object.keys(movie).length !== 0 &&
				<p>We don't have any title for this movie</p>}

			{Object.keys(movie).length !== 0 && release_date ?
				<p>{release_date}</p> :
				Object.keys(movie).length !== 0 &&
				<p>We don't have any release_date for this movie</p>}

			{Object.keys(movie).length !== 0 && vote_average ?
				<p>{vote_average}</p> :
				Object.keys(movie).length !== 0 &&
				<p>We don't have any vote_average for this movie</p>}

			{Object.keys(movie).length !== 0 && overview ?
				<p>{overview}</p> :
				Object.keys(movie).length !== 0 &&
				<p>We don't have any overview for this movie</p>}

			{Object.keys(movie).length !== 0 && genres ?
				<p>{genres.map(({ name }) => name)}</p> :
				Object.keys(movie).length !== 0 &&
				<p>We don't have any genres for this movie</p>}

			{Object.keys(movie).length !== 0 && poster_path ?
				<img src={posterBaseURL + poster_path} alt={overview} /> :
				Object.keys(movie).length !== 0 &&
				<img
					src={'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
					alt={"no poster available"}
				/>
			}

			{Object.keys(movie).length !== 0 && <p>Additional information</p>}

			{Object.keys(movie).length !== 0 &&
				<ul>
					<li><Link to={`cast`} state={{ from: location }}>Cast</Link></li>
					<li><Link to={`reviews`} state={{ from: location }}>Reviews</Link></li>
				</ul>}

			<Outlet />

		</>
	);
};