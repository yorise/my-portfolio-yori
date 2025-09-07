"use client";

import React, { useRef, useEffect, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";

export const SkillsCarousel = ({ items, direction = "ltr", speed = 50 }) => {
  const baseX = useRef(0);
  const trackRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current && trackRef.current.firstChild) {
      // hitung panjang 1 loop (semua item sekali jalan)
      const totalWidth = trackRef.current.scrollWidth / 2; // karena sudah concat 2x
      setItemWidth(totalWidth);
    }
  }, [items]);

  useAnimationFrame((t, delta) => {
    if (itemWidth === 0) return;
    const move = (delta / 1000) * speed;
    baseX.current =
      direction === "ltr" ? baseX.current - move : baseX.current + move;

    // Wrap posisi biar nggak overflow
    if (direction === "ltr" && baseX.current <= -itemWidth) {
      baseX.current = 0;
    } else if (direction === "rtl" && baseX.current >= 0) {
      baseX.current = -itemWidth;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${baseX.current}px)`;
    }
  });

  return (
    <div className="overflow-hidden w-full my-2">
      <div ref={trackRef} className="flex gap-2 will-change-transform">
        {items.concat(items).map((item, idx) => (
          <React.Fragment key={idx}>
            <span
              className="inline-flex items-center whitespace-nowrap px-4 py-2 
              bg-black text-white rounded-lg text-sm font-medium"
            >
              {item}
            </span>
            <span className="inline-flex items-center justify-center">
              <Star className="w-4 h-4 text-chart-2" />
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
