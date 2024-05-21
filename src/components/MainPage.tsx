import Hero from "./Hero";
import Projects from "./Projects/Projects";

export default function Mainpage() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col">
      <Hero />
      <Projects />
    </section>
  );
}
