import "./globals.css";
import type {Metadata} from "next";
import {Chakra_Petch, Inter} from "next/font/google";
import Header from "@/components/Header";
import {ThemeProvider} from "next-themes";
import LayerImage from "@/assets/layer.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra-petch",
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL as string;

export const metadata: Metadata = {
  title: "Fernanda Mascheti",
  description:
    "Sou Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes do Ensino Fundamental e Médio. Ensino sobre pensamento computacional usando HTML, CSS e JavaScript. Veja os projetos que já desenvolvi!",
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL(appUrl),
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${chakraPetch.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} min-h-screen flex flex-col antialiased text-foreground transition-colors duration-300`}
      >
        <div
          className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${LayerImage.src})`,
            backgroundPosition: "center 5px",
          }}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Header />
            <main className="flex-1">{children}</main>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
