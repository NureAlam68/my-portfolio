'use client'
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";



export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Skills></Skills>
    </>
  );
}
