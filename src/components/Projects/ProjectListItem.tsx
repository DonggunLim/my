import { Project } from "@/model/project";
import Image from "next/image";
import TechLabels from "../TechLabels";

type Props = {
  project: Project;
};

export default function ProjectListItem({
  project: { title, thumbnail, githuburl, images },
}: Props) {
  return (
    <li
      className="group flex gap-x-4 hover:!opacity-100 
    group-hover/list:opacity-50 rounded-md cursor-pointer"
      onClick={() => window.open(githuburl, "_blank")}
    >
      <div className="relative w-1/3 flex-shrink-0">
        <Image
          alt="thumbnail of project"
          src={thumbnail}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="min-h-[120px] basis-2/3">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-sm font-semibold leading-normal">
          부트 캠프기간동안 팀을 이루어서 1주일간 벨로그 클론코딩을 진행한
          프로젝트입니다.
        </p>
        <TechLabels techs={["React", "Vercel"]} />
      </div>
    </li>
  );
}
