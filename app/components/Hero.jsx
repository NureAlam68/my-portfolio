import { assets } from "@/assets/assets";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mt-10"
      >
        <Image
          src={assets.heroImg}
          alt=""
          className="rounded-full w-[180px] h-[180px] border-4 dark:border-white"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-3xl mb-3 font-Ovo"
      >
        Hi! I'm Nure Alam{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        MERN Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo"
      >
        MERN stack developer specializing in building fast, responsive, and scalable web applications using React.js, Next.js, Express.js, Node.js, and MongoDB with clean Tailwind CSS designs.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2 bg-white dark:text-black"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="flex gap-4"
      >
        <Facebook
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100019022316999",
              "_blank"
            )
          }
          className="hover:text-blue-400 text-xl cursor-pointer"
        />
        <Github
          onClick={() => window.open("https://github.com/NureAlam68", "_blank")}
          className="hover:text-blue-400 text-xl cursor-pointer"
        />
        <Linkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/md-nure-alam-444887266/",
              "_blank"
            )
          }
          className="hover:text-blue-400 text-xl cursor-pointer"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
