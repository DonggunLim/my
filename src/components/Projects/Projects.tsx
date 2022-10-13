import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//components
import { ProjectItem } from '../index';
//api
import { fetchApi } from '../../shared/api';
export interface ProjectDataProps {
  _id: string;
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

interface Project extends Array<ProjectDataProps> {}

const Projects = React.forwardRef((_props, ref) => {
  const [isTeamProject, setIsTeamProject] = useState(true);
  const [teamProjects, setTeamProjects] = useState<Project>([]);
  const [personalProjects, setPersonalProjects] = useState<Project>([]);
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target! as HTMLButtonElement;
    if (target.className === 'team_btn') {
      setIsTeamProject(true);
    } else {
      setIsTeamProject(false);
    }
  };
  const getTeamProjectData = async () => {
    setTeamProjects(await fetchApi('portfolio/team'));
  };
  const getPersonalProjectData = async () => {
    setPersonalProjects(await fetchApi('portfolio/personal'));
  };

  useEffect(() => {
    getTeamProjectData();
    getPersonalProjectData();
  }, []);

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
            <ProjectItem data={project} key={project._id} />
          ))
        : personalProjects.map(project => (
            <ProjectItem data={project} key={project._id} />
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
