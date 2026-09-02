import { useCallback, useEffect, useRef, useState } from 'react';
import SplashCursor from './components/SplashCursor';
import GlyphRain from './components/GlyphRain';
import Pikachu from './components/Pikachu';
import Lightning from './components/Lightning';

export default function App() {
  const [zapped, setZapped] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('pika-theme') || 'dark');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('pika-theme', theme);
  }, [theme]);

  const fireRef = useRef(null);

  const handleReact = useCallback(() => {
    if (fireRef.current) fireRef.current();
    setZapped(true);
    window.setTimeout(() => setZapped(false), 1400);
  }, []);

  return (
    <main className={'stage' + (zapped ? ' is-zapped' : '')}>
      <div className="stage__glow" aria-hidden="true" />
      <GlyphRain
        color={theme === 'dark' ? '#8a8398' : '#8d8a97'}
        headColor={theme === 'dark' ? '#ffd44d' : '#d9a400'}
        opacity={theme === 'dark' ? 0.5 : 0.38}
      />

      <p className="stage__kanji" aria-hidden="true">電気</p>

      <button
        type="button"
        className="stage__theme"
        onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
        aria-label={theme === 'dark' ? 'Switch to the light studio background' : 'Switch to the dark background'}
        title={theme === 'dark' ? 'Light studio' : 'Dark night'}
      >
        {theme === 'dark' ? '☀' : '☾'}
      </button>

      <header className="stage__head">
        <p className="stage__eyebrow"> · ELECTRIC TYPE · No.025</p>
        <h1>
          <span className="stage__en" data-text="PIKACHU">PIKACHU</span>
        </h1>
      </header>

      <Pikachu onReact={handleReact} />
      <Lightning fireRef={fireRef} />

      <footer className="stage__foot">
        <span className="stage__hint">
           move your mouse — he follows
        </span>
        <span className="stage__hint stage__hint--tap">
           click him for a giggle ⚡
        </span>
        
        {/* Instagram Link */}
        <a
          href="https://instagram.com/spideeeyy_01"
          target="_blank"
          rel="noopener noreferrer"
          className="stage__insta"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>spideeeyy_01</span>
        </a>
      </footer>

      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#EFA400"
      />
    </main>
  );
}