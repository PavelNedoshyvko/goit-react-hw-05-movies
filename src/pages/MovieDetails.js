import { fetchMovieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AddInfo, AddInfoLink, AddInfoWrap, BackLink, GenresText, GenresTitle, MovieTitle, MovieWrap, OverviewText, OverviewTitle, UserScore } from "./MovieDetails.styled";

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
	const backLinkRef = useRef(location.state?.from ?? '/');

	const { poster_path, title, release_date, overview, genres, vote_average } = movie;

	const year = new Date(release_date).getFullYear();

	const userScore = Math.round(vote_average * 10) + '%';

	const posterBaseURL = `https://image.tmdb.org/t/p/w400`;

	return (
		<>

			{loading && <Loader />}

			<BackLink to={backLinkRef.current}><BiArrowBack /> Go back</BackLink >

			{error && <p>Something went wrong! Try again please</p>}

			<MovieWrap>
				{Object.keys(movie).length !== 0 && poster_path ?
					<img src={posterBaseURL + poster_path} alt={overview} /> :
					Object.keys(movie).length !== 0 &&
					<img
						src={'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
						alt={"no poster available"}
					/>
				}

				<div>
					{Object.keys(movie).length !== 0 && title ?
						<MovieTitle>{title}
							({Object.keys(movie).length !== 0 && release_date ?
								year :
								Object.keys(movie).length !== 0 &&
								<p>We don't have any release_date for this movie</p>})</MovieTitle> :
						Object.keys(movie).length !== 0 &&
						<p>We don't have any title for this movie</p>}


					{Object.keys(movie).length !== 0 && vote_average ?
						<UserScore>User Score: {userScore}</UserScore> :
						Object.keys(movie).length !== 0 &&
						<p>We don't have any vote_average for this movie</p>}


					{Object.keys(movie).length !== 0 && overview ?
						<>
							<OverviewTitle>Overview</OverviewTitle>
							<OverviewText>{overview}</OverviewText>
						</> :
						Object.keys(movie).length !== 0 &&
						<p>We don't have any overview for this movie</p>}


					{Object.keys(movie).length !== 0 && genres ?
						<>
							<GenresTitle>Genres</GenresTitle>
							{genres.map(({ id, name }) => <GenresText key={id}>{name} </GenresText>)}
						</>
						:
						Object.keys(movie).length !== 0 &&
						<p>We don't have any genres for this movie</p>}
				</div>
			</MovieWrap>

			<AddInfoWrap>
				{Object.keys(movie).length !== 0 && <AddInfo>Additional information:</AddInfo>}

				{Object.keys(movie).length !== 0 &&
					<ul>
						<li><AddInfoLink to={`cast`}>Cast</AddInfoLink></li>
						<li><AddInfoLink to={`reviews`}>Reviews</AddInfoLink></li>
					</ul>}
			</AddInfoWrap>

			<Outlet />

		</>
	);
};