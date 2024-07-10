
import React from 'react'
import {FooterContainer, FooterWrapper, Logo, NavLink, Copyright} from '../Footer/Footerstyle'



function Footer() {
    return (
      <FooterContainer>
        <FooterWrapper>
          <Logo>
            Prajwal Kumar
            </Logo>
            <p > Contact: <NavLink href="email">1prajwalprajuu@gmail.com</NavLink>  </p>
          <Copyright>
            &copy; 2024 Prajwal Kumar. All rights reserved.
          </Copyright>
  
        </FooterWrapper>
      </FooterContainer>
    );
  }
  
  export default Footer;