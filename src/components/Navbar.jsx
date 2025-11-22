import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoPadu from '../assets/logo-padu.png';
import ThemeToggle from './ThemeToggle'; 


function Navbar() {
  const [activeSection, setActiveSection] = useState('home'); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); 

  // Logika Hide/Show Navbar
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 100) setShowNavbar(false);
        else setShowNavbar(true);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Logika Scroll Spy
  useEffect(() => {
    const handleScrollSpy = () => {
      if (location.pathname !== '/') return;
      const homeSec = document.getElementById('home');
      const profilSec = document.getElementById('profil');
      const kegiatanSec = document.getElementById('kegiatan');
      const scrollPos = window.scrollY + 200; 

      if (kegiatanSec && scrollPos >= kegiatanSec.offsetTop) setActiveSection('kegiatan');
      else if (profilSec && scrollPos >= profilSec.offsetTop) setActiveSection('profil');
      else if (homeSec) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- STYLE DESKTOP ---
  const navStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px', 
    height: '70px',    
    backgroundColor: 'var(--nav-bg)', 
    backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--nav-border)', 
    position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 100,
    transform: showNavbar ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s',
    boxSizing: 'border-box'
  };

  const brandContainerStyle = { display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', zIndex: 1001 };
  const brandTextStyle = { fontSize: 'clamp(16px, 4vw, 18px)', fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.5px', lineHeight: '1' };
  const subBrandStyle = { fontSize: '9px', color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '0.5px', marginTop: '2px' };
  const linkContainerStyle = { display: 'flex', gap: '30px', height: '100%', alignItems: 'center' };

  // --- STYLE MOBILE OVERLAY (PERBAIKAN UTAMA DI SINI) ---
  const mobileOverlayStyle = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100vh',
    backgroundColor: 'var(--bg-primary)', // Mengikuti tema
    zIndex: 999, 
    display: 'flex', 
    flexDirection: 'column', // INI KUNCINYA: Susun ke bawah
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '40px',
    transition: 'opacity 0.3s ease'
  };

  const getLinkStyle = (sectionName, isMobile = false) => {
    const isActive = activeSection === sectionName;
    return {
      color: isActive ? '#ff6b00' : 'var(--text-primary)', 
      textDecoration: 'none', fontWeight: '700',
      fontSize: isMobile ? '24px' : '14px', 
      transition: '0.3s', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer',
      paddingBottom: '5px', borderBottom: isActive ? '2px solid #ff6b00' : '2px solid transparent',
    };
  };

  return (
    <>
      <nav style={navStyle}>
        <a href="/#home" style={brandContainerStyle} onClick={() => {setActiveSection('home'); closeMobileMenu();}}>
          <img src={logoPadu} alt="Logo" style={{ height: '40px', width: 'auto' }} />
          <div style={{display: 'flex', flexDirection: 'column'}}>
              <span style={brandTextStyle}>PADU Jakarta</span>
              <span style={subBrandStyle}>Paguyuban Alumni Pesantren Daarul 'Uluum</span>
          </div>
        </a>
        
        <div style={{display: 'flex', alignItems: 'center'}}>
            {/* MENU DESKTOP */}
            <div className="desktop-menu" style={linkContainerStyle}>
              <a href="/#home" style={getLinkStyle('home')} onClick={() => setActiveSection('home')}>Home</a>
              <a href="/#profil" style={getLinkStyle('profil')} onClick={() => setActiveSection('profil')}>Tentang Kami</a>
              <a href="/#kegiatan" style={getLinkStyle('kegiatan')} onClick={() => setActiveSection('kegiatan')}>Kegiatan</a>
            </div>

            {/* TOMBOL THEME */}
            <ThemeToggle />

            {/* TOMBOL HAMBURGER */}
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'} 
            </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isMobileMenuOpen && (
        <div style={mobileOverlayStyle}>
          <a href="/#home" style={getLinkStyle('home', true)} onClick={() => {setActiveSection('home'); closeMobileMenu();}}>Home</a>
          <a href="/#profil" style={getLinkStyle('profil', true)} onClick={() => {setActiveSection('profil'); closeMobileMenu();}}>Tentang Kami</a>
          <a href="/#kegiatan" style={getLinkStyle('kegiatan', true)} onClick={() => {setActiveSection('kegiatan'); closeMobileMenu();}}>Kegiatan</a>
        </div>
      )}
    </>
  );
}

export default Navbar;