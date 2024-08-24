import About from "@/app/(landing)/partials/about";
import Contact from "@/app/(landing)/partials/contact";
import Experience from "@/app/(landing)/partials/experience";
import Intro from "@/app/(landing)/partials/intro";
import Projects from "@/app/(landing)/partials/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/app/(landing)/partials/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* maintenance design */}
      <div className="h-[70vh] w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          This site is under maintenance
        </h1>
        <p className="text-lg text-center mt-4">Please come back later</p>
      </div>
      {/* <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </main>
  );
}
