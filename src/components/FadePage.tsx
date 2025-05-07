import React from "react";
import { motion } from "framer-motion";

type FadePageProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function FadePage({ children, className = "", style }: FadePageProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
