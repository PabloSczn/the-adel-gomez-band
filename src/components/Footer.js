import React from 'react';
import {
  FaEnvelope,
  FaInstagram,
  FaSpotify,
  FaApple,
  FaYoutube,
} from 'react-icons/fa6';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <img
        src={logo}
        alt="The Adel Gomez Band Logo"
        className="footer-logo"
      />

      {/* Short phrase */}
      <p className="footer-phrase">
        Vintage-modern rock, funk, soul &amp; pop fused into one.
      </p>

      {/* Social links */}
      <div className="footer-socials">
        <a aria-label="Email" href="mailto:theadelgomezband@gmail.com">
          <FaEnvelope />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/theadelgomezband/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          aria-label="Spotify"
          href="https://open.spotify.com/artist/0ZI5Qs0OqJvcl6b9gotEyS"
          target="_blank"
          rel="noreferrer"
        >
          <FaSpotify />
        </a>
        <a
          aria-label="Apple Music"
          href="https://music.apple.com/gb/artist/the-adel-gomez-band/1815975339"
          target="_blank"
          rel="noreferrer"
        >
          <FaApple />
        </a>
        <a
          aria-label="YouTube"
          href="https://www.youtube.com/@Theadelgomezband"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copy">
        © 2025 The Adel Gomez Band | Developed by{' '}
        <a
          href="https://www.pablosancheznarro.com"
          target="_blank"
          rel="noreferrer"
        >
          Pablo Sanchez Narro
        </a>
      </p>
    </footer>
  );
}
