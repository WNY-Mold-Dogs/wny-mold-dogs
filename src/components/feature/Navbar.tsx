import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Our Dog', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20 md:h-32">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="https://storage.helloreaddy.io/project_files/79114f05-41e3-4c1f-a4b7-132d8791291d/babc4672-f2d4-4b81-9773-9d4efd433311_compressed_ChatGPT-Image-Aug-7-2026-11_09_21-AM.webp"
            alt="WNY Mold Dogs"
            className={`h-16 md:h-28 w-auto object-contain transition-all duration-300 ${
              scrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 whitespace-nowrap cursor-pointer ${
                scrolled
                  ? isActive(link.path)
                    ? 'text-[#3a6b1a]'
                    : 'text-gray-700 hover:text-[#3a6b1a]'
                  : isActive(link.path)
                  ? 'text-white font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services#booking"
            className="bg-[#3a6b1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2d5214] transition-colors duration-200 whitespace-nowrap cursor-pointer"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${scrolled ? 'text-gray-800' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`text-xl ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium py-2 cursor-pointer ${
                isActive(link.path) ? 'text-[#3a6b1a]' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services#booking"
            className="bg-[#3a6b1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-[#2d5214] transition-colors whitespace-nowrap cursor-pointer"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;