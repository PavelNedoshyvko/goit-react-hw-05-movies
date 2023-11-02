import { Link } from "react-router-dom";
import styled from "styled-components";

export const ListItem = styled.li`
&:not(:last-child){
	margin-bottom: 8px;
}
`;

export const ListItemText = styled(Link)`
font-size: 20px;
font-weight: 500;
color: black;
transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover{
	color: #ff9966;
}
`;