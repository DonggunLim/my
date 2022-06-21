import React from 'react';
import styled from 'styled-components';
import { FaRegMoon, FaGithub } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import autoScroll from '../../shared/autoScroll';

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
  const handleClick = (e: React.MouseEvent) => {
    const targetName = (e.target! as HTMLElement).innerText;
    const elementList = scrollRef.current as Array<HTMLElement>;
    autoScroll(targetName, elementList);
  };

  const goGithub = () => window.open('https://github.com/Ldonggun', '_blank');

  return (
    <HeaderContainer className='header'>
      <Navigation>
        <NavItemContainer>
          <NavItem onClick={handleClick}>Donggun's Portfolio</NavItem>
          <NavItem onClick={handleClick}>About</NavItem>
          <NavItem onClick={handleClick}>Skill</NavItem>
          <NavItem onClick={handleClick}>Project</NavItem>
        </NavItemContainer>
        <NavItemContainer
          width='20%'
          justifyCt='center'
          className='navitem_icons'
        >
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
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  padding: 8px;
  background-color: #354259;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  z-index: 1000;
  color: #fff;
`;

const Navigation = styled.nav`
  display: flex;
  width: 1130px;
  margin: 0px auto;
  @media (max-width: 1130px) {
    width: 100%;

    .navitem_icons {
      display: none;
    }
  }
`;

const NavItemContainer = styled.ul<{ width?: string; justifyCt?: string }>`
  width: ${props => (props.width ? props.width : '80%')};
  display: flex;
  justify-content: ${props =>
    props.justifyCt ? props.justifyCt : 'space-around'};
  align-items: center;
  font-size: 1.2rem;
  font-family: 'BlackHanSans-Regular';
  @media (max-width: 1130px) {
    width: 100%;
    font-size: 16px;
  }
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
