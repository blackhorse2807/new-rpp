'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

type Director = {
  name: string;
  title: string;
  image: string;
  email: string;
  linkedin: string;
  description: string;
};

const directors: Director[] = [
  {
    name: 'Prodyut Purkait',
    title: 'Director',
    image: '/directors/director1.jpg',
    email: 'prodyut@dhruvacapital.com',
    linkedin: 'https://www.linkedin.com/in/prodyut-p-69402120/',
    description:
      'Prodyut has previously worked with Axis Bank & has debt investing experience of over 3000 SMEs in eastern India. He is also founder of a fintech startup Swarn Sathi. He has also advised companies for their equity and debt fundraising. Prodyut is an alumnus of IIT Kharagpur & IIM Calcutta.',
  },
  {
    name: 'Tapas Jana',
    title: 'Director',
    image: '/directors/director2.jpg',
    email: 'director2@example.com',
    linkedin: 'https://www.linkedin.com/in/tapas-jana-0091336a/',
    description:
      'With over a decade of experience in the IT domain, Tapas specializes in cloud engineering and software development. He is passionate about building scalable, cloud-native solutions and driving digital transformation through DevOps, CICD, and modern tech practices.',
  },
  {
    name: 'Sisir Jalan',
    title: 'Director',
    image: '/directors/director3.jpeg',
    email: 'director2@example.com',
    linkedin: 'https://www.linkedin.com/in/sisir-jalan-89381262/?originalSubdomain=in',
    description:
      'Mr. Sisir Jalan is an accomplished business leader with a distinguished career spanning multiple industries, including manufacturing, pharmaceuticals, textiles, and agriculture. He currently serves as Director at Servo Packaging Limited and holds directorship positions in eight companies. Over the course of his career, he has been associated with thirteen companies, demonstrating a strong track record of leadership and governance. Mr. Jalan also served as President of the Indian Plastics Federation (IPF) during IndPlas 2022, underscoring his significant contributions to the plastics and packaging sectors.',
  },
];

export default function Team() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1B442E] to-[#2C5A3F] text-white py-20">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Meet Our Leadership</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our team of experienced leaders brings together decades of expertise in sustainability,
              technology, and business innovation to drive our mission forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {directors.map((director, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#1B442E] transition-colors">
                    {director.name}
                  </h3>
                  <p className="text-[#1B442E] font-medium mt-1 mb-4">
                    {director.title}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 mb-6">
                    {director.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <a
                      href={`mailto:${director.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-[#1B442E] transition-colors group/link"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm font-medium">Email</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                    </a>
                    <a
                      href={director.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-[#1B442E] transition-colors group/link"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 transition-all" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1B442E]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1B442E] mb-4">Our Leadership Principles</h2>
            <div className="w-24 h-1 bg-[#e2d7ab] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision & Innovation",
                description: "We embrace forward-thinking approaches and innovative solutions to drive sustainable change in the recycling industry."
              },
              {
                title: "Integrity & Transparency",
                description: "Our leadership is built on a foundation of honesty, ethical practices, and clear communication with all stakeholders."
              },
              {
                title: "Impact & Sustainability",
                description: "We are committed to creating lasting positive impact while ensuring environmental and economic sustainability."
              }
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#1B442E] mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
