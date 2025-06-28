import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm">
      <div className="container mx-auto px-4 md:w-[98%] py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="text-3xl font-bold text-primary">
          Md Rasel
        </Link>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side (Desktop + Mobile) */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle - always visible */}
          <ModeToggle />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button asChild>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                    times: [0, 0.8, 0], // 80% down, then snap back quickly
                  }}
                >
                  <FaDownload className="text-base" />
                </motion.span>
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Mobile: Hamburger Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-4/5">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Me
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
