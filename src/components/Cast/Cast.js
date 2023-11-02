import { fetchMovieCredits } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gallery, GalleryItem, GalleryItemCharacter, GalleryItemTitle, NoCast } from "./Cast.styled";

export const Cast = () => {

	const [cast, setCast] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { movieId } = useParams();

	useEffect(() => {
		if (!movieId) return;
		async function getMovieCredits() {
			try {
				setError(false);
				setLoading(true);
				const { cast } = await fetchMovieCredits(movieId);
				setCast(cast);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getMovieCredits();
	}, [movieId]);

	const profileBaseURL = `https://image.tmdb.org/t/p/w300`;

	return (
		<>
			{error && <p>Something went wrong! Try again</p>}
			{loading && <Loader />}
			{cast.length > 0 ?
				<Gallery>
					{cast.map(({ cast_id, profile_path, name, character }) => (
						<GalleryItem key={cast_id}>
							{profile_path ? <img src={profileBaseURL + profile_path} alt={name} /> :
								<img
									src={'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'}
									width={'300'}
									alt={"no profile available"}
								/>}
							{name && <GalleryItemTitle>{name}</GalleryItemTitle>}
							{character && <GalleryItemCharacter>Character: {character}</GalleryItemCharacter>}
						</GalleryItem>
					))}
				</Gallery> : <NoCast>We don't have any cast for this movie</NoCast>
			}
		</>
	);
};