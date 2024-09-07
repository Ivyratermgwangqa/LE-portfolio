"use client";

import TypingAnimation from './components/ui/TypingAnimation';

const HomeSection = () => (
  <section id="home" className="text-center py-20">
    <h2 className="text-4xl font-bold mb-6">Welcome to Leratos Portfolio</h2>
    <p className="text-xl mb-4">
      <TypingAnimation text="I'm a software engineer, AI enthusiast, and tech lover." />
    </p>
    <p className="text-lg text-gray-600">Explore my projects and learn more about my journey.</p>
  </section>
);

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
    <p className="text-lg text-gray-700 text-center mb-6">
      Here are some of the projects Ive been working on.
    </p>
    {/* Add your project details here */}
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20">
    <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
    <p className="text-lg text-gray-700 text-center mb-6">
      Learn more about my background, skills, and experiences.
    </p>
    {/* Add your about me details here */}
  </section>
);

export default function HomeAndProjects() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}