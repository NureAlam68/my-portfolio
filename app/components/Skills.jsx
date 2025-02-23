import React from "react";
import { Wrench, MonitorSmartphone, Server } from "lucide-react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import tailwind from "../../assets/tailwind.png";
import javaScript from "../../assets/javascript.png";
import github from "../../assets/github.png";
import figma from "../../assets/figma.png";
import pixso from "../../assets/pixso.png";
import vscode from "../../assets/vscode.png";
import firebase from "../../assets/firebase.png";
import react from "../../assets/reactjs.png";
import express from "../../assets/expressjs.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/nodejs.png";
import next from "../../assets/nextjs.png";
import Image from "next/image";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    skills: [
      { name: "HTML5", imageUrl: html },
      { name: "CSS3", imageUrl: css },
      { name: "JavaScript", imageUrl: javaScript },
      { name: "React", imageUrl: react },
      { name: "Tailwind", imageUrl: tailwind },
      { name: "Next Js", imageUrl: next },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", imageUrl: node },
      { name: "Express.js", imageUrl: express },
      { name: "MongoDB", imageUrl: mongodb },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "VS Code", imageUrl: vscode },
      { name: "GitHub", imageUrl: github },
      { name: "Figma", imageUrl: figma },
      { name: "Pixso", imageUrl: pixso },
      { name: "Firebase", imageUrl: firebase },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="skill"
      className="py-20 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl font-bold text-center mb-4 font-Ovo"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12 font-Ovo"
        >
          Here are the technologies and tools I use to build modern and
          efficient web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              key={category.title}
              className="backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:shadow-black border dark:border-gray-700 dark:hover:shadow-white dark:hover:bg-darkHover/50"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s backwards`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center border gap-2 p-3 rounded-lg hover:bg-purple-500/10 transition-colors group"
                    style={{
                      animation: `slideUp 0.3s ease-out ${
                        index * 0.2 + skillIndex * 0.1
                      }s backwards`,
                    }}
                  >
                    <Image
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                    />
                    <span className="font-semibold transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
