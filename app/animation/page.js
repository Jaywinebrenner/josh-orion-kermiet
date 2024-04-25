
"use client"
import { animations } from '../utils/animations';
import React, { useEffect, useState } from 'react';


const Animation = () => {
  const [showPaintings, setShowPaintings] = useState(false);

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setShowPaintings(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="paintings">
      <div className="container">
        <div className={`animations-wrapper ${showPaintings ? 'fade-in' : ''}`}>
                   {
               animations && animations.map((animation, i) => {
                 return (
                   <div key={`animation-key=${i}`} className='animation-wrapper'>
                     <img src={animation.imageSrc}/>
                     <p>{animation.title }</p>
                   </div>
                 )
               })
           }
        </div>
      </div>
    </div>
  );
};

export default Animation;
