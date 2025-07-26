import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "CV", path: "/cv" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8 [&>div:nth-child(2)]:bg-c5 [&>div:nth-child(2)]:rounded ">
            {/* Logo */}
            <div className="flex-shrink-0 text-[16px] font-bold text-c4">
              <Link to="/"></Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-5 px-[20px] py-[10px]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`${
                    location.pathname === link.path
                      ? "text-c1 font-semibold text-[16px]"
                      : "text-c4 text-[16px]"
                  } hover:text-c1 transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-c4 focus:outline-none"
              >
                {menuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-md flex flex-col items-center justify-center space-y-6 md:hidden overscroll-hidden
    transform transition-all duration-300 ease-in-out
    ${
      menuOpen
        ? "opacity-100 scale-100 pointer-events-auto"
        : "opacity-0 scale-95 pointer-events-none"
    }
  `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setMenuOpen(false)}
            className={`text-[40px] font-medium ${
              location.pathname === link.path ? "text-c1" : "text-c4"
            } hover:text-c1 transition-colors duration-200`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
