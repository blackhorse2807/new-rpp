"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe2, Users } from 'lucide-react';

export default function AboutUsSection() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const imageReveal = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1B442E] to-[#2C5A3F] text-white">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforming the Future of
                <span className="block text-[#e2d7ab] mt-2">Plastic Recycling</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                At Velebit Green, we&apos;re revolutionizing the recycling industry through innovative technology 
                and sustainable practices. Our mission is to create a cleaner, greener future for generations to come.
              </p>
              <div className="flex flex-wrap gap-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#e2d7ab] text-[#1B442E] rounded-lg font-semibold hover:bg-[#d6c78f] transition-colors"
                >
                  Join Our Mission <ArrowRight className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/AboutUs/aboutus2.jpg"
                  alt="Sustainable Future"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1B442E] mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-[#e2d7ab] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="w-12 h-12 text-[#1B442E]" />,
                title: "Global Impact",
                description: "Creating sustainable solutions that benefit communities worldwide through innovative recycling practices."
              },
              {
                icon: <Award className="w-12 h-12 text-[#1B442E]" />,
                title: "Excellence",
                description: "Maintaining the highest standards in quality, transparency, and service delivery."
              },
              {
                icon: <Users className="w-12 h-12 text-[#1B442E]" />,
                title: "Collaboration",
                description: "Building strong partnerships with stakeholders to drive positive environmental change."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      delay: index * 0.2
                    }
                  }
                }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#e2d7ab]/20 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1B442E] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 bg-gradient-to-br from-[#1B442E]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative order-2 lg:order-1"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/AboutUs/aboutus.jpg"
                  alt="Our Mission"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              className="space-y-8 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-[#1B442E]">Our Mission</h2>
              <div className="w-24 h-1 bg-[#e2d7ab]" />
              <p className="text-lg text-gray-700 leading-relaxed">
                In recent years, our concerns about the state of our climate have
                intensified. The publication of the 2021 IPCC report was a wake-up
                call—it unequivocally underscored the urgency of addressing climate
                change.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The IPCC warned that only prompt, sweeping action can keep global
                temperature rise within 1.5 °C. Yet, we saw little accountability
                for the emissions driving this crisis. Much damage is already done,
                but time remains: if we act decisively today, we can avert the most
                catastrophic outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section ref={visionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl font-bold text-[#1B442E]">Our Vision</h2>
              <div className="w-24 h-1 bg-[#e2d7ab]" />
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision a world where waste is not an end but a new beginning.
                By seamlessly connecting global communities of producers,
                recyclers, and manufacturers, we aim to transform the lifecycle of
                materials into a thriving circular economy.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our goal is to establish Velebit Green as the benchmark for sustainable
                trade—where every transaction is fast, transparent, and eco-conscious,
                paving the way for a cleaner, greener future for generations to come.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-[#1B442E] mix-blend-multiply opacity-20" />
                <img 
                  src="/AboutUs/aboutus.jpg"
                  alt="Our Vision"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-b from-[#2C5A3F] to-[#1B442E] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-[#e2d7ab] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '1.2M', label: 'Tons of Material Recycled' },
              { number: '240', label: 'Business Partners' },
              { number: '45', label: 'Countries Served' },
              { number: '83%', label: 'Average Cost Reduction' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#e2d7ab]/5 backdrop-blur-lg rounded-xl p-8 text-center border border-[#e2d7ab]/20 hover:bg-[#e2d7ab]/10 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="text-4xl font-bold text-[#e2d7ab] mb-2">{stat.number}</div>
                <div className="text-lg text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}