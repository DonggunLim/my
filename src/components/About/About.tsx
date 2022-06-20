import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image, TextTemplate } from '../index';
import aboutImgae from '../../assets/image/myimage.jpg';

const About = React.forwardRef((_props, ref) => {
  const [windowSize, setWindowSize] = useState<number | null>(null);
  useEffect(() => {
    setWindowSize(window.screen.width);
  }, []);
  return (
    <AboutContainer
      className='about'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[1] = node!;
      }}
      data-aos='fade-right'
      data-aos-offset='300'
    >
      <div className='profile-image'>
        <Image
          isCircle='true'
          width={windowSize! < 1130 ? '150px' : '290px'}
          height={windowSize! < 1130 ? '150px' : '290px'}
          url={aboutImgae}
        />
      </div>
      <TextTemplate />
    </AboutContainer>
  );
});

export default About;

const AboutContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  @media (max-width: 1130px) {
    .profile-image {
      margin: auto;
    }
  }
`;
