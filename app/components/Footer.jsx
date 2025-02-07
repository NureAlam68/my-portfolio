import { assets } from "@/assets/assets";
import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <Image src={assets.logo} alt="logo" width={40} height={40} className="rounded-full" />
          <p className="text-xl font-semibold font-Outfit">Nure Alam</p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-4 text-lg">
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

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Nure Alam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
