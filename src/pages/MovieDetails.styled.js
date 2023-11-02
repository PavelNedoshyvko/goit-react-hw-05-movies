import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackLink = styled(Link)`
display: flex;
gap: 8px;
justify-content: center;
align-items: center;
width: 120px;
	margin-top: 15px;
	margin-bottom: 15px;
padding: 5px 5px;
font-size: 18px;
	font-weight: 500;
	line-height: 1.5;
	letter-spacing: 0.04em;
	color: #ffffff;
	background-color:  #8c8c8c;
	border: 1px solid  #8c8c8c;
	border-radius: 4px;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

		&:hover{
			color: #000000;
				background-color: #ff9966;
				border: 1px solid transparent;
				box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08),
					0px 2px 2px rgba(0, 0, 0, 0.12);
				cursor: pointer;
		}
`;

export const MovieWrap = styled.div`
display: flex;
gap: 30px;
padding: 30px;
margin-bottom: 2px;
background-color: #f2f2f2;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
		transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MovieTitle = styled.h2`
font-size: 32px;
padding-bottom: 50px;	
`;

export const UserScore = styled.p`
font-size: 22px;
padding-bottom: 60px;	
`;

export const OverviewTitle = styled.h3`
font-size: 26px;
padding-bottom: 20px;
`;

export const OverviewText = styled.p`
font-size: 20px;
padding-bottom: 60px;
`;

export const GenresTitle = styled.h4`
font-size:26px;
padding-bottom: 20px;
`;

export const GenresText = styled.span`
font-size: 20px;
`;

export const AddInfoWrap = styled.div`
padding: 30px;
margin-bottom: 2px;
background-color: #f2f2f2;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
		transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AddInfo = styled.p`
font-size:26px;
font-weight: 500;
padding-bottom: 10px;
`;

export const AddInfoLink = styled(NavLink)`
display: block;
font-size: 20px;
padding-bottom: 8px;
transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
&.active{
	color: #ff9966;
}
&:hover{
	color: #ff9966;
}
`;