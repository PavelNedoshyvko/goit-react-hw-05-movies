import { useLocation } from "react-router-dom";
import { ListItem, ListItemText } from "./MovieList.styled";

export const MoviesList = ({ movies }) => {
	const location = useLocation();
	return (
		<ul>
			{movies.map(({ id, title, name }) => (
				<ListItem key={id}>
					<ListItemText to={`/movies/${id}`} state={{ from: location }}>{title ?? name}</ListItemText>
				</ListItem>
			))
			}
		</ul >
	);
};