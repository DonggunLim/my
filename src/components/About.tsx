import React from 'react';
import styled from 'styled-components';
import { Image, TextTemplate } from './index';
import aboutImgae from '../assets/image/mainimage.jpg';

const About = React.forwardRef((props, ref) => {
  return (
    <AboutContainer
      className='about'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[0] = node!;
      }}
    >
      <Image
        isCircle='true'
        width='320px'
        height='320px'
        url={aboutImgae}
      ></Image>
      <TextTemplate />
    </AboutContainer>
  );
});

export default About;

const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin: 85px 0;
`;
