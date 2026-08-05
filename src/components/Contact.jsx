import { useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { DownloadIcon, InstagramIcon, LinkedInIcon, MailIcon, OctoMark, PhoneIcon } from "./icons";

const FORM_ENDPOINT = `https://formspree.io/f/${profile.formspreeId}`;

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  async function handleSubmit(e) {
    e.preventDefault();
    if (profile.formspreeId === "YOUR_FORM_ID") {
      setStatus("err");
      return;
    }
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <section className="section container" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="contact-title">
          git commit -m <span className="str">"let's build together"</span>
        </h2>
        <p className="contact-sub">
          I aim to build impactful software by combining full-stack development with AI —
          scalable products that solve real-world problems. Open to internships,
          collaborations &amp; interesting ideas.
        </p>

        <div className="contact-grid">
          {/* ---- form ---- */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <div className="form-header">
              <span className="dot-open" />
              new-issue: say-hello <span className="dim">#001</span>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="cf-name">
                    name <span className="req">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cf-email">
                    email <span className="req">*</span>
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="cf-subject">subject</label>
                <input
                  id="cf-subject"
                  type="text"
                  name="subject"
                  placeholder="Internship / Collaboration / Anything else"
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">
                  message <span className="req">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                />
              </div>

              {status === "ok" && (
                <p className="form-status ok">
                  ✓ Message sent! I'll get back to you soon — thanks for reaching out.
                </p>
              )}
              {status === "err" && (
                <p className="form-status err">
                  ✗ Couldn't send right now. Please email me directly at {profile.email}
                </p>
              )}

              <button type="submit" className="form-submit" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <span className="spinner" /> pushing...
                  </>
                ) : (
                  <>git push origin message</>
                )}
              </button>
            </form>
          </motion.div>

          {/* ---- quick links ---- */}
          <motion.div
            className="contact-side"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {[
              {
                href: `mailto:${profile.email}`,
                icon: <MailIcon size={18} />,
                title: "Email",
                value: profile.email,
              },
              {
                href: profile.github,
                icon: <OctoMark size={18} />,
                title: "GitHub",
                value: "github.com/adimishra-code",
                external: true,
              },
              {
                href: profile.linkedin,
                icon: <LinkedInIcon size={18} />,
                title: "LinkedIn",
                value: "in/adi-mishraa",
                external: true,
              },
              {
                href: profile.instagram,
                icon: <InstagramIcon size={18} />,
                title: "Instagram",
                value: "@adiiimishraaa",
                external: true,
              },
              {
                href: profile.resume,
                icon: <DownloadIcon size={18} />,
                title: "Resume",
                value: "Aditya_Mishra_CV.pdf",
                download: true,
              },
              {
                href: `tel:${profile.phoneHref}`,
                icon: <PhoneIcon size={18} />,
                title: "Phone",
                value: profile.phone,
              },
            ].map((c) => (
              <motion.a
                className="contact-side-card"
                href={c.href}
                key={c.title}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...(c.download ? { download: "Aditya_Mishra_CV.pdf" } : {})}
                variants={{
                  hidden: { opacity: 0, x: 24 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
                }}
              >
                <span className="contact-side-icon">{c.icon}</span>
                <span>
                  <span className="contact-side-title">{c.title}</span>
                  <br />
                  <span className="contact-side-value">{c.value}</span>
                </span>
              </motion.a>
            ))}
            <motion.div
              className="response-note"
              variants={{
                hidden: { opacity: 0, x: 24 },
                show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
              }}
            >
              <span className="ok">●</span> status: open to opportunities
              <br />
              ⚡ avg response time: &lt; 24h
              <br />
              📍 {profile.location}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
