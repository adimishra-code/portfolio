import { useCallback, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import BootIntro from "./components/BootIntro";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export default function App() {
  const [booted, setBooted] = useState(false);
  const finishBoot = useCallback(() => setBooted(true), []);

  return (
    <>
      <AnimatePresence>
        {!booted && <BootIntro key="boot" onDone={finishBoot} />}
      </AnimatePresence>

      {booted && (
        <motion.div
          id="top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
