import { Project } from "@/model/project";
import GithubIcon from "../Icons/GithubIcon";
import ProjectCarousel from "../Carousel/ProjectCarousel";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectDetail({
  project: { title, githuburl, images },
}: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl uppercase font-bold">{title}</h1>
        {githuburl && (
          <a href={githuburl} target="_blank">
            <GithubIcon />
          </a>
        )}
      </div>
      <ProjectCarousel>
        {images.map((image, index) => (
          <div key={index} className="w-[500px] h-[500px]">
            <Image
              src={image}
              alt="project image"
              fill
              sizes="1000"
              className="object-contain"
              key={index}
            />
          </div>
        ))}
      </ProjectCarousel>
    </div>
  );
}
