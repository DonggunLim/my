import { Project } from "@/model/project";
import Image from "next/image";

type Props = {
  project: Project;
};

export default function ProjectGridCard({ project: { thumbnail } }: Props) {
  return (
    <div className="relative w-full aspect-square">
      <Image
        className="object-cover"
        src={thumbnail}
        alt="project thumbnail"
        fill
        sizes="650px"
      />
    </div>
  );
}
