import React, { useState, useEffect } from 'react';

export default function TypingEffect({ strings = [], typeSpeed = 70, backSpeed = 40, backDelay = 1800 }) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const currentFullText = strings[stringIndex % strings.length];

    let timer;

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Finished typing word, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, backDelay);
      }
    } else {
      // Deleting backwards
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.substring(0, displayText.length - 1));
        }, backSpeed);
      } else {
        // Finished deleting, move to next string
        setIsDeleting(false);
        setStringIndex((prev) => (prev + 1) % strings.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, stringIndex, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className="hero-tagline" aria-label={strings[stringIndex] || displayText}>
      {displayText}
      <span className="hero-cursor" />
    </span>
  );
}
