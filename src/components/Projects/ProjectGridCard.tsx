"use client";

import { Project } from "@/model/project";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { useState } from "react";
import GithubIcon from "../Icons/GithubIcon";
import DialogPortal from "../Modal/DialogPortal";
import ProjectDialog from "../Modal/ProjectDialog";
import ProjectDetail from "./ProjectDetail";

type Props = {
  project: Project;
};

export default function ProjectGridCard({ project }: Props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="relative w-full aspect-square shadow-md">
      <Image
        className="object-cover rounded-lg"
        src={project.thumbnail}
        alt="project thumbnail"
        fill
        sizes="650px"
        onClick={() => setToggle(true)}
      />
      {toggle && (
        <DialogPortal>
          <ProjectDialog onClose={() => setToggle(false)}>
            <ProjectDetail project={project} />
          </ProjectDialog>
        </DialogPortal>
      )}
    </div>
  );
}
