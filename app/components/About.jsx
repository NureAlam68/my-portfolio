import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({isDarkMode}) => {
  return (
    <motion.div id="about" className="w-full px-[12%] lg:px-[4%] xl:px-[15%] py-10 scroll-mt-20"
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className="text-center text-5xl font-Ovo">About me</motion.h2>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div 
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.profile_img}
            alt=""
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className="flex-1">
          <p className="mb-10 text-center sm:text-left max-w-4xl font-Ovo">
            Hi, I'm a Chemistry student at the University of Barishal with a
            strong passion for web development. Alongside my studies, I've
            developed skills in HTML, CSS, JavaScript, Tailwind CSS, React.js,
            Firebase, Express.js, Next.js, Bootstrap and MongoBD . I'm also
            continuously learning and honing my coding abilities.
          </p>
          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 1}}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, idx) => (
              <motion.li
              whileHover={{scale: 1.05}}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={idx}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 1.3}}
          className="my-6 text-gray-700 font-Ovo dark:text-white/80">MERN Stack Enthusiast</motion.h4>
          <motion.ul 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 1.5}}
          className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, idx) => (
              <motion.li 
              // whileHover={{scale: 1.05}}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" key={idx}>
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
