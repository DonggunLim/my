import React from 'react';
import styled from 'styled-components';
import gitIcon from '../assets/image/github_git_icon.png';
import { FaRegMoon } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer className='header'>
      <Navigation>
        <NavItemContainer>
          <NavItem url={gitIcon}></NavItem>
          <NavItem>
            <FaRegMoon size='37' />
          </NavItem>
        </NavItemContainer>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  border: '1px solid black';
  background-color: #fff;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const NavItemContainer = styled.ul`
  display: flex;
  margin-right: 300px;
`;

const NavItem = styled.li<{ url?: string }>`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.url});
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
