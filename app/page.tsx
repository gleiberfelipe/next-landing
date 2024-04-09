"use client"

import Logo from "@/components/_logo/logo";
import Service from "../components/_body/bodyOne";
import BodyThree from "../components/_bodyThree/bodyThree"; 
import BodyTwo from "../components/_bodyTwo/bodyTwo"; 
import Footer from "../components/_footer/footer";
import Header from "../components/_header/header";
import HeroCard from "../components/_heroCard/heroCard";

export default function Home() {
  return (
    <>
       <Header/>
       <Logo/>
      <HeroCard/>
      <Service/>
     <BodyTwo/>
      <BodyThree/> 
      <Footer/>
    </>
  );
}