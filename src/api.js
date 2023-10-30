import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTZkNmEwZWU0MjMxMjljOTgwNTY4NDczNDg0MzIxYiIsInN1YiI6IjY1M2EzOWQ5Yjg3YWVjMDBlMDAzMTc2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nxhdGU7r58_8b7-He4dqB3kmo_lZqELC5QRxoBf-reY'
	}
};

export const fetchAllMovies = async () => {
	const ALL_MOVIES = "/trending/all/day?language=en-US";
	const response = await axios.get(`${ALL_MOVIES}`, options);
	return response.data;
};

export const fetchMovieByQuery = async (searchQuery) => {
	const MOVIE_BY_QUERY = `/search/movie?query=${searchQuery}&include_adult=false&language=en-US`;
	const response = await axios.get(`${MOVIE_BY_QUERY}`, options);
	return response.data;
};

export const fetchMovieDetails = async (movieId) => {
	const MOVIE_DETAILS_BY_ID = `/movie/${movieId}?language=en-US`;
	const response = await axios.get(`${MOVIE_DETAILS_BY_ID}`, options);
	return response.data;
};

export const fetchMovieCredits = async (movieId) => {
	const MOVIE_CREDITS_BY_ID = `/movie/${movieId}/credits?language=en-US`;
	const response = await axios.get(`${MOVIE_CREDITS_BY_ID}`, options);
	return response.data;
};

export const fetchMovieReviews = async (movieId) => {
	const MOVIE_REVIEWS_BY_ID = `/movie/${movieId}/reviews?language=en-US`;
	const response = await axios.get(`${MOVIE_REVIEWS_BY_ID}`, options);
	return response.data;
};