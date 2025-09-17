import Image from "next/image";

import PersonImage from "@/assets/person.png";
import FrameImage from "@/assets/frame.png";

export default function HeroSection() {
  return (
    <section className="py-[69px] transition-colors duration-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6">
          <Image
            src={PersonImage}
            alt="Fernanda Mascheti - Professora de Programação"
            width={224}
            height={224}
            className="mx-auto rounded-full shadow-lg"
            priority
          />
        </div>

        <p className="text-primary font-bold font-chakra mb-6">
          Olá, meu nome é Fernanda_
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-chakra font-bold mb-6 text-tertiary">
          Eu ensino <span className="text-linear">Programação</span>
        </h1>

        <p className="text-secondary max-w-xl mx-auto">
          Sou Engenheira de Computação e Pedagoga. Ensino pensamento
          computacional para estudantes do Ensino Fundamental e Médio. Ensino
          sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os
          projetos que já desenvolvi!
        </p>

        <div className="flex justify-center mt-[109px]">
          <Image
            src={FrameImage}
            alt="Moldura decorativa"
            width={0}
            height={0}
          />
        </div>
      </div>
    </section>
  );
}
