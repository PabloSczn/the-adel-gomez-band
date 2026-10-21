import React, { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { galleryImages } from '../data/images';

const imageSizes = '(max-width: 768px) calc(100vw - 3rem), (max-width: 1600px) 70vw, 1370px';

// Keep decoded neighbors ready without downloading every full-size photo on load.
const preparedImages = new Map();

function prepareImage(photo) {
  const viewport = `${window.innerWidth}:${window.devicePixelRatio || 1}`;
  const cached = preparedImages.get(photo.src);
  if (!cached || cached.viewport !== viewport) {
    const image = new Image();
    image.decoding = 'async';
    image.sizes = imageSizes;
    image.srcset = photo.srcSet;
    const ready = new Promise((resolve, reject) => {
      image.onload = async () => {
        try {
          if (image.decode) await image.decode();
          resolve(image);
        } catch (error) {
          reject(error);
        }
      };
      image.onerror = reject;
    });
    image.src = photo.src;
    const entry = { viewport, ready };
    preparedImages.set(photo.src, entry);
    ready.catch(() => {
      if (preparedImages.get(photo.src) === entry) preparedImages.delete(photo.src);
    });
  }
  return preparedImages.get(photo.src).ready;
}

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);
  const [nearby, setNearby] = useState(false);
  const sectionRef = useRef(null);
  const targetIndex = useRef(0);
  const requestId = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!('IntersectionObserver' in window)) {
      setNearby(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearby(true);
        observer.disconnect();
      }
    }, { rootMargin: '500px' });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!nearby) return;
    const previous = (index - 1 + galleryImages.length) % galleryImages.length;
    const next = (index + 1) % galleryImages.length;
    [index, previous, next].forEach((position) => {
      prepareImage(galleryImages[position]).catch(() => {});
    });
  }, [index, nearby]);

  useEffect(() => () => { requestId.current += 1; }, []);

  const changeSlide = async (direction) => {
    targetIndex.current = (targetIndex.current + direction + galleryImages.length) % galleryImages.length;
    const next = targetIndex.current;
    const request = ++requestId.current;
    setError(false);
    try {
      await prepareImage(galleryImages[next]);
      // Rapid clicks/swipes should always finish on the last requested photo.
      if (request === requestId.current) setIndex(next);
    } catch (loadError) {
      if (request === requestId.current) {
        targetIndex.current = index;
        setError(true);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => changeSlide(1),
    onSwipedRight: () => changeSlide(-1),
    trackMouse: true,
  });

  const photo = galleryImages[index];

  return (
    <section id="gallery" className="gallery" ref={sectionRef} aria-label="Photo gallery">
      <h2>Gallery</h2>
      <div
        className="gallery-container"
        {...handlers}
        role="group"
        aria-roledescription="carousel"
        aria-label="Band photos"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            changeSlide(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        <button className="gallery-arrow" type="button" onClick={() => changeSlide(-1)} aria-label="Previous image">
          &#10094;
        </button>
        <div className="gallery-card">
          <img
            src={photo.src}
            srcSet={photo.srcSet}
            sizes={imageSizes}
            width={photo.width}
            height={photo.height}
            alt={photo.alt}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        </div>
        <button className="gallery-arrow" type="button" onClick={() => changeSlide(1)} aria-label="Next image">
          &#10095;
        </button>
        <span className="visually-hidden" aria-live="polite" aria-atomic="true">
          {error ? 'This photo could not load. Please try again.' : `Photo ${index + 1} of ${galleryImages.length}`}
        </span>
      </div>
    </section>
  );
}
