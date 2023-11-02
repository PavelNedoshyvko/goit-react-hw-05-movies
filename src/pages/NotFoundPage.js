import { Link } from "react-router-dom";

export default function NotFoundPage() {
	return <div>
		Sorry, no such route exists. Please follow this link to the
		<Link to="/">home page</Link>
	</div>
};