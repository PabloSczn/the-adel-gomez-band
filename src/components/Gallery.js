import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import gallery1 from '../assets/gallery1.webp';
import gallery2 from '../assets/gallery2.webp';
import gallery3 from '../assets/gallery3.webp';
import gallery4 from '../assets/gallery4.webp';
import gallery5 from '../assets/gallery5.webp';
import gallery6 from '../assets/gallery6.webp';
import gallery7 from '../assets/gallery7.webp';
import gallery8 from '../assets/gallery8.webp';
import gallery9 from '../assets/gallery9.webp';
import gallery10 from '../assets/gallery10.webp';
import gallery11 from '../assets/gallery11.webp';
import gallery12 from '../assets/gallery12.webp';
import gallery13 from '../assets/gallery13.webp';
import gallery14 from '../assets/gallery14.webp';
import gallery15 from '../assets/gallery15.webp';

const images = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7,
  gallery8, gallery9, gallery10, gallery11, gallery12, gallery13, gallery14,
  gallery15
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  // PRELOAD
  useEffect(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const prevSlide = () => setIndex(i => (i - 1 + images.length) % images.length);
  const nextSlide = () => setIndex(i => (i + 1) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft:  nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section id="gallery" className="gallery" {...handlers}>
      <h2>Gallery</h2>
      <div className="gallery-container">
        <button className="gallery-arrow" onClick={prevSlide} aria-label="Previous image">
          &#10094;
        </button>
        <div className="gallery-card">
          <img
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            loading="lazy"/>
        </div>
        <button className="gallery-arrow" onClick={nextSlide} aria-label="Next image">
          &#10095;
        </button>
      </div>
    </section>
  );
}
