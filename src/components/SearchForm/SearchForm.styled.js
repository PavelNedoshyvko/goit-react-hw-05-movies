import styled from "styled-components";

export const FieldInput = styled.input`
width: 300px;
	min-height: 35px;
	padding-left: 15px;
	margin-top: 20px;
	margin-bottom: 20px;
	margin-right: 20px;
	border: 1px solid rgba(46, 47, 66, 0.4);
	border-radius: 4px;
	outline: transparent;
	transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		border-color: #ff9966;
		}
`;

export const SearchBtn = styled.button`
padding: 7px 20px;
	border: 1px solid transparent;
	border-radius: 4px;
	background-color: #d9d9d9;
	transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover{
				background-color: #ff9966;
				cursor: pointer;
		}
`;