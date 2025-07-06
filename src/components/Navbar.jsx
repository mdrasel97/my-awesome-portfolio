import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "contact", id: "contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-zinc-900 shadow-sm">
      <div className="container mx-auto px-4 md:w-[98%] py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-3xl font-bold text-primary cursor-pointer"
        >
          Md Rasel
        </ScrollLink>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button asChild>
              <a
                href="https://drive.google.com/uc?export=download&id=1kyclBgM6ngQ4z4iFT1R3CabIqBYfN_cT"
                download
                className="flex items-center gap-2"
              >
                <motion.span
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                    times: [0, 0.8, 1],
                  }}
                >
                  <Download className="w-5 h-5" />
                </motion.span>
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-900 border-t">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition"
              >
                {link.name}
              </ScrollLink>
            ))}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="w-4/5"
            >
              <Button className="w-full">Contact Me</Button>
            </ScrollLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
