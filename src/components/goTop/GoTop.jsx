import './GoTop.css'

import { useState, useEffect } from 'react'

function GoTop() {
  const [goUp, setGoUp] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is at the top (0)
      if (window.scrollY === 0) {
        setGoUp(false);
      } else {
        setGoUp(true);
      }
    };
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
  
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0
    });
  }

  {/**/}
  
  return (
    <div className={`goTop ${goUp ? 'goUp' : ''}`} onClick={handleScrollToTop} >&#10153;</div>
    );
}

export default GoTop