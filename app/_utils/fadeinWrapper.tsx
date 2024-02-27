"use client";
import { motion } from "framer-motion";

export default function FadeInWrapper({ children }: { children: any }) {
  return (
    <motion.div
      className="w-full h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
