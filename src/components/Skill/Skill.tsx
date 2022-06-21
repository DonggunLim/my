import React from 'react';
import styled from 'styled-components';
import Image from '../Image/Image';
import group1 from '../../assets/image/Group1.png';
import group2 from '../../assets/image/Group2.png';
import group3 from '../../assets/image/Group3.png';
import useWindowSize from '../../hooks/useWindowsSize';
const Skill = React.forwardRef((_props, ref) => {
  const widthSize = useWindowSize();
  return (
    <SkillContainer
      className='skill'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[2] = node!;
      }}
      data-aos='fade-right'
      data-aos-offset='300'
    >
      <h1 className='skill_title'>Skill</h1>
      <SkillBody className='skill_body'>
        <Image
          url={group1}
          isCircle='16px'
          width={widthSize < 1130 ? '350px' : '360px'}
          height={widthSize < 1130 ? '400px' : '600px'}
          bgSize='cover'
          hover={true}
        />
        <Image
          url={group2}
          isCircle='16px'
          width='360px'
          height='600px'
          bgSize='cover'
          hover={true}
        />
        <Image
          url={group3}
          isCircle='16px'
          width='360px'
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
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  padding: 16px;

  .skill_title {
    font-size: 5rem;
    font-family: 'BlackHanSans-Regular';
  }

  @media (max-width: 1130px) {
    .skill_title {
      font-size: 3rem;
      text-align: center;
    }
  }
`;

const SkillBody = styled.div`
  display: flex;
  justify-content: center;
  div {
    margin: 0px 8px;
  }

  @media (max-width: 1130px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      margin-bottom: 8px;
    }
  }
`;
