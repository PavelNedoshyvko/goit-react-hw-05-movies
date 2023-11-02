import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding-left: 30px;
padding-right: 30px;
`;

export const Header = styled.header`
display: block;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 50px;
padding-left: 50px;
background-color: #d9d9d9;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
		transition: scale 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Nav = styled.nav`
display: flex;
gap: 20px;
align-items: center;
`;

export const Link = styled(NavLink)`
font-size: 24px;
font-weight: 500;
padding-top: 11px;
padding-bottom: 11px;
color: black;
&.active{
color: #ff9966;
}
`;