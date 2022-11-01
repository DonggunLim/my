import React, { useEffect, useState } from 'react';
import styles from './Projects.module.css';
//components
import { Carousel } from '../index';
//api
import { fetchApi } from '../../shared/api';
//interface
import { HeaderProps } from '../Header/Header';

export interface ProjectDataProps {
  projects: ProjectType[];
}

export type ProjectType = {
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
  isTeam: boolean;
  logo?: string;
};

interface ButtonsProps extends HeaderProps {}

const Projects = React.forwardRef(() => {
  const filters = ['Team', 'Personal'];
  const [filter, setFilter] = useState(filters[0]);
  const [projects, setProjects] = useState([]);
  const filtered = filterProjects(projects, filter);

  useEffect(() => {
    fetchApi('portfolio/projects').then(setProjects);
  }, []);

  return (
    <section className={styles.project}>
      <Buttons filters={filters} filter={filter} setFilter={setFilter} />
      <div className={styles.wrap}>
        {filter === 'Team' && <Carousel data={filtered} />}
        {filter === 'Personal' && <Carousel data={filtered} />}
      </div>
    </section>
  );
});

export default Projects;

function Buttons({ filters, filter, setFilter }: ButtonsProps) {
  return (
    <div className={styles.buttons}>
      {filters.map((item, index) => (
        <button
          className={`${styles.btn} ${filter === item ? styles.selected : ''}`}
          key={index}
          onClick={() => {
            setFilter(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

function filterProjects(projects: ProjectType[], filter: string) {
  if (filter === 'Team') {
    return projects.filter((p: ProjectType) => p.isTeam === true);
  } else {
    return projects.filter((p: ProjectType) => p.isTeam === false);
  }
}
