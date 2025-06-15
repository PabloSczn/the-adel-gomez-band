import React from 'react';

const links = ['HOME', 'TOUR', 'MUSIC', 'VIDEOS', 'ABOUT', 'SHOP'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.slice(0,3).map(label => (
          <li key={label}><a href={`#${label.toLowerCase()}`}>{label}</a></li>
        ))}
        <li className="logo">THE ADEL GOMEZ BAND</li>
        {links.slice(3).map(label => (
          <li key={label}><a href={`#${label.toLowerCase()}`}>{label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
