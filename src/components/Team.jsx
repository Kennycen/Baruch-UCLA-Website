import Image from "next/image";
import Link from "next/link";
import React from "react";

const Team = () => {
  const eboardMember = [
    {
      src: "/images/team/anthony.png",
      title: "👨‍💼 President 👨‍💼",
      name: "Anthony Zhang",
      id: "anthony",
    },
    {
      src: "/images/team/michael.png",
      title: "👔 Vice President 👔",
      name: "Michael Jiang",
      id: "michael",
    },
    {
      src: "/images/team/jacky.png",
      title: "💰 Treasurer 💰",
      name: "Jacky Mei",
      id: "jacky",
    },
    {
      src: "/images/team/jamie.png",
      title: "📋 Secretary 📋",
      name: "Jamie Wu",
      id: "jamie",
    },
  ];

  const boardMember = [
    {
      src: "/images/team/jessie.png",
      title: "🏞️ Graphics 🏞️",
      name: "Jessie Tam",
      id: "jessie",
    },
    {
      src: "/images/team/victoria.png",
      title: "🏞️ Graphics 🏞️",
      name: "Victoria Sung",
      id: "victoria",
    },
    {
      src: "/images/team/tiffany.png",
      title: "🏞️ Graphics 🏞️",
      name: "Tiffany Lung",
      id: "tiffany",
    },
    {
      src: "/images/team/anna.png",
      title: "🪪 Membership 🪪",
      name: "Anna Deng",
      id: "anna",
    },
    {
      src: "/images/team/esha.png",
      title: "🪪 Membership 🪪",
      name: "Puspita Esha",
      id: "esha",
    },
    {
      src: "/images/team/kaylin.png",
      title: "🫂 Philanthropy 🫂",
      name: "Kaylin Zhou",
      id: "kaylin",
    },
    {
      src: "/images/team/bin.png",
      title: "🫂 Philanthropy 🫂",
      name: "Bin Lu",
      id: "bin",
    },
    {
      src: "/images/team/kenny.png",
      title: "📹 Media Production 📹",
      name: "Kenny Cen",
      id: "kenny",
    },
    {
      src: "/images/team/iven.png",
      title: "📹 Media Production 📹",
      name: "Iven Yang",
      id: "iven",
    },
    {
      src: "/images/team/hinson.png",
      title: "💸 Fundraising 💸",
      name: "Hinson Dong",
      id: "hinson",
    },
    {
      src: "/images/team/justin.png",
      title: "💸 Fundraising 💸",
      name: "Justin Liu",
      id: "justin",
    },
    {
      src: "/images/team/ivan.png",
      title: "📊 Marketing 📊",
      name: "Ivan Tan",
      id: "ivan",
    },
    {
      src: "/images/team/mina.png",
      title: "📊 Marketing 📊",
      name: "Mina Chen",
      id: "mina",
    },
    {
      src: "/images/team/stuart.png",
      title: "⛩️ CLP ⛩️",
      name: "Stuart Xu",
      id: "stuart",
    },
    {
      src: "/images/team/ming.png",
      title: "⛩️ CLP ⛩️",
      name: "Mingshuo Zhang",
      id: "ming",
    },
    {
      src: "/images/team/peiling.png",
      title: "🖊️ Assist. Treasurer 🖊️",
      name: "Peiling Luo",
      id: "peiling",
    },
    {
      src: "/images/team/johnson.png",
      title: "🖊️ Assist. Treasurer 🖊️",
      name: "Johnson Guo",
      id: "johnson",
    },
    {
      src: "/images/team/anson.png",
      title: "🤝 Public Relations 🤝",
      name: "Anson Wat",
      id: "anson",
    },
    {
      src: "/images/team/fiona.png",
      title: "🎏 Events 🎏",
      name: "Fiona Cheng",
      id: "fiona",
    },
    {
      src: "/images/team/bryan.png",
      title: "🎏 Events 🎏",
      name: "Bryan Ang",
      id: "bryan",
    },
  ];

  return (
    <div
      id="team"
      className="w-full flex flex-col items-center justify-center my-10 lg:px-20"
    >
      <h1 className="text-5xl font-bold mb-4">Meet the Team</h1>
      <h2 className="text-3xl font-semibold mb-10">E-board</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
        {eboardMember.map((member, index) => (
          <div
            key={index}
            className="text-center border-2 border-black rounded-lg p-5 drop-shadow-xl"
          >
            <Image
              src={member.src}
              alt={member.name}
              width={350}
              height={350}
              className="rounded-lg mb-3"
            />
            <h1 className="font-bold text-lg">{member.title}</h1>
            <h2>{member.name}</h2>
            <Link
              href={`/team/${member.id}`}
              className="mt-4 inline-block bg-orange hover:bg-red hover:text-white text-black px-6 py-3 rounded-md duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-semibold mb-10 mt-14">Board</h2>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6">
        {boardMember.map((member, index) => (
          <div
            key={index}
            className="text-center border-2 border-black rounded-lg p-5 drop-shadow-xl"
          >
            <Image
              src={member.src}
              alt={member.name}
              width={350}
              height={350}
              className="rounded-lg mb-3"
            />
            <h1 className="font-bold text-lg">{member.title}</h1>
            <h2>{member.name}</h2>
            <Link
              href={`/team/${member.id}`}
              className="mt-4 inline-block bg-orange hover:bg-red hover:text-white text-black px-6 py-3 rounded-md duration-300"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
