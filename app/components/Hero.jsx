import { assets } from "@/assets/assets";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-10">
        <Image src={assets.profile_img} alt="" className="rounded-full w-[160px] h-[160px]" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I'm Nure Alam{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Web developer based in Bangladesh.
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        Passionate about building clean, responsive web solutions with Tailwind
        css, React.js, Next.js, Express.js, and MongoDB, blending analytical
        chemistry skills with coding expertise.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
      <div className="flex gap-4">
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
      </div>
    </div>
  );
};

export default Hero;
