import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/common/ScrollProgress';
import BackgroundBlobs from '../components/common/BackgroundBlobs';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import BlogSection from '../components/sections/BlogSection';
import Contact from '../components/sections/Contact';

export default function Home({ isDark, toggleTheme }) {
  return (
    <div className="relative min-h-screen">
      {/* Scroll indicator bar */}
      <ScrollProgress />

      {/* Ambient background glowing blobs */}
      <BackgroundBlobs />

      {/* Navigation */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BlogSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
