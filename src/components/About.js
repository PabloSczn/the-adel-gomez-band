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
            <strong>The Adel Gomez Band</strong> is a genre-blending group currently based in Scotland, delivering a unique fusion of vintage-modern rock, funk, soul, and pop. Through their authentic lyrics and way of life, and their groovy, catchy songs, they intend to share their unique message and perspective.
          </p>
          <h3>Who is Adel Gomez?</h3>
          <p>
            Singer and songwriter Adel Gomez moved to Scotland in 2019 not knowing that he was about to find himself and his real passion. He then studied full-time and earned an HND in music. He started off as a guitarist, transitioned into a singer, and began playing in pubs, eventually making that his full-time career.
          </p>
          <p>
            The year 2022 was a turning point: a very dark episode in his life inspired him to write, not because he thought he was a songwriter, but because he needed to say something he couldn’t keep inside anymore. The songs poured out raw and honest, sometimes hopeful, sometimes heavy. For the first time, he wasn’t just playing music, he was becoming an artist. What began as survival transformed into clarity.
          </p>
          <p>
            With friend and musician Ivan Tolosana, Adel created more than a band, they created a community: a gathering of people who want to make real music and connect with real people. For those tired of pretending and those waking up, this community is for you. Welcome to the tribe.
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
