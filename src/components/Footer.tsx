import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';

interface FooterProps {
  handleModal: () => void;
}

const Footer = (props: FooterProps) => {
  const { handleModal } = props;
  return (
    <FooterContainer>
      <FooterTop>
        <h1>Contact</h1>
        <div className='contact_body'>
          <p>개인번호 : 01086506766</p>
          <p>이메일 : ehdrjs130@gmail.com</p>
        </div>
        <div className='email_icon' onClick={handleModal}>
          <AiOutlineMail size='38px' />
        </div>
      </FooterTop>
      <FooterLower>
        <p>© Lim donggun, All rights reserved.</p>
      </FooterLower>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 160px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  border-top: 1px solid #dfdfdf;
  position: relative;
  bottom: 0px;
`;

const FooterTop = styled.div`
  width: 100%;
  height: 70%;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.6rem;
    font-family: 'BlackHanSans-Regular';
  }

  .contact_body {
    margin-left: 32px;
    border-left: 1px solid #000000;
    padding-left: 32px;
    padding-right: 32px;
    font-size: 1.1rem;
    font-weight: 400;
    font-family: Noto Sans KR, sans-serif;
    line-height: normal;
  }

  .email_icon {
    cursor: pointer;
  }
`;

const FooterLower = styled.div`
  width: 100%;
  height: 30%;
  background-color: #354259;
  text-align: center;
  p {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 48px;
  }
`;
