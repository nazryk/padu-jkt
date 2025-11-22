import { useState, useEffect } from 'react';

function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Terapkan tema ke tag HTML
    document.documentElement.setAttribute('data-theme', theme);
    // Simpan ke memori
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const btnStyle = {
    background: 'transparent',
    border: '2px solid var(--text-secondary)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    color: 'var(--text-primary)',
    transition: '0.3s',
    marginLeft: '15px'
  };

  return (
    <button onClick={toggleTheme} style={btnStyle} title="Ganti Mode">
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;