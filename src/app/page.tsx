import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Content/Solutions";
import Advantages from "./components/Content/Advantages";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Solutions/>
      <Advantages/>
    </main>
  );
}
