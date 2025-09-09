import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "work", name: "Services" },
  { id: "contact", name: "Contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? "bg-white shadow-lg" : "bg-white bg-opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer text-primary">
          <Link to="home" smooth duration={500}>
            Leo9 Studio
          </Link>
        </div>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              spy
              offset={-70}
              className="cursor-pointer px-2 py-1 font-medium text-primary hover:text-accent transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-primary transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white p-4 flex flex-col gap-3 text-primary">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth
              duration={500}
              spy
              offset={-70}
              className="cursor-pointer hover:text-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
