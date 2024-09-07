"use client";

import React from 'react';

const projectList = [
    {
        title: "RESIDENCE-BASED MANAGEMENT SYSTEM FOR STUDENTS 🎉",
        description: "Developed a system to manage student residence information efficiently.",
        url: "https://github.com/Ivyratermgwangqa/SPU-Residence-Management.git",
    },
    {
        title: "GITHUB TOP REPO ANALYSIS PROJECT",
        description: "This project provides an analysis of the top repositories on GitHub based on various metrics such as stars, forks, and activity.",
        url: "https://github.com/Ivyratermgwangqa/github-top-repos-analysis.git",
    },
    {
        title: "My Resume Site",
        description: "A simple site to show off my resume and projects.",
        url: "https://lerato-mgwangqa-portfolio.vercel.app/",
    },
    {
        title: "C PRINTF",
        description: "Implemented a simplified version of the C printf function.",
        url: "https://github.com/Ivyratermgwangqa/printf.git",
    },
    {
        title: "Learnaz-Hub",
        description: "Learnaz Hub is an E-learning platform designed for users of all ages to learn new skills and gain knowledge in various fields.",
        url: "https://learnaz-hub.vercel.app/",
    },
];

const Projects = () => {
    return (
        <section className="py-8 bg-gray-100">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectList.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-700 transition-colors"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;