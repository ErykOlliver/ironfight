import Image from "next/image";
import Hero from "../components/showcase/hero";
import NavBar from "../components/interface/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
    </>
  );
}