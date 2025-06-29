import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-[#992933]">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
          <div className="max-w-96">
            <Image
              src="/images/icons/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="object-contain"
            />
            <p className="mt-6 text-sm text-white">
              The United Chinese Language Association (UCLA) at Baruch College
              promotes Chinese culture.
            </p>
            <div className="flex items-center gap-3 mt-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/baruch_ucla"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="#E4405F"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="#FF0000"
                  />
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com/invite/8kfVbWvC4Q"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3.1a.077.077 0 0 0-.082.038c-.357.63-.755 1.453-1.037 2.104a18.524 18.524 0 0 0-5.49 0 12.683 12.683 0 0 0-1.05-2.104.077.077 0 0 0-.082-.038A19.736 19.736 0 0 0 3.684 4.369a.07.07 0 0 0-.032.027C1.533 7.651.371 10.825.151 13.965a.082.082 0 0 0 .028.063c2.104 1.548 4.144 2.488 6.152 3.115a.077.077 0 0 0 .084-.027c.472-.65.893-1.34 1.262-2.066a.076.076 0 0 0-.041-.104c-.672-.254-1.312-.563-1.927-.927a.077.077 0 0 1-.008-.127c.13-.098.26-.2.384-.304a.074.074 0 0 1 .077-.01c4.056 1.855 8.447 1.855 12.47 0a.075.075 0 0 1 .078.009c.124.104.254.206.384.304a.077.077 0 0 1-.006.127 11.578 11.578 0 0 1-1.929.927.076.076 0 0 0-.04.105c.37.726.792 1.416 1.262 2.066a.076.076 0 0 0 .084.027c2.01-.627 4.05-1.567 6.153-3.115a.077.077 0 0 0 .028-.063c-.25-3.18-1.412-6.354-3.501-9.569a.07.07 0 0 0-.033-.027zM8.02 14.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.974 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.21 0 2.175 1.094 2.157 2.418 0 1.334-.947 2.419-2.157 2.419z"
                    fill="#5865F2"
                  />
                </svg>
              </a>

              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/company/baruchucla"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/icons/linkedin-icon.png"
                  width={20}
                  height={20}
                  alt="linkedin icon"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/baruchucla"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#1877F2"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
              <h2 className="font-semibold mb-5 text-white">Quick Links</h2>
              <ul className="text-sm text-white space-y-2 list-none">
                <li>
                  <a
                    href="https://linktr.ee/baruch_ucla?fbclid=PAZXh0bgNhZW0CMTEAAaePlhj2fvcy7D5Hg0W31riyqBSjcJZglERgrV3g4Vpx5ugsB3v-_dzm_yvLTA_aem_Ac19x6JJdOiyJKAXcnQing"
                    target="_blank"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Link Tree
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@baruch_ucla"
                    target="_blank"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/baruch_ucla"
                    target="_blank"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-white mb-5">College Club</h2>
              <ul className="text-sm text-white space-y-2 list-none">
                <li>
                  <a
                    href="#about"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/baruch_ucla"
                    target="_blank"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#e9a033] transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#e9a033] w-full">
        <p className="py-4 text-center text-xs md:text-sm text-black ">
          Copyright 2025 © Baruch UCLA. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
