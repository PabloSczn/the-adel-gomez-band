import React, { useState } from 'react';
import {
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa6';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    const data = new FormData(form);
    const res = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      setStatus('thanks');
      form.reset();
    } else {
      setStatus('idle');
      alert('Oops! Something went wrong.');
    }
  };

  const socialLinks = [
    { aria: 'Email',    href: 'mailto:theadelgomezband@gmail.com', icon: <FaEnvelope /> },
    { aria: 'Instagram',href: 'https://www.instagram.com/theadelgomezband/', icon: <FaInstagram /> },
  ];

  return (
    <section id="contact" className="contact">
      <h2>Contact us</h2>
      <p className="contact-intro">
        We’d love to hear from you. Whether you have a question, an opportunity, or just want to say hi, drop us a message below!
      </p>

      {status === 'thanks' ? (
        <p className="contact-thankyou">Thanks! We’ll be in touch.</p>
      ) : (
        <form
          className="contact-form"
          action="https://formspree.io/f/movwyaqb"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          />
          <button type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      )}

      {/* new social icons bar */}
      <div className="contact-socials">
        {socialLinks.map(({ aria, href, icon }) => (
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
      <p className="contact-email">theadelgomezband@gmail.com</p>
    </section>
  );
}
