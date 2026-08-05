import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { profile, stats, typedInterests } from "../data";
import {
  BookIcon,
  DownloadIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  OctoMark,
  PhoneIcon,
  SchoolIcon,
} from "./icons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// seeded pseudo-random contribution graph — same on every visit
function useContribCells(weeks = 52) {
  return useMemo(() => {
    let seed = 820;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const cells = [];
    for (let w = 0; w < weeks; w++) {
      const activity = 0.25 + (w / weeks) * 0.55; // more active over time
      for (let d = 0; d < 7; d++) {
        const r = rand();
        let level = 0;
        if (r < activity * 0.9) {
          if (r < activity * 0.18) level = 4;
          else if (r < activity * 0.38) level = 3;
          else if (r < activity * 0.62) level = 2;
          else level = 1;
        }
        cells.push(level);
      }
    }
    return cells;
  }, [weeks]);
}

// cycles through phrases with a type/delete effect
function Typewriter({ phrases }) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let delay;
    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === "") {
      delay = 300;
    } else {
      delay = deleting ? 30 : 55;
    }
    const t = setTimeout(() => {
      if (!deleting && text === current) setDeleting(true);
      else if (deleting && text === "") {
        setDeleting(false);
        setI((n) => n + 1);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases]);

  return (
    <p className="typewriter-line">
      <span className="typewriter-label">I build → </span>
      <span className="typewriter-text">{text}</span>
      <span className="typewriter-caret" />
    </p>
  );
}

// counts up when scrolled into view
function StatValue({ value, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div className="stat-value" ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </div>
  );
}

export default function Hero() {
  const cells = useContribCells();

  return (
    <section className="hero container" id="about">
      <motion.aside
        className="profile-card"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <motion.div
          className="avatar"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.15 }}
        >
          <img className="avatar-img" src="/avatar.jpg" alt="Aditya Mishra" />
          <span className="avatar-status" title="Open to opportunities">💻</span>
        </motion.div>
        <h1 className="profile-name">{profile.name}</h1>
        <p className="profile-handle">{profile.handle} · he/him</p>
        <p className="profile-bio">{profile.title}</p>
        <a className="btn-follow" href="#contact">Get in touch</a>
        <a className="btn-resume" href={profile.resume} download="Aditya_Mishra_CV.pdf">
          <DownloadIcon /> Download CV
        </a>
        <ul className="profile-meta">
          <li><LocationIcon /> {profile.location}</li>
          <li><MailIcon /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><PhoneIcon /> <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li>
          <li><SchoolIcon /> {profile.university}</li>
        </ul>
        <div className="social-row">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
            <OctoMark size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <LinkedInIcon size={18} />
          </a>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <InstagramIcon size={18} />
          </a>
        </div>
        <div className="profile-langs">
          <span className="lang-chip">🇮🇳 Hindi — Native</span>
          <span className="lang-chip">🌐 English — Professional</span>
        </div>
      </motion.aside>

      <div className="hero-main">
        <motion.article
          className="readme-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
        >
          <div className="readme-header">
            <BookIcon />
            <span className="mono">
              aditya-mishra / README<span className="dim">.md</span>
            </span>
          </div>
          <div className="readme-body">
            <h2>Hi, I'm Aditya 👋</h2>
            <Typewriter phrases={typedInterests} />
            <p style={{ marginTop: 12 }}>
              I'm a B.Tech Information Technology student at <strong>Gautam Buddha University</strong> with
              a passion for full-stack development, artificial intelligence, and solving real-world problems
              through technology.
            </p>
            <p>
              I enjoy building scalable web applications, AI-powered platforms, and modern software systems.
              My interests include <strong>backend development</strong>, <strong>system design</strong>,{" "}
              <strong>machine learning applications</strong>, and creating user-friendly digital experiences.
            </p>
            <div className="terminal">
              <div className="terminal-bar">
                <span className="t-dot red" /><span className="t-dot yellow" /><span className="t-dot green" />
                <span className="terminal-title mono">aditya@dev: ~</span>
              </div>
              <div className="terminal-body">
                <p><span className="t-prompt">$</span> whoami</p>
                <p className="t-out">full-stack &amp; AI developer — shipping ideas into products</p>
                <p><span className="t-prompt">$</span> cat interests.txt</p>
                <p className="t-out">Full Stack · AI · Backend Engineering · System Design · ML Apps · Cloud</p>
                <p><span className="t-prompt">$</span> <span className="t-cursor">▊</span></p>
              </div>
            </div>
          </div>
        </motion.article>

        <motion.div
          className="stats-row"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((s) => (
            <motion.div className="stat-card" variants={fadeUp} key={s.label}>
              <StatValue value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.article
          className="contrib-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="contrib-head">
            <span className="mono contrib-title">Always be committing_</span>
            <a
              className="mono contrib-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              view on GitHub ↗
            </a>
          </div>
          <div className="contrib-graph" aria-hidden="true">
            {cells.map((level, i) => (
              <i className={`cell l${level}`} key={i} />
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
