"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import deviatorsLogoMin from "@/assets/logo/sm.svg";
import navItems from "@/data/navItems";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${isScrolled || isMenuOpen ? "bg-black/60 shadow-lg backdrop-blur-lg" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <img
                src={deviatorsLogoMin.src}
                alt="Deviators Logo"
                className="h-6 w-auto md:h-7"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`group rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${isScrolled
                      ? "text-white hover:bg-[#0047AB]/20"
                      : "text-white/90 hover:bg-black/10 hover:text-white"
                    } flex items-center space-x-2 hover:scale-105`}
                >
                  <item.icon className="h-5 w-5 text-white group-hover:text-[#0047AB] transition-colors duration-200" />
                  <span className="group-hover:text-[#0047AB] transition-colors duration-200">{item.name}</span>
                </Link>



              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 ease-in-out ${isScrolled || isMenuOpen
                ? "text-white hover:bg-white/10"
                : "text-white/90 hover:bg-black/10 hover:text-white"
                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${isMenuOpen
          ? "max-h-screen bg-black/60 shadow-lg backdrop-blur-lg"
          : "max-h-0 opacity-0"
          } overflow-hidden`}
      >
        <div className="space-y-2 px-4 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="flex items-center space-x-3 rounded-md px-3 py-3 text-base font-medium text-white transition duration-150 ease-in-out hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
