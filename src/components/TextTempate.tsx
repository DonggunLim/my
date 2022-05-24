import React from 'react';
import styled from 'styled-components';
import { Image } from './index';
import brithIcon from '../assets/image/icons8-생일-40.png';
import EmailIcon from '../assets/image/icons8-gmail-30.png';
import capIcon from '../assets/image/icons8-cap-40.png';
const TextTemplate = () => {
  return (
    <TextContainer>
      <h1 className='name'>Lim dong gun</h1>
      <div className='email_container'>
        <Image isCircle={true} url={EmailIcon} width='40px' height='40px' />
        <p className='email'>ehdrjs130@gamil.com</p>
      </div>
      <div className='age_container'>
        <Image isCircle={true} url={brithIcon} width='40px' height='40px' />
        <p className='age'>1996 05 31</p>
      </div>
      <div className='age_container'>
        <Image isCircle={true} url={capIcon} width='40px' height='40px' />
        <p className='age'>항해99 부트캠프 수료</p>
      </div>
    </TextContainer>
  );
};

export default TextTemplate;

const TextContainer = styled.div`
  width:100%
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  .name {
    font-size:80px;
  }
  .email_container {
    display:flex;
    flex-direction:row;
    font-size: 26px;
    
    align-items:center;
    padding:6px;
    margin-top:12px;

    .email {
      margin-left:20px;
    } 
  }
  .age_container {
    display:flex;
    flex-direction:row;
    font-size: 26px;
    
    align-items:center;
    padding:6px;
    margin-top:12px;
    .age {
      margin-left:20px;
    } 
   } 
`;
