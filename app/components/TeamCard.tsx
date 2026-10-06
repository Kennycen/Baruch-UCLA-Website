import Image from "next/image";
import React, { useState } from "react";

type TeamCardProps = {
  picture: string;
  title: string;
  name: string;
  onReadMore: (slug: string) => void;
};

const TeamCard = ({ picture, title, name, onReadMore }: TeamCardProps) => {
  const [imageError, setImageError] = useState(false);

  const slug = name.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="w-64 bg-white rounded-2xl pb-4 overflow-hidden border border-gray-500/30 shadow-lg">
      {imageError ? (
        <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Image not available</span>
        </div>
      ) : (
        <Image
          className="w-full h-52 object-cover object-top"
          src={picture}
          alt={`${name} - ${title}`}
          width={400}
          height={400}
          onError={() => {
            console.error(`Failed to load image for ${name}:`, picture);
            setImageError(true);
          }}
        />
      )}
      <div className="flex flex-col items-center px-3">
        <p className="font-medium mt-3 text-xl text-center">{name}</p>
        <p className="text-gray-500 text-base text-center leading-snug min-h-[2.5rem]">
          {title}
        </p>
        <button
          className="rounded-lg bg-[#e9a033] text-sm px-14 py-3 mt-1 text-white hover:bg-[#992933] transition-colors font-semibold cursor-pointer"
          onClick={() => onReadMore(slug)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
