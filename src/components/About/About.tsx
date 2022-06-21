import React from 'react';
import styled from 'styled-components';
import { Image, AboutText } from '../index';
import aboutImgae from '../../assets/image/myimage.jpg';
import useWindowSize from '../../hooks/useWindowsSize';
const About = React.forwardRef((_props, ref) => {
  const widthSize = useWindowSize();
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
          width={widthSize < 1130 ? '150px' : '290px'}
          height={widthSize < 1130 ? '150px' : '290px'}
          url={aboutImgae}
        />
      </div>
      <AboutText />
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
