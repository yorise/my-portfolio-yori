"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function PreviewModal({ items, index, onClose, onChange }) {
  useEffect(() => {
    let isScrolling = false;

    const onWheel = (e) => {
      if (isScrolling) return;

      isScrolling = true;

      if (e.deltaY > 0) {
        onChange(index < items.length - 1 ? index + 1 : 0);
      } else if (e.deltaY < 0) {
        onChange(index > 0 ? index - 1 : items.length - 1);
      }

      setTimeout(() => {
        isScrolling = false;
      }, 600); // delay scroll so gak terlalu sensitif
    };

    window.addEventListener("wheel", onWheel);

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [index, items.length, onChange]);

  // lock body scroll ketika modal true
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="relative w-[90vw] max-w-6xl"
        >
          <div className="relative w-full h-[65vh]">
            <Image
              src={items[index].img}
              alt={items[index].title || "Preview"}
              fill
              className="object-contain rounded-xl"
            />
          </div>

          {/* Caption */}
          <div className="mt-6 text-white">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold">{items[index].title}</h3>
              <span className="text-sm opacity-70">
                {index + 1} / {items.length}
              </span>
            </div>
            <p className="mt-3 text-base opacity-80 leading-relaxed">
              {items[index].description}
            </p>
          </div>
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
