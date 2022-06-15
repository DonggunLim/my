import React from 'react';
import styled from 'styled-components';
import { Image, TextTemplate } from '../index';
import aboutImgae from '../../assets/image/myimage.jpg';

const About = React.forwardRef((_props, ref) => {
  return (
    <AboutContainer
      className='about'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[1] = node!;
      }}
      data-aos='fade-right'
      data-aos-offset='300'
    >
      <Image isCircle='true' width='290px' height='290px' url={aboutImgae} />
      <TextTemplate />
    </AboutContainer>
  );
});

export default About;

const AboutContainer = styled.section`
  width: 100%;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;
