import styled, { createGlobalStyle } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #0a192f;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  font-size: 1rem;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  ${Container}
`;

export const NavLogoContainer = styled.div`
  margin-left: 20px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 50%;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  border: 2px solid #61dafb;
  padding: 5px 14px;
  border-radius: 50%;
  cursor: pointer;
  text-decoration: none;
  font-size: 23px;
  display: flex;
  align-items: center;
  color: #61dafb;
  font- :hover,
  :focus {
    color: #61dafb;
    background-color: rgba(192, 192, 192, 0.1);
  }
`;

export const MobilIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    color: #61dafb;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 90vh;
    position: fixed;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #0a192f;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
`;

export const NavLinks = styled(LinkR)`
  color: #ccd6f6;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem 1.2rem;
  height: 100%;
  font-family: "Source Sans Pro", sans-serif;

  &:hover {
    color: #61dafb;
    transition: 0.5s all ease;
    cursor: pointer;
  }

  /* :before {
    content: "<";
    color: #61dafb;
  }
  :after {
    content: "/>";
    color: #61dafb;
  } */
`;

export const Photo = styled.figure``;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
