import React, { useState, useEffect } from 'react';

const TextWriter = ({ texts, typingSpeed = 100, erasingSpeed = 80, pauseTime = 3000 }) => {
  const [textIndex, setTextIndex] = useState(0);      // Which string in the texts array
  const [displayText, setDisplayText] = useState(''); // Current text being displayed
  const [isTyping, setIsTyping] = useState(true);     // Whether we are typing or erasing

  useEffect(() => {
    let timeout;

    if (isTyping) {
      // Typing effect: add one character at a time
      if (displayText.length < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // When done typing, wait a bit, then start erasing
        timeout = setTimeout(() => setIsTyping(false), pauseTime);
      }
    } else {
      // Erasing effect: remove one character at a time
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(texts[textIndex].slice(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        // When done erasing, move to next text and start typing again
        setTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, textIndex, texts, typingSpeed, erasingSpeed, pauseTime]);

  return <div className="flex mx-auto text-center text-c4 max-w-[90%] text-[28px] py-[20px]">
    {displayText+'|'}
    </div>;
};

export default TextWriter;
