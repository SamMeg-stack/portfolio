import darkSaasLandingPage from "@/assets/images/project11.png";
import lightSaasLandingPage from "@/assets/images/project2.png";
import aiStartupLandingPage from "@/assets/images/project3.png";
import aiStartupLandingPages from "@/assets/images/project4.png";
import Image from "next/image";
import CheckCircle from "@/assets/icons/CheckCircle";
import ArrowUpRight from "@/assets/icons/ArrowUpRight";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "./SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    id: 1,
    company: "portfolio",
    year: "2023",
    title: "portfolio website built with Next.js",
    results: [
      { title: "Explore My Next.js Portfolio: Skills, Projects & More" },
      { title: "Tailwind-Crafted Portfolio: Projects & Expertise Showcase" },
      { title: "Next.js & Tailwind Portfolio: Dive into My Work" },
    ],
    link: "https://portfolio-livid-two-52.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    id: 2,
    company: "Dev Finder",
    year: "2023",
    title: "devFinder : Modern Dev Search Tool",
    results: [
      { title: "devFinder: Fast Developer Search" },
      { title: "devFinder: Tailored Dev Solutions" },
      { title: "devFinder: Seamless Dev Discovery" },
    ],
    link: "https://dev-finder-murex.vercel.app/",
    image: lightSaasLandingPage,
  },
  {
    id: 3,
    company: "Password Generator",
    year: "2023",
    title: "React Password Generator",
    results: [
      { title: "Secure React Password Generator" },
      { title: "Customizable Passwords with React" },
      { title: "Strong Passwords Made Easy with React" },
    ],
    link: "https://password-generator-neon-tau.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    id: 4,
    company: "Todo App",
    year: "2023",
    title: "React Todo App",
    results: [
      { title: "React Todo: Task Management Simplified" },
      { title: "Effortless Task Tracking with React.js" },
      { title: "Organize with Ease: React Todo App" },
    ],
    link: "https://reactjs-todo-two.vercel.app/",
    image: aiStartupLandingPages,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="Projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world results"
          title="Featured Projects"
          description="see how I transformed concepts into engaging digital expereence ."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-10">
          {portfolioProjects.map((project,index) => (
            <Card
              key={project.id}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" style={{
                top:`calc(64px + ${index *40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result,index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircle classname="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRight classname="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto  lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
