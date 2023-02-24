import { useState, useEffect } from 'react';
import "./Typewriter.css";

function Typewriter() {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Nadpis text h1
    const titleText = 'MWEBX SERVICE';
    // Další text h2
    const subtitleText = "Professional services: These are services provided by individuals with specialized knowledge and expertise, such as lawyers, accountants, and consultants.";
    let titleIndex = 0;
    let subtitleIndex = 0;
    let intervalId;

    if (isTyping) {
      intervalId = setInterval(() => {
        if (titleIndex < titleText.length) {
          setTitle(prevTitle => prevTitle + titleText[titleIndex]);
          titleIndex++;
        } else if (subtitleIndex < subtitleText.length) {
          setSubtitle(prevSubtitle => prevSubtitle + subtitleText[subtitleIndex]);
          subtitleIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isTyping]);

  return (
    <div className='writer-box'>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}

export default Typewriter;
