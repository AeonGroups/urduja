import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Recognition } from "@/components/Recognition";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Recognition />
      <Contact />
    </>
  );
}
