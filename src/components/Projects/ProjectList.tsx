import { Project } from "@/model/project";
import useSWR from "swr";
import ProjectListItem from "./ProjectListItem";
import ProjectListItemSkeleton from "../Skeleton/ProjectListItemSkeleton";

export default function ProjectList() {
  const {
    data: projects,
    isLoading,
    error,
  } = useSWR<Project[]>("/api/projects");
  return (
    <ul className="group/list w-1/2 flex flex-col gap-y-4">
      {isLoading && <ProjectListItemSkeleton length={3} />}
      {projects?.map((project) => (
        <ProjectListItem project={project} key={project.id} />
      ))}
    </ul>
  );
}
