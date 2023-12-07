import { Project } from "@/model/project";
import { client, urlFor } from "./sanity";

export async function getProjects() {
  return client
    .fetch(
      `*[_type=="project"]{
    ...,
    "id" : _id,
  }`,
      undefined,
      { cache: "no-store" }
    )
    .then(mappingImage);
}

function mappingImage(projects: Project[]) {
  return projects.map((project) => ({
    ...project,
    thumbnail: urlFor(project.thumbnail),
    images: project.images.map((image) => urlFor(image)),
  }));
}
