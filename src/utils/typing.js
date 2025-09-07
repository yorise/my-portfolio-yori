import { useState, useEffect } from "react";

/**
 * Custom hook untuk animasi mengetik
 * @param {string[]} words - daftar kata/kalimat yang ingin diketik
 * @param {number} typeSpeed - kecepatan mengetik (ms per huruf)
 * @param {number} backSpeed - kecepatan menghapus (ms per huruf)
 * @param {number} delay - delay sebelum menghapus kata (ms)
 */
export function useTyping(
  words = [],
  typeSpeed = 100,
  backSpeed = 50,
  delay = 1500
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text !== currentWord) {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length + 1)),
        typeSpeed
      );
    } else if (isDeleting && text !== "") {
      timeout = setTimeout(
        () => setText(currentWord.slice(0, text.length - 1)),
        backSpeed
      );
    } else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, backSpeed, delay]);

  return text;
}
