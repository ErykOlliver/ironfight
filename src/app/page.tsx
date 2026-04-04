import Image from "next/image";
import Hero from "../components/showcase/hero";
import NavBar from "../components/interface/navbar";
import SocialProof from "../components/showcase/social-proof";
import Modalities from "../components/showcase/modalities";
import AboutGym from "../components/showcase/about-gym";
import HoursAndLocation from "../components/showcase/hours-location";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <SocialProof />
      <Modalities />
      <AboutGym/>
      <HoursAndLocation/>
    </>
  );
}