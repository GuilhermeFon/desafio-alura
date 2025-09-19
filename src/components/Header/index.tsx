"use client";

import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {Moon, Sun, Code} from "lucide-react";
import {useTheme} from "next-themes";
import {useState, useEffect} from "react";
import type {NavItem} from "@/types/common";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [activeSection, setActiveSection] = useState("inicio");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const searchElement = document.getElementById("search-section");
      const scrollY = window.scrollY;

      setIsSticky(scrollY >= 72);

      if (searchElement) {
        const searchPosition = searchElement.offsetTop - 100;

        if (scrollY < searchPosition) {
          setActiveSection("inicio");
        } else {
          setActiveSection("blog");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleNavigateHome = () => {
    setActiveSection("inicio");

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };

  const handleScrollToSearch = () => {
    const searchElement = document.getElementById("search-section");

    if (searchElement) {
      const elementPosition = searchElement.offsetTop - 100;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems: NavItem[] = [
    {label: "Início", href: "/", slug: "inicio", onClick: handleNavigateHome},
    {label: "Blog", href: "/blog", slug: "blog", onClick: handleScrollToSearch},
  ];

  return (
    <>
      {isSticky && <div className="h-[148px] sm:h-[118px]" />}

      <header
        className={`left-0 right-0 py-2 sm:py-0 z-50 ${
          isSticky ? "fixed top-0 bg-background" : "relative mt-[72px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-5 text-lg font-bold text-foreground"
              aria-label="Página inicial"
            >
              <Code
                className="w-[24px] h-[24px] sm:w-[46px] sm:h-[46px]"
                color="var(--primary)"
              />
              <span className="font-chakra font-bold text-xl sm:text-2xl">
                FERNANDA MASCHETI
              </span>
            </Link>

            <nav
              aria-label="Navegação principal"
              className="flex items-center gap-6"
            >
              <ul
                className="flex space-x-4 sm:space-x-8 text-center items-center lg:space-y-0 pt-0"
                role="list"
              >
                {navItems.map((item) => (
                  <li key={item.href} role="listitem">
                    {item.slug === "inicio" ? (
                      <Link
                        href={item.href}
                        onClick={item.onClick}
                        className={`text-2xl transition-colors font-chakra font-bold focus:outline-none focus:ring-0 ${
                          activeSection === item.slug && pathname === "/"
                            ? "text-primary"
                            : "text-tertiary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.onClick}
                        className={`text-2xl transition-colors font-chakra font-bold bg-transparent border-none cursor-pointer focus:outline-none focus:ring-0 ${
                          activeSection === item.slug ||
                          pathname.includes("/blog")
                            ? "text-primary"
                            : "text-tertiary"
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}

                <li role="list" className="flex justify-center">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-foreground text-background transition-colors duration-200 cursor-pointer"
                    aria-label={`Alternar tema (atual: ${theme})`}
                  >
                    {theme === "light" ? (
                      <Moon className="w-4 h-4" />
                    ) : (
                      <Sun className="w-4 h-4" />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
