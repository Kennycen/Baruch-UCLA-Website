"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 w-full z-100">
      <nav className="h-[70px] relative w-full py-10 px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
        <Link href="/">
          <Image
            src="/images/icons/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </Link>

        <ul className="md:flex hidden items-center gap-10">
          <li>
            <Link
              href="/#hero"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#pillars"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              Pillars
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/#events"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              href="/#culture"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              Culture
            </Link>
          </li>
          <li>
            <Link
              href="/#team"
              className="text-lg hover:text-orange-400 ease-in-out transition"
            >
              Team
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="hidden md:flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-md text-gray-800 rounded-lg bg-[#e9a033] hover:text-white hover:bg-[#992933] hover:border-cyan-500/30 active:scale-95 transition cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/baruch_ucla/", "_blank")
          }
        >
          <Globe className="w-5 h-5" />
          Instagram
        </button>

        <button
          onClick={toggleMobileMenu}
          aria-label="menu-btn"
          type="button"
          className="inline-block md:hidden cursor-pointer p-2 rounded-md hover:bg-gray-400/10"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>

        <div
          className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 shadow-lg rounded-b-xl border-t border-gray-200 transition-all duration-300 ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <ul className="flex flex-col space-y-2 text-lg">
            <li>
              <Link
                href="/#hero"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#pillars"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pillars
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#events"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/#culture"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Culture
              </Link>
            </li>
            <li>
              <Link
                href="/#team"
                className="text-sm py-2 px-3 rounded transition-colors hover:bg-gray-100 hover:text-[#e9a033]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="bg-[#e9a033] text-white border flex justify-center items-center cursor-pointer gap-2 border-gray-300 mt-6 text-sm hover:bg-[#992933] active:scale-95 transition-all w-40 h-11 rounded-lg font-semibold shadow"
            onClick={() =>
              window.open("https://www.instagram.com/baruch_ucla", "_blank")
            }
          >
            <Globe className="w-5 h-5" />
            Instagram
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
