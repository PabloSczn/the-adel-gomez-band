import React from 'react';
import { FaEnvelope, FaInstagram, FaFacebookF, FaXTwitter, FaSpotify, FaApple, FaYoutube } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa';
import bg from '../assets/hero-background.jpg';

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        background: `url(${bg}) center/cover no-repeat`,
        height: '100vh',
        position: 'relative'
      }}
    >
        <div className="hero-socials">
            <a aria-label="Join mailing list"  href="/#email"><FaEnvelope/></a>
            <a aria-label="Instagram" target="_blank" rel="noreferrer" href="https://instagram.com/"><FaInstagram/></a>
            <a aria-label="Facebook"  target="_blank" rel="noreferrer" href="https://facebook.com/"><FaFacebookF/></a>
            <a aria-label="X / Twitter" target="_blank" rel="noreferrer" href="https://twitter.com/"><FaXTwitter/></a>
            <a aria-label="Spotify"   target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/"><FaSpotify/></a>
            <a aria-label="Apple Music" target="_blank" rel="noreferrer" href="https://music.apple.com/us/artist/"><FaApple/></a>
            <a aria-label="YouTube"  target="_blank" rel="noreferrer" href="https://youtube.com/user/"><FaYoutube/></a>
        </div>
        <div className="hero-content">
            <button>DISCOVER US!</button>
        </div>
        <a
            href="#about"
            aria-label="Scroll down"
            style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '1.75rem',
            color: 'rgba(255,255,255,0.8)',
            animation: 'bounce 2s infinite'
            }}
        >
            <FaChevronDown />
        </a>
    </section>
  );
}
