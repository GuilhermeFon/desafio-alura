import HeroSection from "@/components/HeroSection";
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Fernanda Mascheti",
    description:
      "Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os projetos que já desenvolvi!",
  };
}

export default async function Home() {
  return (
    <>
      <HeroSection />
    </>
  );
}
