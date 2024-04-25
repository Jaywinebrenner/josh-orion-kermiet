"use client"
import { paintings } from '../utils/paintings';
import React, { useEffect, useState } from 'react';


const Illustration = () => {
  const [showPaintings, setShowPaintings] = useState(false);

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setShowPaintings(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="paintings">
      <div className="container">
        <div className={`paintings-wrapper ${showPaintings ? 'fade-in' : ''}`}>
          {paintings &&
            paintings.map((painting, i) => (
              <div className="painting-wrapper" key={`painting-key=${i}`}>
                <img src={painting.imageUrl} alt={painting.title} />
                <p>{painting.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Illustration;
