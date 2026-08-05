import { useEffect, useState } from "react";
import { OctoMark } from "./icons";

const links = [
  { href: "#about", id: "about", icon: "📖", label: "README" },
  { href: "#projects", id: "projects", icon: "📌", label: "Projects" },
  { href: "#skills", id: "skills", icon: "⚡", label: "Skills" },
  { href: "#education", id: "education", icon: "🎓", label: "Education" },
  { href: "#contact", id: "contact", icon: "✉️", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="topbar">
      <nav className="topbar-inner container">
        <a href="#top" className="brand">
          <OctoMark />
          <span className="brand-path">
            <span className="brand-user">aditya-mishra</span>
            <span className="brand-slash">/</span>
            <span className="brand-repo">portfolio</span>
          </span>
        </a>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                <span className="nav-icon">{l.icon}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
