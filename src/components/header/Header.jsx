import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { navLinks } from "../data-display/data";

function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-screen bg-gradient-to-b from-black to-transparent via-transparent">
      <div className="relative container mx-auto py-4">
        <div className="w-full h-[103.75px] flex justify-between items-center px-6">
          <div className="w-[111px] h-[103.75px] bg-contain bg-no-repeat">
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex items-center space-x-6">
            {/* Hamburger menu */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="text-xl">{isMenuOpen ? "✖" : "☰"}</span>
            </button>

            {/* Navigation Links (only visible on large screens) */}
            <nav className="hidden lg:flex space-x-6 py-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={`font-inter text-custom font-semibold leading-custom ${
                    activeLink === href ? "text-[#FD1640]" : "text-white"
                  } hover:text-[#FD1640] transition-colors`}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </nav>
            {/* Connect Wallet Button */}
            <button className="hidden lg:block w-52 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-[20px] p-3 leading-[24px] rounded-lg">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile Menu - shown when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center space-y-4 py-6">
            <button
              className="self-end text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✖
            </button>

            {/* Navigation Links */}
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActiveLink(href);
                  setIsMenuOpen(false);
                }}
                className={`font-inter text-custom font-semibold leading-custom ${
                  activeLink === href ? "text-[#FD1640]" : "text-white"
                } hover:text-[#FD1640] transition-colors`}
                aria-label={label}
              >
                {label}
              </a>
            ))}

            {/* Connect Wallet Button */}
            <button className="w-52 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-[20px] leading-[24px] rounded-lg">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
