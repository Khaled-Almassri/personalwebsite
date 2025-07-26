import { useState, useEffect } from 'react';

const TypingOnce = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [index, text, typingSpeed]);

  return (
    <h1 className='text-c1'>
      {displayedText}
      <span className="cursor">|</span>
    </h1>
  );
};

export default TypingOnce;
