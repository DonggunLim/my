import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../index';
import { FaRegMoon, FaGithub } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import autoScroll from '../../shared/autoScroll';
import myImage from '../../assets/image/myimage2.png';
interface HeaderProps {
  scrollRef: React.MutableRefObject<object | null>;
  toggleMode: () => void;
  isDarkmode: boolean;
  handleVisible: () => void;
}

const Header = ({
  scrollRef,
  toggleMode,
  isDarkmode,
  handleVisible,
}: HeaderProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    const targetName = (e.target! as HTMLElement).innerText;
    const elementList = scrollRef.current as Array<HTMLElement>;
    autoScroll(targetName, elementList);
  };

  const goGithub = () => window.open('https://github.com/Ldonggun', '_blank');

  const setMenu = () => setToggleMenu(!toggleMenu);

  return (
    <HeaderContainer className='header' isOpen={toggleMenu}>
      <Navigation>
        <NavItemContainer flexDir='column' height='50%'>
          <Image isCircle='true' width='200px' height='200px' url={myImage} />
          <NavItem onClick={handleClick}>Donggun's Portfolio</NavItem>
          <NavItem onClick={handleClick}>About</NavItem>
          <NavItem onClick={handleClick}>Skill</NavItem>
          <NavItem onClick={handleClick}>Project</NavItem>
        </NavItemContainer>
        <NavItemContainer justifyCt='center' className='navitem_icons'>
          <NavItem>
            <AiOutlineMail size='41' onClick={handleVisible} />
          </NavItem>
          <NavItem>
            <FaGithub size='37' onClick={goGithub} />
          </NavItem>
          <NavItem>
            {isDarkmode ? (
              <BsSun size='37' onClick={toggleMode} />
            ) : (
              <FaRegMoon size='37' onClick={toggleMode} />
            )}
          </NavItem>
        </NavItemContainer>
      </Navigation>
      <ToggleButton onClick={setMenu}>
        {toggleMenu ? (
          <IoIosArrowBack size={40} className='toggle_arrow' />
        ) : (
          <IoIosArrowForward size={40} className='toggle_arrow' />
        )}
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header<{ isOpen?: boolean }>`
  position: fixed;
  left: -280px;
  right: 0;
  top: 0;
  width: 315px;
  height: 100vh;
  z-index: 1000;
  color: #fff;

  transform: ${props => props.isOpen && 'translateX(280px)'};
  transition: 1.5s;
`;

const Navigation = styled.nav`
  height: 100%;
  width: 280px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #354259;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
`;

const NavItemContainer = styled.ul<{
  width?: string;
  height?: string;
  justifyCt?: string;
  flexDir?: string;
}>`
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : 'auto')};
  display: flex;
  flex-direction: ${props => (props.flexDir ? props.flexDir : 'row')};
  justify-content: ${props =>
    props.justifyCt ? props.justifyCt : 'space-around'};
  align-items: center;
  font-size: 1.2rem;
  font-family: 'BlackHanSans-Regular';
`;

const NavItem = styled.li<{ url?: string }>`
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;

  &:hover {
    opacity: 0.5;
    transform: translate(0, 8px);
  }
`;

const ToggleButton = styled.div`
  width: 35px;
  height: 60px;
  display: flex;
  align-items: center;
  background: #283a3c;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  position: absolute;
  left: 280px;
  top: 50%;
  cursor: pointer;
`;
