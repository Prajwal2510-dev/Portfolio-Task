import React from "react";
import { Bio } from "../../data/content";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavItems, NavLink, ButtonContainer, GithubButton, Span, MobileLink, MobileMenu} from "../Navbar/Navbarstyle";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </button>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github}>Github Profile</GithubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            
            <GithubButton href={Bio.github} >Github Profile</GithubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
