import React from 'react';
import { FaEnvelope, FaInstagram, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa';
import { heroImage } from '../data/images';

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="The Adel Gomez Band">
      <img
        className="hero-image"
        src={heroImage.src}
        srcSet={heroImage.srcSet}
        sizes="(max-aspect-ratio: 3/2) 150vh, 100vw"
        width={heroImage.width}
        height={heroImage.height}
        alt={heroImage.alt}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-socials">
        <a aria-label="Email" href="mailto:hello@theadelgomezband.com"><FaEnvelope /></a>
        <a aria-label="Instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/theadelgomezband/"><FaInstagram /></a>
        <a aria-label="Spotify" target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/0ZI5Qs0OqJvcl6b9gotEyS?si=zsJ15M9tSpGw0M53yeFwPg"><FaSpotify /></a>
        <a aria-label="Apple Music" target="_blank" rel="noreferrer" href="https://music.apple.com/gb/artist/the-adel-gomez-band/1815975339"><FaApple /></a>
        <a aria-label="YouTube" target="_blank" rel="noreferrer" href="https://www.youtube.com/@Theadelgomezband"><FaYoutube /></a>
      </div>
      <div className="hero-content">
        <a className="discover-button" href="#about">DISCOVER US!</a>
      </div>
      <a className="hero-scroll" href="#about" aria-label="Scroll down">
        <FaChevronDown />
      </a>
    </section>
  );
}
