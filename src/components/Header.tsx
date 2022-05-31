import React from 'react';
import styled from 'styled-components';
import gitIcon from '../assets/image/github_git_icon.png';
import { FaRegMoon } from 'react-icons/fa';

interface HeaderProps {
  scrollRef: React.MutableRefObject<object | null>;
}

const Header = ({ scrollRef }: HeaderProps) => {
  const HandleClick = (e: React.MouseEvent) => {
    const clickElementName: 'About' | 'Skill' | 'Project' | string = (
      e.target! as HTMLElement
    ).innerText;
    const elementList = scrollRef.current as Array<HTMLElement>;
    let target: number | null = null;
    switch (clickElementName) {
      case 'About':
        target = 0;
        break;
      case 'Skill':
        target = 1;
        break;
      case 'Project':
        target = 2;
        break;
      default:
        throw new Error(`${clickElementName} is not case`);
    }
    elementList[target].scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <HeaderContainer className='header'>
      <Navigation>
        <NavItemContainer>
          <NavItem onClick={HandleClick}>About</NavItem>
          <NavItem onClick={HandleClick}>Skill</NavItem>
          <NavItem onClick={HandleClick}>Project</NavItem>
        </NavItemContainer>
        <NavItem url={gitIcon}></NavItem>
        <NavItem>
          <FaRegMoon size='37' />
        </NavItem>
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
  background-color: #fff;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  z-index: 1000;
`;

const Navigation = styled.nav`
  display: flex;
  width: 1290px;
  margin: 0px auto;
`;

const NavItemContainer = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  font-size: 1.2rem;
  font-family: 'BlackHanSans-Regular';
`;

const NavItem = styled.li<{ url?: string }>`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.url});
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;

  &:hover {
    opacity: 1;
    transform: translate(0, 8px);
  }
`;
