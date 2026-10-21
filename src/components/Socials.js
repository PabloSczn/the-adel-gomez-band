import React, { useEffect, useRef } from 'react';

const TAGEMBED_SCRIPT_URL = 'https://widget.tagembed.com/embed.min.js';

function loadTagembed() {
  if (document.querySelector(`script[src="${TAGEMBED_SCRIPT_URL}"]`)) return;

  const script = document.createElement('script');
  script.src = TAGEMBED_SCRIPT_URL;
  script.async = true;
  document.body.appendChild(script);
}

export default function Socials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      loadTagembed();
      return undefined;
    }

    let active = true;
    const observer = new IntersectionObserver((entries) => {
      if (active && entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        loadTagembed();
      }
    }, { rootMargin: '500px 0px' });

    observer.observe(sectionRef.current);

    // Keep the shared script mounted across StrictMode's effect replay.
    return () => {
      active = false;
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="socials" className="socials">
      <h2>Socials</h2>
      <p className="socials-text">
        Check us out and drop a follow so you don’t miss any news from us!
      </p>
      <div className="socials-container">
        {/* Desktop-only widget */}
        <div
          className="tagembed-widget widget-desktop"
          style={{ width: '100%', height: '100%', overflow: 'auto' }}
          data-widget-id="289656"
          website="1"
        ></div>

        {/* Mobile-only widget */}
        <div
          className="tagembed-widget widget-mobile"
          style={{ width: '100%', height: '100%', overflow: 'auto' }}
          data-widget-id="289824"
          website="1"
        ></div>
      </div>
    </section>
  );
}
