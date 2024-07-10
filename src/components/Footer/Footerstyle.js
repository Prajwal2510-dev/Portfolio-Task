import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
 
`;


export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

export const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;


export const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: grey;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;


export const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: black;
  text-align: center;
`;
