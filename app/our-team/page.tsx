// app/our-team/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X,  Mail, Globe, ChevronRight, Sparkles } from "lucide-react";

// Team Member Type
interface TeamMember {
  id: number;
  name: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  image: string;
  social?: {
    linkedin?: string;
    X?: string;
    email?: string;
    facebook?: string;
  };
}

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Layo Obidike",
    title: "CEO & Founder",
    shortBio: "Layo Obidike is a visionary entrepreneur and CEO of Thriveon Entrepreneur. She is a revolutionary who is dedicated to empowering individuals...",
    fullBio: [
      "Layo Obidike is a visionary entrepreneur and CEO of Thriveon Entrepreneur. She is a revolutionary who is dedicated to empowering individuals to achieve their full potential. With a passion for innovation and a commitment to excellence, Layo has established herself as a leader in the incubation industry.",
      "She is dedicated to leveraging Thriveon as a platform that fosters wisdom and growth among entrepreneurs. With a rich background in leadership and business strategy, Layo has built Thriveon Entrepreneur into a thriving hub for entrepreneurial insight and development.",
      "Under Layo's guidance, Thriveon Entrepreneur has become a beacon for innovative thinking and practical wisdom. She has leveraged her extensive experience to create a nurturing environment where entrepreneurs can access valuable resources, connect with like-minded individuals, and gain the knowledge needed to excel in their ventures.",
      "Layo's leadership is characterized by her commitment to empowering others, a deep understanding of the entrepreneurial landscape, and a passion for continuous learning. Her strategic vision and hands-on approach have driven ThriveON's success, making it an indispensable resource for aspiring and established entrepreneurs alike.",
      "As CEO, Layo remains dedicated to her mission of supporting entrepreneurial growth through wisdom, collaboration, and actionable insights, ensuring that Thriveon Entrepreneur continues to lead the way in the ever-evolving world of business.",
      "Layo possesses a unique ability to envision and shape the future of entrepreneurship, innovation, and personal growth. She motivates and empowers individuals to achieve their goals and reach new heights. Layo is a creative problem solver, always seeking new and innovative solutions to drive growth and success."
    ],
    image: "/layo.jpg",
    social: {
      linkedin: "https://ithriveonwisdom.com/our-team-layo-obidike/your-linkedin-url",
      X: "https://ithriveonwisdom.com/our-team-layo-obidike/your-X-url",
      email: "layo@thriveonwisdom.com",
      facebook: "https://ithriveonwisdom.com/our-team-layo-obidike/your-facebook-url"
    }
  },
  {
    id: 2,
    name: "Oluwafemi M. Odebowale",
    title: "Mentorship Coordinator",
    shortBio: "Femi Odebowale serves as the Mentorship Coordinator at Thriveon Entrepreneur, where he cultivates impactful mentorship relationships...",
    fullBio: [
      "Femi Odebowale serves as the Mentorship Coordinator at Thriveon Entrepreneur, where he cultivates impactful mentorship relationships between professionals and startup founders. With over 15 years of experience in Education and leadership across Africa, Femi brings a wealth of expertise to his role.",
      "He is also a seasoned Educational Consultant and School Growth Expert, who has founded and co-founded organizations like Divine Generals Leader's Network, Edpower, and Knowledge Economy International (KEI). He holds a First Degree in Biological Science Education from TASUED and a Master's Degree in Educational Administration and Planning from UNILAG.",
      "Femi is a talent enthusiast, motivational speaker, and author of several self-development books, including 'Understanding the What and Why of Life', 'Caught Court Cut', and 'Identity'. He has inspired thousands of young people to discover their purpose, overcome addiction and distraction, and excel in their chosen career.",
      "Femi's commitment to mentorship, education, and leadership development empowers individuals and organizations to achieve their growth objectives. His strategic approach and expertise contribute to fostering entrepreneurial success and talent development across Africa."
    ],
    image: "/femi.jpg",
   
  },
  {
    id: 3,
    name: "Kennie Oyinloye",
    title: "Chief Technology Officer (CTO)",
    shortBio: "As the Chief Technology Officer (CTO) at Thriveon Entrepreneur, Kennie spearheads the strategic management of technological initiatives...",
    fullBio: [
      "As the Chief Technology Officer (CTO) at Thriveon Entrepreneur, Kennie spearheads the strategic management of technological initiatives and infrastructure within the Thriveon.",
      "Kennie oversees the development and execution of Thriveon Entrepreneur's technological roadmap. He ensures that the incubator's technological investments align with its mission to support and empower startups. His strategic guidance facilitates the adoption of innovative solutions that enhance operational efficiency and scalability.",
      "He provides hands-on technical guidance to startups, empowering them to leverage cutting-edge technologies effectively. He facilitates workshops and mentoring sessions that equip entrepreneurs with the knowledge and skills necessary to navigate technological challenges and opportunities.",
      "Kennie remains at the forefront of technological trends and advancements. He continuously evaluates emerging technologies and industry best practices to inform strategic decisions and keep Thriveon Entrepreneur ahead of the curve.",
      "Kennie Oyinloye brings over a decade of expertise in IT with a robust track record in web and mobile applications technology, enabling him to deliver impactful solutions that drive business growth and success. Kennie holds degrees in Computer Science and Programming. He has certifications in programming, digital marketing and SEO. He also holds an MBA from Tekedia Institute.",
      "Kennie Oyinloye's tenure as Chief Technology Officer at Thriveon Entrepreneur reflects his commitment to leveraging technology as a catalyst for innovation and entrepreneurial excellence."
    ],
    image: "/kenny.jpg",
  
  },
  {
    id: 4,
    name: "Abiodun Jayeola",
    title: "Marketing & Communications Lead",
    shortBio: "Abiodun Jayeola leads the marketing and communications efforts at Thriveon Entrepreneur, driving strategic initiatives...",
    fullBio: [
      "Abiodun Jayeola leads the marketing and communications efforts at Thriveon Entrepreneur, driving strategic initiatives to enhance the incubator program's visibility and impact.",
      "Abiodun oversees the development and implementation of comprehensive marketing and branding strategies for Thriveon Entrepreneur. His strategic vision ensures consistent messaging and effective positioning of the program within the entrepreneurial ecosystem.",
      "He leverages his expertise to maintain a strong public relations presence and enhance the program's reputation. He promotes the incubator program through various channels, engaging with stakeholders, partners, and the community.",
      "Abiodun Jayeola brings many years of experience in marketing and communications, specializing in marketing and corporate communications, brands strategic communications, media communications, and public relations.",
      "As the Team Lead of Marketing and Communications at Thriveon Entrepreneur, he underscores his dedication to promoting innovation and supporting startup success through effective marketing and communication strategies."
    ],
    image: "/abiodun.jpg",
  
  },
  {
    id: 5,
    name: "Julius Edicha",
    title: "Technical Expert",
    shortBio: "Julius Edicha plays a critical role as a Technical Expert at Thriveon Entrepreneur, where he combines his deep technical expertise...",
    fullBio: [
      "Julius Edicha plays a critical role as a Technical Expert at Thriveon Entrepreneur, where he combines his deep technical expertise with creative insights to enhance user experience and interface design.",
      "In his role, Julius is responsible for developing and implementing user-facing features of Thriveon Entrepreneur's digital platforms. He ensures that the user interface is intuitive, visually appealing, and responsive across various devices.",
      "Julius collaborates closely with the design and product teams to optimize user experience (UX) design. By integrating user feedback and industry best practices, he continuously improves usability and accessibility.",
      "His extensive knowledge in front-end development, including proficiency in HTML, CSS, Tailwind CSS, JavaScript, and frameworks like React and Next.js, allows him to build performant and scalable applications.",
      "Julius holds a certification from the National Information Technology Development Agency (NITDA), underscoring his commitment to professional growth and excellence. With years of experience and a strong portfolio, Julius is passionate about creating engaging and functional digital interfaces."
    ],
    image: "/julius.jpg",
 
  },
  {
    id: 6,
    name: "Deborah Labija",
    title: "Outreach & Communications Strategist",
    shortBio: "Deborah Labija is the driving force behind Thriveon Entrepreneur's outreach and communication strategy, leveraging many years of expertise...",
    fullBio: [
      "Deborah Labija is the driving force behind Thriveon Entrepreneur's outreach and communication strategy, leveraging many years of expertise in marketing and communications to amplify the program's impact.",
      "Deborah orchestrates comprehensive marketing campaigns that attract startups, mentors, and partners to Thriveon Entrepreneur. Her strategic insights ensure that the program's unique value propositions resonate effectively in the competitive startup ecosystem.",
      "She is known for her ability to craft engaging narratives. Debs, as she is fondly called, highlights the transformative journeys of startups supported by Thriveon Entrepreneur through impactful case studies and success stories.",
      "Deborah cultivates meaningful relationships with media outlets and industry influencers, positioning Thriveon Entrepreneur as a thought leader in entrepreneurship and innovation.",
      "Before joining Thriveon Entrepreneur, Deborah honed her skills in Gongoni Company Ltd, WJ Bush, FEZON International, Lit-life Organization, and YFCF, Oduduwa University. She holds a Bachelor's degree in Computer Science, Certification in Project Management, Certification in Teamwork and Conflict Resolution, and Certification in Social Media Marketing.",
      "Deborah Labija is dedicated to fostering an inclusive and supportive ecosystem where innovation flourishes and entrepreneurial dreams become reality."
    ],
    image: "/deborah.jpg",

  }
];

