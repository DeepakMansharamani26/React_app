import React,{useEffect} from 'react'
import HeroSection from './HeroSection';
import { useGlobalContext } from './context';
import Services from "./Services";
import Contact from "./Contact";

function Home() {
  
  const { updateHomePage }= useGlobalContext();

  useEffect( () =>updateHomePage(),[]);

  return (
    <>
    <HeroSection />
    <Services/>
    <Contact />
    </>
  )
}

export default Home;
