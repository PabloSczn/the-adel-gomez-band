import React from 'react';
import aboutImg from '../assets/about.jpg';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="The Adel Gomez Band" />
        </div>
        <div className="about-text">
          <h2>About</h2>
          <p>
            <strong>The Adel Gomez Band</strong> is a genre-blending group currently based in Scotland, delivering a unique fusion of vintage but modern sounding rock, funk, and soul and pop. Through their authentic lyrics and way of life, their groovy and catchy songs, they share one clear message: escape the rat race, cut through life’s noise, and live like it means something.
          </p>
          <h3>Who is Adel Gomez?</h3>
          <p>
            Led by singer-songwriter Adel Gomez, he moved to Scotland in 2019 without knowing he was about to find himself and his passion. He studied full time and earned an HND in music. He started as a guitarist, transitioned to singer, and started playing in pubs, eventually making that his full time job.
          </p>
          <p>
            2022 was a turning point: after a dark episode in his life, Adel began writing raw, honest songs, sometimes hopeful, and sometimes heavy. He wasn´t just playing music anymore, he became an artist. Then, survival turned into clarity. To bring these tracks to life, he teamed up with his friend and musician Ivan Tolosana, forming not just a band but a community.
          </p>
          <p>
            This community is for anyone who craves real music made from the soul and authentic connections. It’s for those tired of pretending, waking up to deeper meaning, and ready to break free from life’s frustrating loop.
          </p>
          <p>
            We have a vision of a brighter future. The change starts today. At the end of the day, we don’t give a f**k what people say because we know what we want and life is too short to care, we are going to make it with our people, by our side, and we are having fun along the way. Because that, is the true meaning of life. <strong>Welcome to the tribe.</strong>
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