// Modal Component
function TeamModal({ member, onClose }: { member: TeamMember | null; onClose: () => void }) {
  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-3xl w-full max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-gray-100 shadow-md transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>

          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[85vh]">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-amber-500 p-6 pt-12 text-white">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold text-white border-4 border-white shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold">{member.name}</h2>
                  <p className="text-white/90 mt-1">{member.title}</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="p-6">
              {member.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}

              {/* Social Links */}
              {member.social && (
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Connect With Me:</h3>
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                      >
                      </a>
                    )}
                    {member.social.X && (
                      <a
                        href={member.social.X}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white transition-all"
                      >
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.facebook && (
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Back Button */}
              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function OurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <main className="min-h-screen bg-white overflow-hidden pt-16 md:pt-20">
      {/* Hero Section */}
         <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/team.jpg"
            alt="Team background"
            fill
            className="object-cover"
            priority
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        
        {/* Background decorative blur elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-white text-sm font-semibold">About Us</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Empowering{' '}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent">
                individuals and organizations
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-12"
            >
              Welcome to ThriveOn – your ultimate destination for small business solutions, 
              entrepreneurial guidance, and impactful non-profit initiatives. We are committed 
              to empowering individuals and organizations across the globe to thrive and succeed 
              in their respective endeavors.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 mx-auto rounded-full"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-blue-600/20 to-amber-500/20 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={208}
                      height={208}
                      className="w-54 h-54 rounded-full object-cover shadow-lg"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-amber-600 text-sm font-medium mb-3">{member.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {member.shortBio}
                    </p>
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:gap-2 transition-all group-hover:text-blue-700"
                    >
                      Read more
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </main>
  );
}