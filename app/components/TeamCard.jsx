import Image from "next/image";
import React from "react";

const TeamCard = ({ picture, title, name, onReadMore }) => {
  // Create a slug for the team member (could use id if available)
  const slug = name.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 shadow-lg rounded-2xl">
      <div className="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-500/30">
        <Image
          className="w-64 h-52 object-cover object-top"
          src={picture}
          alt={`${name} - ${title}`}
          width={400}
          height={400}
        />
        <div className="flex flex-col items-center">
          <p className="font-medium mt-3 text-xl">{name}</p>
          <p className="text-gray-500 text-lg">{title}</p>
          <button
            className="rounded-lg bg-[#e9a033] text-sm px-14 py-3 mt-6 text-white hover:bg-[#992933] transition-colors font-semibold cursor-pointer"
            onClick={() => onReadMore(slug)}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
