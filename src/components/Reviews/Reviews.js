import { fetchMovieReviews } from "api";
import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NoReviews, ReviewAuthor, ReviewContent, ReviewsWrap } from "./Reviews.styled";

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
			{loading && <Loader />}
			{review.length > 0 ?
				<ReviewsWrap>
					{review.map(({ id, author, content }) => (
						<li key={id}>
							{author && <ReviewAuthor>Author: {author}</ReviewAuthor>}
							{content && <ReviewContent>{content}</ReviewContent>}
						</li>
					))}
				</ReviewsWrap> : <NoReviews>We don't have any reviews for this movie</NoReviews>
			}
		</>
	);
};