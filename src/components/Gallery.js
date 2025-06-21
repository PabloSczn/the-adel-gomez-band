import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import gallery7 from '../assets/gallery7.jpg';
import gallery8 from '../assets/gallery8.jpg';
import gallery9 from '../assets/gallery9.jpg';
import gallery10 from '../assets/gallery10.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const nextSlide = () =>
    setIndex((i) => (i + 1) % images.length);

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
        <button
        className="gallery-arrow"
        onClick={prevSlide}
        aria-label="Previous image"
        >
        &#10094; {/* ❮ */}
        </button>

        <div className="gallery-card">
          <img src={images[index]} alt={`Gallery ${index + 1}`} />
        </div>

        <button
        className="gallery-arrow"
        onClick={nextSlide}
        aria-label="Next image"
        >
        &#10095; {/* ❯ */}
        </button>
      </div>
    </section>
  );
}
