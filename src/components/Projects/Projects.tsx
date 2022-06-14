import React from 'react';
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

const Projects = React.forwardRef((_props, ref) => {
  const data = [
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
      url: 'false',
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
      url: 'false',
      youtubeUrl: '',
      githubUrl: 'https://github.com/Ldonggun/lost99-frontend',
      imageUrl: [detail, post],
      readmeUrl:
        'https://cottony-change-0c1.notion.site/LOST99-Read-Me-51ccbba249c945b7ac4daa0dc53ed6ca',
    },
  ];

  return (
    <ProjectsContainer
      className='projects'
      ref={node => {
        (ref! as React.MutableRefObject<Array<HTMLElement>>).current[3] = node!;
      }}
    >
      <h1 className='projects_title'>Project</h1>
      {data.map(data => (
        <ProjectItem data={data} key={data.id} />
      ))}
    </ProjectsContainer>
  );
});

export default Projects;

const ProjectsContainer = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  .projects_title {
    font-size: 5rem;
    font-family: 'BlackHanSans-Regular';
  }
`;
