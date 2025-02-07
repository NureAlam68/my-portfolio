"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import projectE from "../../assets/projectE.png"
import projectL from "../../assets/luxeway.png"
import projectG from "../../assets/globepass.png"
import projectT from "../../assets/techHive.png"
import projectM from "../../assets/meals.png"
import projectJ from "../../assets/job.png"

const projects = [
    {
      id: 0,
      name: "TechHive",
      description: "TechHive is a platform where users can discover and share the latest tech products like Web Apps, AI tools, Software, Games, and Mobile Apps.",
      tags: ["Tailwind", "React", "MongoDB", "Express", "Jwt"],
      image: projectT,
      source_code_link: "https://github.com/NureAlam68/tech-hive-client",
      live_link: "https://tech-hive-5e087.web.app/",
      challenges: "Handling a large number of concurrent user interactions and ensuring data consistency.",
      improvements: "Enhancing search and filtering options for a better user experience.",
    },
    {
      id: 1,
      name: "LuxeWay",
      description: "LuxeWay is a sleek and modern hotel booking platform designed to provide users with a seamless experience for booking rooms.",
      tags: ["Tailwind", "React", "MongoDB", "Express"],
      image: projectL,
      source_code_link: "https://github.com/NureAlam68/luxe-way-client",
      live_link: "https://luxe-way-2a039.web.app/",
      challenges: "Optimizing the booking engine to prevent double bookings in real-time.",
      improvements: "Integrating AI-based pricing suggestions based on demand and seasonality.",
    },
    {
      id: 2,
      name: "GlobePass",
      description: "GlobePass is a full-stack web application designed to streamline the visa application process.",
      tags: ["Tailwind", "React", "MongoDB", "Express"],
      image: projectG,
      source_code_link: "https://github.com/NureAlam68/globe-pass-client",
      live_link: "https://globe-pass.web.app/",
      challenges: "Ensuring compliance with various country-specific visa regulations and document formats.",
      improvements: "Adding multilingual support to cater to a wider audience globally.",
    },
    {
      id: 3,
      name: "Magical Meals",
      description: "Magical Meals is a modern food delivery and recipe-sharing platform that offers a seamless experience for discovering delicious meals and ordering food online.",
      tags: ["Tailwind", "React", "MongoDB", "Express"],
      image: projectM,
      source_code_link: "https://github.com/NureAlam68/magical-meals-client",
      live_link: "https://magical-meals.web.app/",
      challenges: "Balancing real-time order tracking with restaurant availability updates.",
      improvements: "Implementing a dynamic recommendation system for personalized meal suggestions.",
    },
    {
      id: 4,
      name: "JobNest",
      description: "A smart job posting platform that connects employers with the right candidates by aggregating job listings from various sources. Simplify hiring and job searching with ease.",
      tags: ["Tailwind", "React", "MongoDB", "Express"],
      image: projectJ,
      source_code_link: "https://github.com/NureAlam68/job-nest-client",
      live_link: "https://jobnest-1fa99.web.app/",
      challenges: "Preventing spam job postings and ensuring the credibility of job listings.",
      improvements: "Integrating AI-powered resume screening for better job recommendations.",
    },
    {
      id: 5,
      name: "Espresso Emporium",
      description: "A modern web application to explore, order, and enjoy coffee! Built with a sleek and responsive design.",
      tags: ["Tailwind", "React", "MongoDB", "Express"],
      image: projectE,
      source_code_link: "https://github.com/NureAlam68/espresso-emporium",
      live_link: "https://coffee-store-6e1bf.web.app/",
      challenges: "Managing order surge during peak hours without affecting performance.",
      improvements: "Implementing a loyalty rewards program to enhance customer retention.",
    },
  ];
  
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-Ovo">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="group flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <X className="w-5 h-5 group-hover:text-red-600" />
                  </button>
                </div>

                <div className="relative h-72">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.name}
                    </h2>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-600 text-lg mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenges Overcome</h3>
                      <p className="text-gray-600">{selectedProject.challenges}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Future Improvements</h3>
                      <p className="text-gray-600">{selectedProject.improvements}</p>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Link
                        href={selectedProject.live_link}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </Link>
                      <Link
                        href={selectedProject.source_code_link}
                        target="_blank"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}