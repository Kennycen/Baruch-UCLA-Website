"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe, X } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "#pillars", label: "Pillars" },
  { href: "/#about", label: "About" },
  { href: "/#events", label: "Events" },
  { href: "/#culture", label: "Culture" },
  { href: "/#team", label: "Team" },
] as const;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((open) => !open);
  };

  useEffect(() => {
    const onScroll = (): void => {
      const scrolled = window.scrollY > 80;
      setIsVisible(scrolled);
      if (!scrolled) {
        setIsMobileMenuOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  const hamburgerButton = (variant: "nav" | "hero"): React.JSX.Element => (
    <button
      onClick={toggleMobileMenu}
      aria-expanded={isMobileMenuOpen}
      aria-controls="mobile-nav-menu"
      aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      type="button"
      className={
        variant === "nav"
          ? "inline-flex md:hidden cursor-pointer min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-gray-400/10 active:scale-95 transition"
          : "md:hidden fixed top-5 right-6 z-50 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm shadow-lg active:scale-95 transition"
      }
    >
      {isMobileMenuOpen && variant === "hero" ? (
        <X className="h-6 w-6" aria-hidden />
      ) : (
        <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              variant === "nav" ? "bg-gray-600" : "bg-white"
            } ${isMobileMenuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              variant === "nav" ? "bg-gray-600" : "bg-white"
            } ${isMobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              variant === "nav" ? "bg-gray-600" : "bg-white"
            } ${isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </div>
      )}
    </button>
  );

  return (
    <>
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="relative w-full h-[70px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D]">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/icons/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
              priority
            />
          </Link>

          <ul className="md:flex hidden items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg hover:text-orange-400 ease-in-out transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
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

          {hamburgerButton("nav")}
        </nav>
      </div>

      {!isVisible && hamburgerButton("hero")}

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          tabIndex={isMobileMenuOpen ? 0 : -1}
        />

        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute left-0 right-0 top-0 max-h-[min(100dvh,520px)] overflow-y-auto rounded-b-2xl bg-white shadow-xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <Link href="/" onClick={closeMobileMenu} className="shrink-0">
              <Image
                src="/icons/logo.png"
                alt="Logo"
                width={56}
                height={56}
                className="object-contain h-12 w-12"
              />
            </Link>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 active:scale-95 transition"
            >
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>

          <nav className="px-4 py-3">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-12 items-center rounded-xl px-4 text-lg font-medium text-gray-800 transition-colors hover:bg-[#e9a033]/10 hover:text-[#992933] active:bg-[#e9a033]/20"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-4 flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-[#e9a033] px-4 text-base font-semibold text-black shadow-md hover:bg-[#992933] hover:text-white active:scale-[0.98] transition"
              onClick={() => {
                closeMobileMenu();
                window.open("https://www.instagram.com/baruch_ucla/", "_blank");
              }}
            >
              <Globe className="h-5 w-5" aria-hidden />
              Instagram
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
