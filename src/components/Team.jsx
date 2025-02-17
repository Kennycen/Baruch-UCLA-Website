import Image from 'next/image'
import React from 'react'

const Team = () => {

    const eboardMember = [
        {src: '/images/team/anthony.png', title: '👨‍💼 President 👨‍💼', name: 'Anthony Zhang'},
        {src: '/images/team/michael.png', title: '👔 Vice President 👔', name: 'Michael Jiang'},
        {src: '/images/team/jacky.png', title: '💰 Treasurer 💰', name: 'Jacky Mei'},
        {src: '/images/team/jamie.png', title: '📋 Secretary 📋', name: 'Jamie Wu'},
    ];

    const boardMember = [
        {src: '/images/team/jessie.png', title: '🏞️ Graphics 🏞️', name: 'Jessie Tam'},
        {src: '/images/team/victoria.png', title: '🏞️ Graphics 🏞️', name: 'Victoria Sung'},
        {src: '/images/team/tiffany.png', title: '🏞️ Graphics 🏞️', name: 'Tiffany Lung'},
        {src: '/images/team/anna.png', title: '🪪 Membership 🪪', name: 'Anna Deng'},
        {src: '/images/team/esha.png', title: '🪪 Membership 🪪', name: 'Puspita Esha'},
        {src: '/images/team/kaylin.png', title: '🫂 Philanthropy 🫂', name: 'Kaylin Zhou'},
        {src: '/images/team/bin.png', title: '🫂 Philanthropy 🫂', name: 'Bin Lu'},
        {src: '/images/team/kenny.png', title: '📹 Media Production 📹', name: 'Kenny Cen'},
        {src: '/images/team/iven.png', title: '📹 Media Production 📹', name: 'Iven Yang'},
        {src: '/images/team/hinson.png', title: '💸 Fundraising 💸', name: 'Hinson Dong'},
        {src: '/images/team/justin.png', title: '💸 Fundraising 💸', name: 'Justin Liu'},
        {src: '/images/team/ivan.png', title: '📊 Marketing 📊', name: 'Ivan Tan'},
        {src: '/images/team/mina.png', title: '📊 Marketing 📊', name: 'Mina Chen'},
        {src: '/images/team/stuart.png', title: '⛩️ CLP ⛩️', name: 'Stuart Xu'},
        {src: '/images/team/ming.png', title: '⛩️ CLP ⛩️', name: 'Mingshuo Zhang'},
        {src: '/images/team/peiling.png', title: '🖊️ Assist. Treasurer 🖊️', name: 'Peiling Luo'},
        {src: '/images/team/johnson.png', title: '🖊️ Assist. Treasurer 🖊️', name: 'Johnson Guo'},
        {src: '/images/team/anson.png', title: '🤝 Public Relations 🤝', name: 'Anson Wat'},
        {src: '/images/team/fiona.png', title: '🎏 Events 🎏', name: 'Fiona Cheng'},
        {src: '/images/team/bryan.png', title: '🎏 Events 🎏', name: 'Bryan Ang'},
    ]

  return (
    <div id='team' className='w-full flex flex-col items-center justify-center my-10 lg:px-20'>
        <h1 className='text-5xl font-bold mb-4'>Meet the Team</h1>
        <h2 className='text-3xl font-semibold mb-10'>E-board</h2>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6'>
            {eboardMember.map((member, index) => (
                <div key={index} className='text-center border-2 border-black rounded-lg p-5 drop-shadow-lg transform transition-transform hover:bg-orange hover:scale-105 duration-500 ease-in-out cursor-pointer'>
                    <Image src={member.src} alt={member.name} width={350} height={350} className='rounded-lg mb-3' />
                    <h1 className='font-bold text-lg'>{member.title}</h1>
                    <h2>{member.name}</h2>
                </div>
            ))}
        </div>
        <h2 className='text-3xl font-semibold mb-10 mt-14'>Board</h2>
        <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-6 md:px-6'>
            {boardMember.map((member, index) => (
                <div key={index} className='text-center border-2 border-black rounded-lg p-5 drop-shadow-lg transform transition-transform hover:bg-orange hover:scale-105 duration-500 ease-in-out cursor-pointer'>
                    <Image src={member.src} alt={member.name} width={350} height={350} className='rounded-lg mb-3' />
                    <h1 className='font-bold text-lg'>{member.title}</h1>
                    <h2>{member.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team