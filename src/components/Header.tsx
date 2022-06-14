import React from 'react';
import styled from 'styled-components';
import { FaRegMoon, FaGithub } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

interface HeaderProps {
  scrollRef: React.MutableRefObject<object | null>;
  toggleMode: () => void;
  isDarkmode: boolean;
  handleModal: () => void;
}

const Header = ({
  scrollRef,
  toggleMode,
  isDarkmode,
  handleModal,
}: HeaderProps) => {
  const autoScroll = (e: React.MouseEvent) => {
    const clickElementName: 'About' | 'Skill' | 'Project' | string = (
      e.target! as HTMLElement
    ).innerText;
    const elementList = scrollRef.current as Array<HTMLElement>;
    let target: number | null = null;
    switch (clickElementName) {
      case `Donggun's Portfolio`:
        target = 0;
        break;
      case 'About':
        target = 1;
        break;
      case 'Skill':
        target = 2;
        break;
      case 'Project':
        target = 3;
        break;
      default:
        throw new Error(`${clickElementName} is not case`);
    }
    elementList[target].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const goGithub = () => {
    window.open('https://github.com/Ldonggun', '_blank');
  };

  return (
    <HeaderContainer className='header'>
      <Navigation>
        <NavItemContainer>
          <NavItem onClick={autoScroll}>Donggun's Portfolio</NavItem>
          <NavItem onClick={autoScroll}>About</NavItem>
          <NavItem onClick={autoScroll}>Skill</NavItem>
          <NavItem onClick={autoScroll}>Project</NavItem>
        </NavItemContainer>
        <NavItemContainer width='20%' justifyCt='none'>
          <NavItem>
            <AiOutlineMail size='41' onClick={handleModal} />
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
  width: 100%;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #354259;
  box-shadow: 0px 0px 9px 3px rgba(41, 41, 41, 0.25);
  z-index: 1000;
  color: #fff;
`;

const Navigation = styled.nav`
  display: flex;
  width: 1290px;
  margin: 0px auto;
`;

const NavItemContainer = styled.ul<{ width?: string; justifyCt?: string }>`
  width: ${props => (props.width ? props.width : '80%')};
  display: flex;
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
