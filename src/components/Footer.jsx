import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full text-center border-t-2 border-black bg-red">
      <h1 className="text-3xl my-6 text-white font-semibold">
        Connect with Us!
      </h1>
      <div className="mx-auto flex justify-center items-center">
        <Image src="/images/icons/logo.png" width={60} height={60} alt="" />
        <h1 className="text-orange font-bold text-4xl ml-2">UCLA</h1>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-white mx-[10%] mt-12 py-6 text-white">
        <p>2024 UCLA. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              className="hover:text-orange duration-500 ease-in-out"
              href="https://www.instagram.com/baruch_ucla/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="hover:text-orange duration-500 ease-in-out"
              href="https://www.youtube.com/channel/UCfxRby3jYmi7Fm5kIQLNk3A"
            >
              Youtube
            </a>
          </li>
          <li>
            <a
              target="_blank"
              className="hover:text-orange duration-500 ease-in-out"
              href="https://www.facebook.com/baruchucla"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
