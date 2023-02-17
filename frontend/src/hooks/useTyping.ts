import { useEffect, useState } from 'react';

const useTyping = (text: string, delay: number = 0) => {
  const [splitedText, setSplitedText] = useState('');

  useEffect(() => {
    text.split('').forEach((char, idx) => {
      setTimeout(() => {
        setSplitedText(prev => prev + char);
      }, 100 * (idx + delay));
    });
  }, [text, delay]);

  return splitedText;
};

export { useTyping };
