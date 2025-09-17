"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {Moon, Sun, Code} from "lucide-react";
import {useTheme} from "next-themes";
import {NavItem} from "@/types/common";

export default function Header() {
  const pathname = usePathname();
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const navItems: NavItem[] = [
    {label: "Início", href: "/"},
    {label: "Blog", href: "/blog"},
  ];

  return (
    <header className="mt-[72px] z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-[46px] gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-5 text-lg font-bold text-foreground"
            aria-label="DevBlog Pro - Página inicial"
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
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-2xl transition-colors font-chakra font-bold ${
                      pathname === item.href ? "text-primary" : "text-tertiary"
                    }`}
                  >
                    {item.label}
                  </Link>
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
  );
}
