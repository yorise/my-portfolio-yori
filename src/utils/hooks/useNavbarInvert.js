"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function useNavbarInvert() {
  const [invert, setInvert] = useState(false);
  const pathname = usePathname(); // tambahan dependency

  useEffect(() => {
    const sections = document.querySelectorAll("[data-navbar]");

    const onScroll = () => {
      const scrollPos = window.scrollY + 80; // 80 = navbar height
      let activeInvert = false;

      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + sec.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          if (sec.getAttribute("data-navbar") === "invert") {
            activeInvert = true;
          }
        }
      });

      setInvert(activeInvert);
    };

    window.addEventListener("scroll", onScroll);

    // cek pertama kali setelah navigasi selesai
    setTimeout(onScroll, 50);

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]); // <-- jalankan ulang tiap pindah page

  return invert;
}
