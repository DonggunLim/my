import React from 'react';
import styled from 'styled-components';
import gitIcon from '../assets/image/github_git_icon.png';
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
  const HandleClick = (e: React.MouseEvent) => {
    const clickElementName: 'About' | 'Skill' | 'Project' | string = (
      e.target! as HTMLElement
    ).innerText;
    const elementList = scrollRef.current as Array<HTMLElement>;
    console.log(elementList);
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
      block: target === 3 ? 'start' : 'center',
    });
  };

  return (
    <HeaderContainer className='header'>
      <Navigation>
        <NavItemContainer>
          <NavItem onClick={HandleClick}>Donggun's Portfolio</NavItem>
          <NavItem onClick={HandleClick}>About</NavItem>
          <NavItem onClick={HandleClick}>Skill</NavItem>
          <NavItem onClick={HandleClick}>Project</NavItem>
        </NavItemContainer>
        <NavItem className='email_icon' onClick={handleModal}>
          <AiOutlineMail size='43' />
        </NavItem>
        <NavItem url={gitIcon} className='git_icon'>
          <a
            href='https://github.com/Ldonggun'
            target='_blank'
            rel='noreferrer'
            title='github link'
            style={{ color: '#fff' }}
          >
            <FaGithub size='37' />
          </a>
        </NavItem>
        <NavItem className='toggle_mode' onClick={toggleMode}>
          {isDarkmode ? <BsSun size='37' /> : <FaRegMoon size='37' />}
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
  opacity: 1;

  &:hover {
    opacity: 0.5;
    transform: translate(0, 8px);
  }
`;
