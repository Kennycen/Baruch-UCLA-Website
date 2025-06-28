"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import { teamData } from "../../TeamData/data";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedMember]);

  // Helper to get member by slug
  const getMemberBySlug = (slug: string): TeamMember | undefined =>
    Object.values(teamData).find(
      (m: any) => m.name.toLowerCase().replace(/\s+/g, "-") === slug
    );

  // E-board and Board members
  const eboard: TeamMember[] = [
    teamData.anthony,
    teamData.michael,
    teamData.jacky,
    teamData.jamie,
  ];
  const board: TeamMember[] = [
    teamData.jessie,
    teamData.victoria,
    teamData.tiffany,
    teamData.anna,
    teamData.esha,
    teamData.kaylin,
    teamData.bin,
    teamData.kenny,
    teamData.iven,
    teamData.hinson,
    teamData.justin,
    teamData.ivan,
    teamData.mina,
    teamData.stuart,
    teamData.ming,
    teamData.peiling,
    teamData.johnson,
    teamData.anson,
    teamData.fiona,
    teamData.bryan,
  ];

  return (
    <div
      id="team"
      className="w-full flex flex-col items-center justify-center my-10 lg:px-20"
    >
      <h1 className="text-5xl font-bold mb-4">Meet the Team</h1>
      <h2 className="text-3xl font-semibold mb-10">E-board</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
        {eboard.map((member) => (
          <TeamCard
            key={member.name}
            picture={member.image}
            name={member.name}
            title={member.title}
            onReadMore={(slug) =>
              setSelectedMember(getMemberBySlug(slug) || null)
            }
          />
        ))}
      </div>
      <h2 className="text-3xl font-semibold mb-10 mt-14">Board</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
        {board.map((member) => (
          <TeamCard
            key={member.name}
            picture={member.image}
            name={member.name}
            title={member.title}
            onReadMore={(slug) =>
              setSelectedMember(getMemberBySlug(slug) || null)
            }
          />
        ))}
      </div>
      <TeamModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default Team;
