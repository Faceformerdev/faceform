// src/components/CookieConsentBanner.tsx
'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Using js-cookie for easier cookie handling client-side
// or use document.cookie directly if you prefer

const CONSENT_COOKIE_NAME = 'cookie_consent_is_granted';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if consent cookie exists
    const consent = Cookies.get(CONSENT_COOKIE_NAME);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Set cookie with an expiry (e.g., 1 year)
    Cookies.set(CONSENT_COOKIE_NAME, 'true', { expires: 365, path: '/' });
    setShowBanner(false);
    // Optional: Trigger an event or function to load scripts now
    // window.dispatchEvent(new CustomEvent('cookieConsentGranted'));
    console.log('Cookie consent accepted.');
    // You might need to reload or trigger updates if scripts depend on this
    // window.location.reload(); // A simple, but potentially disruptive way
  };

  const handleDecline = () => {
    // Optional: Set a "declined" cookie or handle differently
     Cookies.set(CONSENT_COOKIE_NAME, 'false', { expires: 365, path: '/' });
    setShowBanner(false);
    console.log('Cookie consent declined (banner hidden).');
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div style={styles.banner}>
      <p style={styles.text}>
        Wir nutzen Cookies um die Benutzererfahrung zu verbessern.
        {/* Optional: Link to your privacy policy */}
        {/* <a href="/privacy-policy" style={styles.link}>Learn More</a> */}
      </p>
      <div style={styles.buttons}>
        <button onClick={handleAccept} style={styles.buttonAccept}>
          Accept
        </button>
        {/* Optional Decline Button */}
         <button onClick={handleDecline} style={styles.buttonDecline}>
           Decline
         </button> 
      </div>
    </div>
  );
}

// Basic inline styles (move to CSS Modules or Tailwind for better management)
const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    fontSize: '14px',
  },
  text: {
    margin: 0,
    marginRight: '15px',
  },
  link: {
    color: '#4a90e2',
    textDecoration: 'underline',
    marginLeft: '5px',
  },
  buttons: {
    display: 'flex',
    gap: '10px',
  },
  buttonAccept: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
  },
  buttonDecline: {
    backgroundColor: 'grey',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
  },
} as const; // Use "as const" for better type inference with inline styles