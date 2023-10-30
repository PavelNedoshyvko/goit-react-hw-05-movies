import { fetchMovieReviews } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {

	const [review, setReview] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const { movieId } = useParams();

	useEffect(() => {
		if (!movieId) return;
		async function getMovieReviews() {
			try {
				setError(false);
				setLoading(true);
				const { results } = await fetchMovieReviews(movieId);
				setReview(results);
			} catch (error) {
				setError(true);
			} finally {
				setLoading(false);
			}
		};
		getMovieReviews();
	}, [movieId]);

	return (
		<>
			{error && <p>Something went wrong! Try again please</p>}
			{
				review.length > 0 &&
				<ul>
					{review.map(({ id, author, content }) => (
						<li key={id}>
							<h3>Author: {author}</h3>
							{content && <p>{content}</p>}
						</li>
					))}
				</ul>
			}
			{loading && <Loader />}
		</>



	);
};