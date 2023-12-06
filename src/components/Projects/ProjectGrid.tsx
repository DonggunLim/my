"use client";

import useSWR from "swr";
import ProjectGridCard from "./ProjectGridCard";
import { Project } from "@/model/project";

export default function ProjectGrid() {
  const {
    data: projects,
    isLoading,
    error,
  } = useSWR<Project[]>("/api/projects");

  return (
    <div className="w-full">
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 py-8 px-8">
        {projects &&
          projects.map((project) => (
            <li key={project.id} className="cursor-pointer">
              <ProjectGridCard project={project} />
            </li>
          ))}
      </ul>
    </div>
  );
}
