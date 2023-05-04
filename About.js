import React,{useEffect} from 'react';
import HeroSection from './HeroSection';
import { useGlobalContext } from './context';

function About() {
  
  const { udpateAboutPage }= useGlobalContext();
  useEffect (()=> udpateAboutPage(),[])
  return (
    <HeroSection  />
  );
}

export default About;
