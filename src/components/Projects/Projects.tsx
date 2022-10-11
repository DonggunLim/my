import React, { useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//components
import { ProjectItem } from '../index';
//image
import {
  main,
  userpage,
  loginUserPage,
  profile,
  compatibility,
  compatibility2,
  chat1,
  chat2,
  chat3,
} from '../../assets/image/fungap';
import { detail, post } from '../../assets/image/lost99';
import { login, signup } from '../../assets/image/velog';
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
} from '../../assets/image/portfolio';

import { calculator } from '../../assets/image/calculator';

export interface ProjectDataProps {
  title: string;
  explain: string;
  tech: string;
  service: string;
  deployment: string;
  url: string;
  youtubeUrl: string;
  githubUrl: string;
  imageUrl: string[];
  readmeUrl: string;
}

const Projects = React.forwardRef((_props, ref) => {
  const [isTeamProject, setIsTeamProject] = useState(true);
  const teamProjects = [
    {
      id: 1,
      title: 'Fungap',
      explain:
        '항해99 부트 캠프 기간 중 가장 길었으며 백엔드 3명, 프론트 엔드 3명 총 6명의 팀원과 함께 6주간 진행한 프로젝트 입니다. 항해 기간 동안 배운 React를 이용하여 시도 해보고 싶었던 것들을 해볼 수 있었던 기회였습니다.                                              MBTI 와 관련된 다양한 재미있는 컨텐츠를 제공하는 서비스이며, MBTI 유형별로 재미있는 게시물과 테스트 그리고 채팅 서비스를 제공 했습니다.',
      tech: 'React.js, redux, immer, react-router-dom, postcss, axios, socket.io',
      service:
        'socket.io 를 통한 채팅구현, 소셜 회원가입, MBTI궁합테스트, 유저 페이지 구현',
      deployment: 'aws-s3',
      url: 'https://fungap.shop',
      youtubeUrl: 'https://youtu.be/EUYZv5PJMtI',
      githubUrl: 'https://github.com/Ldonggun/fungap-front',
      imageUrl: [
        main,
        userpage,
        loginUserPage,
        profile,
        compatibility,
        compatibility2,
        chat1,
        chat2,
        chat3,
      ],
      readmeUrl:
        'https://cottony-change-0c1.notion.site/Fungap-Read-Me-6f932740e7fa4989a3e94720de41d1b2',
    },
    {
      id: 2,
      title: 'VELOG clon coding',
      explain:
        '1주일간 프론트엔드 2명, 백엔드 3명과 함께 진행한 클론 코딩 프로젝트 입니다. JWT방식을 이용한 로그인 회원가입 구현 부분을 맡으며 공부 해볼 수있는 시간이었습니다. 유저페이지 제작을 맡으며 React숙련도 또한 올릴 수 있었습니다.',
      tech: 'React.js, redux, redux-actions, redux-thunk, redux-logger, immer, react-router-dom, styled-components, axios, JWT',
      service: 'JWT를 이용한 회원가입, 게시물 CRUD 및 유저 페이지',
      deployment: 'aws-s3',
      url: '',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/velog-clone',
      imageUrl: [login, signup],
      readmeUrl:
        'https://cottony-change-0c1.notion.site/Velog-clon-coding-Read-Me-37e23ae81ec74e878df04166e260bf9e',
    },
    {
      id: 3,
      title: 'LOST99',
      explain:
        '2주간 React를 배운후 처음으로 다른 개발자들과 함께 프로젝트를 진행한 프로젝트 입니다. 잃어버린 물건을 찾을 수 있게 게시물을 올리고 댓글로 소통 하게 해주는 간단한 서비스를 구현했습니다. 첫 프로젝트로 백엔드 개발자와 호흡을 맞추며 서버통신을 해볼 수 있었으며,게시글 작성시 이미지 업로드 구현으로 S3를 이용해볼 기회가 있었습니다. React 를 이용한 기본적인 게시글 CRUD구현을 해볼수 있었습니다.',
      tech: 'React.js, redux, styled-components, axios',
      service: ' 게시물CRUD, s3 이용한 이미지저장',
      deployment: 'aws-s3',
      url: '',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/lost99-frontend',
      imageUrl: [detail, post],
      readmeUrl:
        'https://cottony-change-0c1.notion.site/LOST99-Read-Me-51ccbba249c945b7ac4daa0dc53ed6ca',
    },
    {
      id: 4,
      title: '포트폴리오 웹사이트',
      explain:
        'React를 이용해 포트폴리용으로 제작한 웹사이트입니다. 복잡한 기능을 넣기 보다는 단순하고 편하게 볼수 있도록 만들어 보았습니다. 배포는 CI/CD와 나중의 백엔드 필요성을 고려하여 aws-amplify를 이용하였습니다. ',
      tech: 'React.js, typescript, styled-components',
      service: '간단한 자기소개와 인적 사항, 기술 스택, 프로젝트 경험 ',
      deployment: 'aws-Amplify',
      url: 'www.ldonggun.me',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/my',
      imageUrl: [portfolio1, portfolio2, portfolio3, portfolio4],
      readmeUrl:
        'https://cottony-change-0c1.notion.site/Portfolio-Read-Me-fb5acd18e32d4ce58dbc6ec266878c84',
    },
  ];

  const personalProjects = [
    {
      id: 1,
      title: '계산기',
      explain:
        '바닐라 자바스크립트를 이용해서 계산기를 만들어 보았습니다. 간단한 과제로써 계산기를 몇 번 만들어 보았지만, 두 자릿수 이상의 계산과 여러 가지 사칙연산을 우선순위에 맞추어 계산기를 만들어 보고 싶었습니다. 중위식과 후위식 계산을 통한 알고리즘 공부도 하게 되었고 이전에 공부했던 css grid도 또한 간단히 적용해 볼 수 있었습니다. ',
      tech: 'JavaScript, HTML5, CSS3',
      service: '',
      deployment: 'GitHub Pages',
      url: 'https://ldonggun.github.io/Calculator/',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/Calculator',
      imageUrl: [calculator],
      readmeUrl: '',
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target! as HTMLButtonElement;
    if (target.className === 'team_btn') {
      setIsTeamProject(true);
    } else {
      setIsTeamProject(false);
    }
  };

  return (
    <ProjectsContainer
      className='projects'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[3] = node!;
      }}
      data-aos='fade-right'
      data-aos-offset='300'
    >
      <h1 className='projects_title'>Project</h1>
      <div className='project_menu'>
        <button className='team_btn' onClick={handleClick}>
          팀 프로젝트
        </button>
        <button className='personal_btn' onClick={handleClick}>
          개인 프로젝트
        </button>
      </div>
      {isTeamProject
        ? teamProjects.map(project => (
            <ProjectItem data={project} key={project.id} />
          ))
        : personalProjects.map(project => (
            <ProjectItem data={project} key={project.id} />
          ))}
    </ProjectsContainer>
  );
});

export default Projects;

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding: 6px;

  .projects_title {
    font-size: 5rem;
    font-family: 'BlackHanSans-Regular';
  }

  .project_menu {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 300px;
    height: 40px;

    button {
      width: 45%;
      text-align: center;
      background: white;
      height: 100%;
      cursor: pointer;
      border-radius: 16px;
      box-shadow: 0 17px 20px -18px rgb(0 0 0);
      border: 1px solid #e0e0e0;
      font-size: 16px;
      font-weight: bold;
    }
    .selected {
      background: #e7e7e7;
    }
  }

  @media (max-width: 1130px) {
    .projects_title {
      font-size: 3rem;
      text-align: center;
    }
  }
`;
