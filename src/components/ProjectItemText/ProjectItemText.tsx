import React from 'react';
import styled from 'styled-components';
//icons
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import { AiOutlineRead } from 'react-icons/ai';
import '../../styles/fonts/font.css';
import { DefaultTheme } from 'styled-components';
import { ProjectItemProps } from '../ProjectItem/ProjectItem';

interface ProjectItemTextProps extends ProjectItemProps {
  themeContext: DefaultTheme;
}

const ProjectItemText = ({ data, themeContext }: ProjectItemTextProps) => {
  const {
    title,
    explain,
    tech,
    service,
    deployment,
    url,
    youtubeUrl,
    githubUrl,
    readmeUrl,
  } = data;
  console.log(themeContext);
  return (
    <ProjectItemTextContainer>
      <h1 className='title'>{title}</h1>
      <div className='explain'>{explain}</div>
      <ItemBody className='text_body'>
        <div className='text_body_item'>
          <div className='text_body_title'>Skill</div>
          <div className='text_body_content'>{tech}</div>
        </div>
        <div className='text_body_item'>
          <div className='text_body_title'>I Did</div>
          <div className='text_body_content'>{service}</div>
        </div>
        <div className='text_body_item'>
          <div className='text_body_title'>URL</div>
          <div className='text_body_content'>{url ? url : '❌'}</div>
        </div>
        <div className='text_body_item'>
          <div className='text_body_title'>Deployment</div>
          <div className='text_body_content'>{deployment}</div>
        </div>
      </ItemBody>
      <IconContainer themeContext={themeContext}>
        <a
          href={youtubeUrl}
          target='_blank'
          rel='noreferrer'
          className='icon_video'
        >
          <FaPlayCircle size={35} />
        </a>
        <a
          href={githubUrl}
          target='_blank'
          rel='noreferrer'
          className='icon_github'
        >
          <FaGithub size={35} />
        </a>
        <a
          href={readmeUrl}
          target='_blank'
          rel='noreferrer'
          className='icon_readme'
        >
          <AiOutlineRead size={35} />
          &ensp;Read Me
        </a>
      </IconContainer>
    </ProjectItemTextContainer>
  );
};

export default ProjectItemText;

const ProjectItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 16px;

  .title {
    font-weight: 400;
    font-size: 2.6rem;
    text-align: center;
    margin: 16px 0px;
    font-family: 'BlackHanSans-Regular';
  }

  .explain {
    font-weight: 600;
    font-size: 1.2rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 1130px) {
    width: 100%;
    margin-top: 16px;
    .title {
      font-size: 2rem;
    }
  }
`;

const ItemBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14px;
  font-size: 1.2rem;
  font-weight: 500;

  .text_body_item {
    display: flex;
    margin: 8px 0px;
    .text_body_title {
      flex-shrink: 0;
      width: 200px;
    }

    .text_body_content {
      flex-grow: 1;
      word-break: break-all;
    }
  }
`;

const IconContainer = styled.div<{ themeContext: DefaultTheme }>`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 0px;

  .icon_readme {
    display: flex;
    align-items: center;
    font-weight: 600;
    padding: 4px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 8px;
    color: ${props => props.themeContext.color};
    background: ${props => props.themeContext.bgColor};
    &:hover {
      background-color: #dfdfdf;
    }
  }
`;
