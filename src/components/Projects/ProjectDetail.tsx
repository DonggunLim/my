import { Project } from "@/model/project";
import GithubIcon from "../Icons/GithubIcon";

type Props = {
  project: Project;
};

export default function ProjectDetail({
  project: { title, githuburl },
}: Props) {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl uppercase font-bold">{title}</h1>
        {githuburl && (
          <a href={githuburl} target="_blank">
            <GithubIcon />
          </a>
        )}
      </div>
    </div>
  );
}
