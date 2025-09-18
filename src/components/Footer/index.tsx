import {Mail, Linkedin, Github} from "lucide-react";

export default function Footer() {
  return (
    <footer className="pb-[41px] pt-[58px]">
      <div className="flex max-w-7xl mx-auto justify-between px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h3 className="font-chakra font-bold text-primary">
            Vamos conversar?
          </h3>
          <h2 className="text-6xl font-chakra font-bold text-tertiary">
            Entre em contato
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-6">
          <a
            href="mailto:fernandamascheti@gmail.com"
            className="flex items-center gap-2 text-secondary"
            aria-label="Enviar email para Fernanda"
          >
            <Mail className="w-6 h-6" color="var(--primary)" />
            fernandamascheti@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/fernandamascheti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary underline"
            aria-label="Perfil no LinkedIn"
          >
            <Linkedin className="w-6 h-6" color="var(--primary)" />
            /Fernanda Mascheti
          </a>

          <a
            href="https://github.com/fernandamascheti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-secondary underline"
            aria-label="Perfil no GitHub"
          >
            <Github className="w-6 h-6" color="var(--primary)" />
            /fernandamascheti
          </a>
        </div>
      </div>
      <div className="mt-16 justify-items-center">
        <p className="text-secondary">
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </div>
    </footer>
  );
}
