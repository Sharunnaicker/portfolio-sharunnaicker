"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 600);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
          style={{ backgroundColor: "var(--bg-primary)" }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.svg
            width="56"
            height="76"
            viewBox="0 0 60 80"
            fill="none"
            className="mb-8"
          >
            <motion.path
              d="M46 14 C46 14, 14 11, 14 28 C14 45, 46 41, 46 58 C46 74, 14 70, 14 70"
              stroke="var(--accent)"
              strokeWidth="5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </motion.svg>

          <motion.p
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Loading...
          </motion.p>

          <motion.p
            className="absolute bottom-8 text-xs font-mono"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Designed &amp; built by Sharun Naicker
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
