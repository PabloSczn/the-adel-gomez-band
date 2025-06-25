import React, { useEffect } from 'react';

export default function Socials() {
  useEffect(() => {
    // Dynamically load Tagembed’s embed script
    const script = document.createElement('script');
    script.src = 'https://widget.tagembed.com/embed.min.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="socials" className="socials">
      <h2>Socials</h2>
      <p className="socials-text">
        Check us out and drop a follow so you don’t miss any news from us!
      </p>
      <div className="socials-container">
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '100%', overflow: 'auto' }}
          data-widget-id="289656"
          website="1"
        ></div>
      </div>
    </section>
  );
}
