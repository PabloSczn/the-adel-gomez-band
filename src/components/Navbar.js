import React, { useState } from 'react';

const links = ['HOME', 'ABOUT', 'GALLERY', 'SHOP'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* 1) Hamburger toggle */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(o => !o)}
      >
        <span className="bar top" />
        <span className="bar middle" />
        <span className="bar bottom" />
      </button>

      {/* 2) Mobile-only logo */}
      <div className="logo mobile-logo">THE ADEL GOMEZ BAND</div>

      {/* 3) Desktop list (with its own logo in the middle) */}
      <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
        {links.slice(0, 2).map(label => (
          <li key={label}>
            <a href={`#${label.toLowerCase()}`}>{label}</a>
          </li>
        ))}

        {/* desktop logo */}
        <li className="logo desktop-logo">THE ADEL GOMEZ BAND</li>

        {links.slice(2).map(label => {
          const isShop = label === 'SHOP';
          const href = isShop
            ? 'https://www.etsy.com/shop/TheAdelGomezBand'
            : `#${label.toLowerCase()}`;
          return (
            <li key={label}>
              <a
                href={href}
                {...(isShop ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
