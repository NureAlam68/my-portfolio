'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";



export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    }
    else{
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Navbar>
    <Hero isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Hero>
    <About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></About>
    <Skills isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Skills>
    <Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Projects>
    <Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Contact>
    <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}></Footer>
    </>
  );
}
