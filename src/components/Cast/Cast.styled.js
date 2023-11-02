import styled from "styled-components";

export const Gallery = styled.ul`
display: flex;
	flex-wrap: wrap;
  gap: 30px;
`;

export const GalleryItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
padding: 30px 15px;
width: calc((100% - 30px * 3) / 4);
background-color: #f2f2f2;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
		transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const GalleryItemTitle = styled.p`
font-size: 28px;
font-weight: 500;
`;

export const GalleryItemCharacter = styled.p`
font-size: 20px;
font-weight: 500;
`;

export const NoCast = styled.p`
font-size: 28px;
text-align: center;
padding-bottom: 15px;
`;