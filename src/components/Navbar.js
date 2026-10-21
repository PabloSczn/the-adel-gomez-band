import React, { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaSpotify,
  FaApple,
  FaYoutube,
} from 'react-icons/fa6';
import { socialLinks } from '../data/socialLinks';

const links = ['HOME', 'ABOUT', 'SOCIALS', 'GALLERY', 'CONTACT', 'SHOP'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger toggle */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="bar top" />
        <span className="bar middle" />
        <span className="bar bottom" />
      </button>

      {/* Mobile-only logo */}
      <div className="logo mobile-logo">THE ADEL GOMEZ BAND</div>

      {/* Desktop list (with its own logo in the middle) */}
      <ul id="main-navigation" className={`nav-list ${menuOpen ? 'open' : ''}`}>
        {links.slice(0, 3).map((label) => (
          <li key={label}>
            {label === 'HOME' ? (
              <a
                href="#home"
                onClick={handleLinkClick}
              >
                {label}
              </a>
            ) : (
              <a
                href={`#${label.toLowerCase()}`}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            )}
          </li>
        ))}

        {/* Desktop logo */}
        <li className="logo desktop-logo">THE ADEL GOMEZ BAND</li>

        {links.slice(3).map((label) => {
          const isShop = label === 'SHOP';
          const href = isShop
            ? 'https://www.etsy.com/shop/TheAdelGomezBand'
            : `#${label.toLowerCase()}`;
          return (
            <li key={label}>
              <a
                href={href}
                {...(isShop ? { target: '_blank', rel: 'noreferrer' } : {})}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          );
        })}

       {/* Mobile-menu social icons */}
       {menuOpen && (
         <li className="nav-socials-mobile">
           <a aria-label="Email" href="mailto:hello@theadelgomezband.com">
             <FaEnvelope />
           </a>
           <a
             aria-label="Instagram"
             target="_blank"
             rel="noreferrer"
             href={socialLinks.instagram}
           >
             <FaInstagram />
           </a>
           <a
             aria-label="TikTok"
             target="_blank"
             rel="noreferrer"
             href={socialLinks.tiktok}
           >
             <FaTiktok />
           </a>
           <a
             aria-label="Spotify"
             target="_blank"
             rel="noreferrer"
             href="https://open.spotify.com/artist/0ZI5Qs0OqJvcl6b9gotEyS"
           >
             <FaSpotify />
           </a>
           <a
             aria-label="Apple Music"
             target="_blank"
             rel="noreferrer"
             href="https://music.apple.com/gb/artist/the-adel-gomez-band/1815975339"
           >
             <FaApple />
           </a>
           <a
             aria-label="YouTube"
             target="_blank"
             rel="noreferrer"
             href="https://www.youtube.com/@Theadelgomezband"
           >
             <FaYoutube />
           </a>
         </li>
       )}
      </ul>
    </nav>
  );
}
