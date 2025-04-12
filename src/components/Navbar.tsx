
import React, { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "#articles" },
    { name: "Cities", path: "#cities" },
    { name: "About", path: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-china-red font-serif text-2xl font-bold">InsiderChina</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-foreground hover:text-china-red transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <button
            aria-label="Search"
            className="p-1 rounded-full hover:bg-muted transition-colors duration-200"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-foreground hover:text-china-red py-2 px-4 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 pl-10 rounded-md border border-input focus:outline-none focus:ring-1 focus:ring-china-red"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
