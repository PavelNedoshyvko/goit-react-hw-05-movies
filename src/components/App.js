import { Route, Routes } from "react-router-dom";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { Layout } from "./Layout/Layout";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const MovieDetails = lazy(() => import("pages/MovieDetails"));
const Movies = lazy(() => import("pages/Movies"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

export const App = () => {
	return (
		<Suspense fallback={'LOADING PAGE...'}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes >
		</Suspense >
	);
};
