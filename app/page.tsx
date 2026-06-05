"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  FaLinkedin,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa"

export default function Home() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {

    const updateMousePosition = (e: MouseEvent) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }

  }, [])

  return (
    <main className="bg-[#030303] text-white min-h-screen overflow-hidden relative">

      {/* Mouse Glow Effect */}
      <motion.div
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
          mass: 0.5,
        }}
className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none z-0"
      />

      {/* Secondary Purple Glow */}
      <motion.div
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 25,
          mass: 1,
        }}
className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none z-0"
      />

      {/* Static Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[400px] right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

        <div className="flex justify-between items-center px-6 md:px-10 py-5">

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide relative z-50">
            Swati Goel
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-gray-300">

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#expertise" className="hover:text-white transition">
              Expertise
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl relative z-50"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl"
        >

          <div className="flex flex-col px-6 pb-6 pt-2 gap-6 text-lg text-gray-300">

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              Experience
            </a>

            <a
              href="#expertise"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              Expertise
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </motion.div>

      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#030303]"></div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 uppercase tracking-[4px] md:tracking-[8px] mb-6 relative z-10 text-sm md:text-base"
        >
          Founder • Architect • Technology Leader
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight max-w-6xl relative z-10"
        >

          Building Modern
          <br />

          <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Digital Infrastructure
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 mt-10 max-w-3xl leading-8 md:leading-9 relative z-10 px-4"
        >

          Delivering scalable architecture, enterprise systems,
          cloud infrastructure, and innovation-driven platforms.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 relative z-10"
        >

          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition duration-300"
          >
            Contact
          </a>

          <a
            href="https://www.linkedin.com/in/swati-goel-47598226/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition duration-300"
          >
            View LinkedIn
          </a>

        </motion.div>

      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 md:py-32 px-6 md:px-24 relative z-10"
      >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-12"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-12"
        >

          <p className="text-lg md:text-xl text-gray-300 leading-9 md:leading-10 max-w-5xl">

            Experienced technology leader with expertise in scalable software architecture,
            enterprise systems, Android platforms, backend infrastructure,
            cloud technologies, cybersecurity, and product engineering.

            <br /><br />

            Proven experience leading engineering operations,
            architecting modern digital solutions,
            and delivering scalable enterprise-grade applications.

          </p>

        </motion.div>

      </section>

      {/* Experience */}
      <section
        id="experience"
        className="py-24 md:py-32 px-6 md:px-24 relative z-10"
      >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-20"
        >
          Experience
        </motion.h2>

        <div className="space-y-14 border-l border-white/10 pl-6 md:pl-10">

          {[
            {
              role: "Lead Consultant",
              company: "ThoughtWorks • Oct 2020 - Present",
              desc: "Leading enterprise-level backend and frontend development, scalable architecture design, hybrid engineering operations, and high-performance application systems.",
            },
            {
              role: "Senior Software Engineer",
              company: "MangoApps • Oct 2013 - Sep 2016",
              desc: "Developed enterprise Android applications, communication platforms, SDK integrations, and scalable mobile-first business solutions.",
            },
            {
              role: "Engineer",
              company: "Samsung Electronics • Sep 2010 - Nov 2012",
              desc: "Worked on Android SDK framework layer, UI systems, keyboard architecture, and scalable mobile platform engineering.",
            },
          ].map((item, index) => (

            <div key={index} className="relative">

              <div className="absolute -left-[31px] md:-left-[49px] top-3 w-4 h-4 md:w-5 md:h-5 bg-white rounded-full"></div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 md:p-10 hover:border-white/30 hover:-translate-y-2 transition duration-300"
              >

                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.role}
                </h3>

                <p className="text-gray-400 mt-3">
                  {item.company}
                </p>

                <p className="mt-6 text-gray-300 leading-8">
                  {item.desc}
                </p>

              </motion.div>

            </div>

          ))}

        </div>

      </section>

      {/* Expertise */}
      <section
        id="expertise"
        className="py-24 md:py-32 px-6 md:px-24 relative z-10"
      >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-20"
        >
          Expertise
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Backend Development",
              desc: "Java, Core Java, scalable APIs, backend systems, enterprise architecture, and high-performance server-side engineering.",
            },
            {
              title: "Frontend Systems",
              desc: "Responsive interfaces, scalable frontend architecture, reusable components, and modern UI engineering.",
            },
            {
              title: "Android Engineering",
              desc: "Android SDK, enterprise mobility, scalable application architecture, and mobile platform development.",
            },
            {
              title: "Data Structures & Algorithms",
              desc: "Problem solving, scalable system optimization, algorithmic design, and performance engineering.",
            },
            {
              title: "Database & APIs",
              desc: "SQL systems, JSON handling, API integrations, backend communication, and enterprise connectivity.",
            },
            {
              title: "Agile & Architecture",
              desc: "Agile methodologies, software architecture, scalable product engineering, and technical leadership.",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 md:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:-translate-y-2 transition duration-300"
            >

              <h3 className="text-2xl font-semibold mb-6">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-24 md:py-32 px-6 text-center relative z-10"
      >

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mt-8 text-lg md:text-2xl break-all"
        >
          swatigoel@technocratblues.com
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-8 mt-14"
        >

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/swati-goel-47598226/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-blue-500/20 hover:border-blue-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          {/* Gmail */}
          <a
            href="mailto:swatigoel@technocratblues.com"
            className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-red-500/20 hover:border-red-400 transition duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </motion.div>

        {/* Footer */}
        <div className="mt-20 text-gray-500 text-sm">
          © 2026 Swati Goel. All rights reserved.
        </div>

      </section>

    </main>
  )
}