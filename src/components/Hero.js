import React from 'react';
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
      <div className="hero-content">
        <p>NEW ALBUM</p>
        <h1>MIXED EMOTIONS OUT NOW!</h1>
        <button>LISTEN NOW</button>
        <div className="social-icons">
          {/* Replace with real icon components or <img> tags */}
          <a href="#email">📧</a>
          <a href="#instagram">📸</a>
          <a href="#facebook">📘</a>
          <a href="#twitter">🐦</a>
          <a href="#spotify">🎵</a>
          <a href="#apple">🍎</a>
          <a href="#youtube">▶️</a>
        </div>
      </div>
    </section>
  );
}
