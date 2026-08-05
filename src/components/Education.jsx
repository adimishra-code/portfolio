import { motion } from "framer-motion";
import { coursework, education } from "../data";

export default function Education() {
  return (
    <section className="section container" id="education">
      <div className="section-head">
        <h2 className="section-title">
          <span className="mono dim">## </span>Education
        </h2>
        <p className="section-sub">{"// git log --oneline --graph"}</p>
      </div>

      <div className="edu-log">
        {education.map((edu, i) => (
          <div className="edu-item" key={edu.hash}>
            <div className="edu-rail">
              <motion.span
                className={`edu-dot ${edu.head ? "head" : ""}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.15 }}
              />
              {i < education.length - 1 && (
                <motion.span
                  className="edu-line"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 + 0.2 }}
                  style={{ transformOrigin: "top" }}
                />
              )}
            </div>
            <motion.div
              className="edu-card"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.15 + 0.1 }}
            >
              <div className="edu-top">
                <span className="commit-hash">{edu.hash}</span>
                {edu.ref && <span className="commit-ref">{edu.ref}</span>}
                <span className="edu-date">{edu.date}</span>
              </div>
              <h3>{edu.school}</h3>
              <p>{edu.detail}</p>
              {edu.sgpa && (
                <div className="sgpa-row">
                  {edu.sgpa.map((s, j) => (
                    <motion.span
                      className={`sgpa-chip ${s.up ? "up" : ""} ${s.cgpa ? "cgpa" : ""}`}
                      key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 + j * 0.08 }}
                    >
                      {s.label} <b>{s.value}</b>{s.up && s.label === "Sem 3" ? " ↑" : ""}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      <motion.div
        className="coursework"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -60px 0px" }}
        transition={{ duration: 0.45 }}
      >
        <h3 className="skill-title">
          <span className="dim">$ </span>coursework
        </h3>
        <div className="stack-tags">
          {coursework.map((c) => (
            <span className="tag" key={c}>{c}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
