import Image from "next/image";
import Hero from "../components/showcase/hero";
import NavBar from "../components/interface/navbar";
import SocialProof from "../components/showcase/social-proof";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <SocialProof />
    </>
  );
}