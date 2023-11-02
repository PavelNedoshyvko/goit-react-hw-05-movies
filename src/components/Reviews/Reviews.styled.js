import styled from "styled-components";


export const ReviewsWrap = styled.ul`
padding: 30px;
background-color: #f2f2f2;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
		transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ReviewAuthor = styled.h3`
font-size: 22px;
padding-bottom: 15px;
`;

export const ReviewContent = styled.p`
font-size: 20px;
padding-bottom: 70px;
`;

export const NoReviews = styled.p`
font-size: 28px;
text-align: center;
padding-bottom: 15px;
`;