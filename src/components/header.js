import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import logo from '../assets/jnwillco-logo.svg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { mobile } from '../styles';

const HeaderContainer = styled.header`
  display: flex;
  background: ${props => props.theme.colors.yankeesBlue};
  margin-bottom: 1.45rem;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const LeftNav = styled.nav`
  margin-left: ${props => props.theme.spacing.tiny}px;
`;

const RightNav = styled.nav`
  color: ${props => props.theme.colors.platinum};
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: 'Main-Logo'
})`
  width: 95px;
`;

const NavList = styled.ul`
  display: flex;
  padding: 0 ${props => props.theme.spacing.small}px;
  text-decoration: none;

  > ${NavItem} {
    margin: ${props => props.theme.spacing.tiny}px;
  }
`;

const NavItem = styled.li`
  margin: ${props => props.theme.spacing.tiny}px;
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.platinum};
  font-weight: bold;
`

const NavAnchor = styled.a`
  color: ${props => props.theme.colors.melon};
`;

const GitHubIcon = styled(FaGithub).attrs({
  size: '2em'
})`
  vertical-align: middle;
  position: relative;
  bottom: 0.25em;

  ${mobile`
    display: none;
  `}
`;

const LinkedInIcon = styled(FaLinkedin).attrs({
  size: '2em'
})`
  vertical-align: middle;
  position: relative;
  bottom: 0.25em;

  ${mobile`
    display: none;
  `}
`;


// const TwitterIcon = styled(FaTwitter).attrs({
//   size: '2em'
// })`
//   vertical-align: middle;
//   position: relative;
//   bottom: 0.25em;
// `;

const EmailIcon = styled(FaEnvelope).attrs({
  size: '2em'
})`
  vertical-align: middle;
  position: relative;
  bottom: 0.25em;

  ${mobile`
    display: none;
  `}
`;



const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <LeftNav>
      <Link to="/">
        <Logo />
      </Link>
    </LeftNav>
    <RightNav>
      <NavList>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavAnchor href="https://www.github.com/javi-aire" target="_blank">
            <GitHubIcon />
          </NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor middleIcon href="https://www.linkedin.com/in/javierwilliams/" target="_blank">
            <LinkedInIcon />
          </NavAnchor>
        </NavItem>
        <NavItem>
          <NavAnchor href="mailto:javier.williams720@gmail.com">
            <EmailIcon />
          </NavAnchor>
        </NavItem>                
      </NavList>
    </RightNav>
  </HeaderContainer>
)

export default Header
