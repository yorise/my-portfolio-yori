"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function PreviewModal({ items, index, onClose, onChange }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        onChange(index < items.length - 1 ? index + 1 : 0);
      if (e.key === "ArrowLeft")
        onChange(index > 0 ? index - 1 : items.length - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onChange]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative w-[90vw] h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={items[index].img}
            alt="Preview"
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>

        <button
          className="absolute top-6 right-6 text-white text-3xl"
          onClick={onClose}
        >
          ✕
        </button>

        <button
          className="absolute left-6 text-white text-4xl"
          onClick={(e) => {
            e.stopPropagation();
            onChange(index > 0 ? index - 1 : items.length - 1);
          }}
        >
          ‹
        </button>

        <button
          className="absolute right-6 text-white text-4xl"
          onClick={(e) => {
            e.stopPropagation();
            onChange(index < items.length - 1 ? index + 1 : 0);
          }}
        >
          ›
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
