import './GoTop.css'

import { useState, useEffect } from 'react'

function GoTop() {
  const [goUp, setGoUp] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setGoUp(prev => (window.scrollY > 0 ? true : prev ? false : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleScrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  
  return (
    <div className={`goTop ${goUp ? 'goUp' : ''}`} onClick={handleScrollToTop} >&#10153;</div>
    );
}

export default GoTop