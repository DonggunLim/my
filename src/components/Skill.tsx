import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import group1 from '../assets/image/Group1.png';
import group2 from '../assets/image/Group2.png';
import group3 from '../assets/image/Group3.png';

const Skill = React.forwardRef((props, ref) => {
  return (
    <SkillContainer
      className='skill'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[2] = node!;
      }}
    >
      <h1 className='skill_title'>Skill</h1>
      <SkillBody className='skill_body'>
        <Image
          url={group1}
          isCircle='16px'
          width='400px'
          height='600px'
          bgSize='cover'
          hover={true}
        />
        <Image
          url={group2}
          isCircle='16px'
          width='350px'
          height='600px'
          bgSize='cover'
          hover={true}
        />
        <Image
          url={group3}
          isCircle='16px'
          width='350px'
          height='250px'
          bgSize='cover'
          hover={true}
        />
      </SkillBody>
    </SkillContainer>
  );
});

export default Skill;

const SkillContainer = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  display: flex;
  flex-direction: column;

  .skill_title {
    font-size: 5rem;
    font-family: 'BlackHanSans-Regular';
  }
`;

const SkillBody = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;

  div {
    margin: 16px;
  }
`;

const BackgroundLine = styled.div`
  width: 100vw;
  height: 900px;
  background-color: ${props => (props.color ? props.color : '#ccc')};
  position: absolute;
  left: -17px;
  top: 976px;
  z-index: -100;
`;
