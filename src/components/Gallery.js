import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';

const images = [gallery1, gallery2, gallery3, gallery4];

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
