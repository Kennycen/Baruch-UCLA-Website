'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { teamData } from '@/data/teamData'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const TeamMember = () => {
  const { id } = useParams()
  const member = teamData[id]

  if (!member) {
    return <div>Member not found</div>
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-32 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/#team" 
            className="mb-8 inline-block text-orange hover:text-red duration-300">
            ← Back to Team
          </Link>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={300} 
                  height={300} 
                  className="rounded-lg w-full"
                />
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">{member.name}</h1>
                <h2 className="text-xl text-orange mb-4">{member.title}</h2>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    className="bg-orange hover:bg-red text-black hover:text-white px-6 py-2 rounded-md duration-300 inline-flex items-center gap-2"
                  >
                    <Image 
                      src="/images/icons/linkedin-icon.png" 
                      width={20} 
                      height={20} 
                      alt="LinkedIn"
                    />
                    LinkedIn
                  </a>
                  <a 
                    href={member.instagram} 
                    target="_blank" 
                    className="bg-orange hover:bg-red text-black hover:text-white px-6 py-2 rounded-md duration-300 inline-flex items-center gap-2"
                  >
                    <Image 
                      src="/images/icons/ig-icon.png" 
                      width={20} 
                      height={20} 
                      alt="Instagram"
                    />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TeamMember 