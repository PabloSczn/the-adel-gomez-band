import React, { useState } from 'react';
import {
  FaEnvelope,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa6';
import { socialLinks } from '../data/socialLinks';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' },
      });
      if (!res.ok) throw new Error('Message delivery failed');
      setStatus('thanks');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const contactLinks = [
    { aria: 'Email',    href: 'mailto:hello@theadelgomezband.com', icon: <FaEnvelope /> },
    { aria: 'Instagram',href: socialLinks.instagram, icon: <FaInstagram /> },
    { aria: 'TikTok',href: socialLinks.tiktok, icon: <FaTiktok /> },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact us</h2>
      <p className="contact-intro">
        We’d love to hear from you. Whether you have a question, an opportunity, or just want to say hi, drop us a message below!
      </p>

      {status === 'thanks' ? (
        <p className="contact-thankyou" role="status">Thanks! We’ll be in touch.</p>
      ) : (
        <form
          className="contact-form"
          action="https://formspree.io/f/movwyaqb"
          method="POST"
          onSubmit={handleSubmit}
          aria-busy={status === 'sending'}
        >
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            autoComplete="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            aria-label="Your Email Address"
            autoComplete="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            aria-label="Your Message"
            rows="8"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p className="contact-error" role="alert">
              We couldn’t send your message. Please try again or email us below.
            </p>
          )}
        </form>
      )}

      {/* new social icons bar */}
      <div className="contact-socials">
        {contactLinks.map(({ aria, href, icon }) => (
          <a
            key={aria}
            aria-label={aria}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="contact-email">
        <a href="mailto:hello@theadelgomezband.com">hello@theadelgomezband.com</a>
      </p>
    </section>
  );
}
