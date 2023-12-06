"use client";

import ProjectGrid from "./ProjectGrid";
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

export default function Projects() {
  return <ProjectGrid />;
}
