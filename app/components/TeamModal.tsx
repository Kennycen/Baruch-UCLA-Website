import React from "react";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

interface TeamModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const TeamModal = ({
  member,
  onClose,
}: TeamModalProps): React.JSX.Element | null => {
  if (!member) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="md:grid md:grid-cols-2 max-w-4xl bg-white mx-4 md:mx-auto rounded-xl">
        <Image
          src={member.image}
          alt={member.name}
          className="hidden md:block w-full max-w-lg rounded-l-xl object-cover"
          width={400}
          height={400}
        />
        <div className="relative flex items-center justify-center">
          <button
            className="absolute top-6 right-6 bg-gray-200 rounded-full p-2.5 hover:bg-gray-300 transition-colors cursor-pointer"
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 2 2 13M2 2l11 11"
                stroke="#1F2937"
                strokeOpacity=".7"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="max-md:py-20 px-6 md:px-10 text-center">
            <h1 className="text-3xl font-bold mb-2">
              <span className="text-[#e9a033]">{member.name}</span>
            </h1>
            <p className="text-gray-600 text-lg font-semibold mb-4">
              {member.title}
            </p>
            <p className="text-gray-700 mb-6">{member.bio}</p>
            <div className="flex justify-center gap-4 mb-2">
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/icons/linkedin-icon.png"
                    width={30}
                    height={30}
                    alt="linkedin icon"
                  />
                </a>
              )}
              {member.instagram && (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/images/icons/ig-icon.png"
                    width={30}
                    height={30}
                    alt="instagram icon"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
