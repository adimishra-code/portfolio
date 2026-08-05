import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { bootLines } from "../data";

// Terminal boot sequence: types each command char-by-char,
// prints outputs instantly, then calls onDone.
export default function BootIntro({ onDone }) {
  const [lines, setLines] = useState([]); // rendered lines
  const [typing, setTyping] = useState(""); // command being typed
  const [progress, setProgress] = useState(0);
  const timers = useRef([]);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms) =>
      new Promise((res) => {
        const t = setTimeout(res, ms);
        timers.current.push(t);
      });

    (async () => {
      await wait(400);
      let done = 0;
      for (const line of bootLines) {
        if (cancelled) return;
        if (line.type === "cmd") {
          // type out the command
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return;
            setTyping(line.text.slice(0, i));
            await wait(26);
          }
          await wait(160);
          setTyping("");
          setLines((prev) => [...prev, line]);
        } else {
          await wait(line.type === "ok" ? 240 : 160);
          setLines((prev) => [...prev, line]);
        }
        done += 1;
        setProgress(Math.round((done / bootLines.length) * 100));
      }
      await wait(600);
      if (!cancelled) onDone();
    })();

    return () => {
      cancelled = true;
      timers.current.forEach(clearTimeout);
    };
  }, [onDone]);

  const colorClass = { out: "boot-out", ok: "boot-ok", accent: "boot-accent" };

  return (
    <motion.div
      className="boot"
      exit={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <motion.div
        className="boot-terminal"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="boot-bar">
          <span className="t-dot red" />
          <span className="t-dot yellow" />
          <span className="t-dot green" />
          <span className="boot-title mono">aditya@dev: ~/portfolio</span>
        </div>
        <div className="boot-body">
          {lines.map((line, i) =>
            line.type === "cmd" ? (
              <p className="boot-line" key={i}>
                <span className="boot-prompt">$ </span>
                {line.text}
              </p>
            ) : (
              <p className={`boot-line ${colorClass[line.type]}`} key={i}>
                {line.text}
              </p>
            )
          )}
          <p className="boot-line">
            {typing && <span className="boot-prompt">$ </span>}
            {typing}
            <span className="boot-cursor" />
          </p>
        </div>
        <div className="boot-progress">
          <motion.div
            className="boot-progress-fill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
      </motion.div>
      <button className="boot-skip" onClick={onDone}>
        press to skip →
      </button>
    </motion.div>
  );
}
