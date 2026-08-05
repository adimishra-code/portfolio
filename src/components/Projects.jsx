import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { PlayIcon, RepoIcon } from "./icons";

function ProjectCard({ project, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className={`flip-card ${flipped ? "flipped" : ""}`}
      initial={{ opacity: 0, y: 48, rotateX: -8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 16, delay: index * 0.12 }}
    >
      <div className="flip-inner">
        {/* front */}
        <article className="flip-face flip-front repo-card">
          <div className="repo-top">
            <RepoIcon />
            <h3 className="repo-name">{project.name}</h3>
            {project.badge && <span className="repo-badge special">🏆 {project.badge}</span>}
            <span className="repo-badge">Public</span>
          </div>
          <div className="video-slot">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
              />
            ) : (
              <div className="video-placeholder">
                <PlayIcon />
                <span>demo.mp4 — coming soon</span>
              </div>
            )}
          </div>
          <p className="repo-desc">
            {project.emoji} {project.description}
          </p>
          <div className="repo-foot">
            {project.langs.map((l) => (
              <span className="repo-lang" key={l.label}>
                <i className={`lang-dot ${l.dot}`} />
                {l.label}
              </span>
            ))}
            {project.repo && (
              <a
                className="repo-source"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source ↗
              </a>
            )}
            <button
              type="button"
              className="flip-btn"
              onClick={() => setFlipped(true)}
              aria-label={`Show tech stack for ${project.name}`}
            >
              tech stack ↻
            </button>
          </div>
        </article>

        {/* back — tech stack */}
        <article className="flip-face flip-back repo-card">
          <div className="repo-top">
            <h3 className="repo-name mono">
              {project.id}
              <span className="dim">/stack</span>
            </h3>
            <button
              type="button"
              className="flip-btn back"
              onClick={() => setFlipped(false)}
              aria-label={`Back to ${project.name} demo`}
            >
              ← back
            </button>
          </div>
          <p className="back-note">{project.contribution}</p>
          <div className="stack-tags">
            {project.stack.map((tech) => (
              <span className="tag" key={tech}>{tech}</span>
            ))}
          </div>
          <div className="back-foot">{project.highlights}</div>
        </article>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <h2 className="section-title">
          <span className="mono dim">## </span>Pinned Projects
        </h2>
        <p className="section-sub">{"// click \"tech stack\" on a card to flip it"}</p>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard project={p} index={i} key={p.id} />
        ))}
      </div>
    </section>
  );
}
