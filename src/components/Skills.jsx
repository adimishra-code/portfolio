import { motion } from "framer-motion";
import { langBar, skills } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-head">
        <h2 className="section-title">
          <span className="mono dim">## </span>Tech Stack
        </h2>
        <p className="section-sub">{"// package.json → dependencies"}</p>
      </div>

      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {skills.map((group) => (
          <motion.div className="skill-group" variants={fadeUp} key={group.title}>
            <h3 className="skill-title">
              <span className="dim">$ </span>
              {group.title}
            </h3>
            <div className="stack-tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="lang-bar-card"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="lang-bar">
          {langBar.map((l) => (
            <motion.span
              className={`seg ${l.seg}`}
              key={l.label}
              title={`${l.label} ${l.pct}%`}
              initial={{ width: 0 }}
              whileInView={{ width: `${l.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          ))}
        </div>
        <div className="lang-bar-legend">
          {langBar.map((l) => (
            <span key={l.label}>
              <i className={`lang-dot ${l.dot}`} />
              {l.label} {l.pct}%
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
