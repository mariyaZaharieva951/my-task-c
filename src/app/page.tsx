import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Solutions from "./components/Content/Solutions";
import Advantages from "./components/Content/Advantages";
import Cta from "./components/Cta/Cta";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Solutions/>
      <Advantages/>
      <Cta/>
      <Services/>
    </main>
  );
}
