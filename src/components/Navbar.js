import React from 'react';

const links = ['HOME', 'ABOUT', 'GALLERY', 'SHOP'];

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {links.slice(0,2).map(label => (
          <li key={label}><a href={`#${label.toLowerCase()}`}>{label}</a></li>
        ))}
        <li className="logo">THE ADEL GOMEZ BAND</li>
        {links.slice(2).map(label => {
          const isShop = label === 'SHOP';
          const href   = isShop
            ? 'https://www.etsy.com/shop/TheAdelGomezBand'
            : `#${label.toLowerCase()}`;
          return (
            <li key={label}>
              <a
                href={href}
                {...(isShop
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
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
