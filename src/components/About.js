import React from 'react';
import { aboutImage } from '../data/images';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutImage.src}
            srcSet={aboutImage.srcSet}
            sizes="(max-width: 900px) 100vw, 50vw"
            width={aboutImage.width}
            height={aboutImage.height}
            alt={aboutImage.alt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="about-text">
          <h2>About</h2>
          <p>
            <strong>The Adel Gomez Band</strong> is a Scotland-based, genre-blending group fusing vintage and modern rock, funk, soul and pop. Through authentic lyrics, their way of life, and groovy, catchy songs, they share one clear message: escape the rat race, cut through life’s noise, and live like it means something.
          </p>
          <h3>Who is Adel Gomez?</h3>
          <p>
            Singer-songwriter Adel Gomez moved to Scotland in 2019, where he found himself and his passion. He studied full-time and earned an HND in music, progressed from guitarist to singer, and turned playing in pubs into his full-time job.
          </p>
          <p>
            The year 2022 marked a turning point in Adel’s life. Following a difficult period, he began writing raw, honest songs that reflected both the darker and more hopeful sides of his experiences. Music became more than something he played; it became a way to express himself, make sense of his experiences, and connect with others. What began as a means of survival gradually evolved into a clearer artistic vision, laying the foundations for The Adel Gomez Band.
          </p>
          <p>
            To bring these songs to life, Adel teamed up with his friend and musician Ivan Tolosana, forming a band and a community. It’s for anyone craving authentic connections and music from the soul, tired of pretending, waking up to deeper meaning, and ready to break free from life’s frustrating loop.
          </p>
          <p>
            We believe in a brighter future, and the change starts today. We don’t give a f**k what people say: we know what we want, and life is too short to care. With our people by our side, we’re going to make it and have fun along the way. That’s the true meaning of life. <strong>Welcome to the tribe.</strong>
          </p>
          <a
            href="https://open.spotify.com/artist/0ZI5Qs0OqJvcl6b9gotEyS?si=wrcqvAfqRXKOfo-Nqqopcg"
            target="_blank"
            rel="noreferrer"
            className="stream-button"
          >
            STREAM NOW
          </a>
        </div>
      </div>
    </section>
  );
}
