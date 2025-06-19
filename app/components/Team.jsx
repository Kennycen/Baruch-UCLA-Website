"use client";
import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";
import { teamData } from "@/TeamData/data";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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
  const getMemberBySlug = (slug) =>
    Object.values(teamData).find(
      (m) => m.name.toLowerCase().replace(/\s+/g, "-") === slug
    );

  // E-board and Board members
  const eboard = [
    teamData.anthony,
    teamData.michael,
    teamData.jacky,
    teamData.jamie,
  ];
  const board = [
    teamData.jessie,
    teamData.victoria,
    teamData.tiffany,
    teamData.anna,
    teamData.esha,
    teamData.kaylin,
    teamData.bin,
    teamData.kenny,
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
            onReadMore={(slug) => setSelectedMember(getMemberBySlug(slug))}
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
            onReadMore={(slug) => setSelectedMember(getMemberBySlug(slug))}
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
