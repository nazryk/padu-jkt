import { Link } from 'react-router-dom';
import logoPadu from '../assets/logo-padu.png';

function Footer() {
  
  const footerStyle = {
    backgroundColor: 'rgba(15, 15, 15, 0.85)', 
    backdropFilter: 'blur(20px)', 
    WebkitBackdropFilter: 'blur(20px)', 
    color: '#e0e0e0', 
    padding: '80px 20px 30px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    marginTop: '-50px', 
    zIndex: 10 
  };

  const glowStyle = {
    position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
    width: '800px', height: '400px',
    background: 'radial-gradient(circle, rgba(255, 107, 0, 0.12) 0%, rgba(0,0,0,0) 70%)',
    zIndex: -1, pointerEvents: 'none'
  };

  const containerStyle = {
    position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto',
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px'
  };

  const brandColStyle = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' };
  const logoStyle = { height: '60px', marginBottom: '25px', filter: 'drop-shadow(0 0 20px rgba(255, 107, 0, 0.2))' };
  const brandTitleStyle = { fontSize: '1.6rem', fontWeight: '800', margin: '0 0 15px 0', textTransform: '', letterSpacing: '-0.5px', background: '-webkit-linear-gradient(45deg, #ffcc00, #ff6b00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' };
  const descStyle = { color: '#bbb', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '30px', maxWidth: '350px' };

  const socialContainerStyle = { display: 'flex', gap: '15px' };
  const socialBtnStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', transition: 'all 0.3s ease', cursor: 'pointer', color: '#fff' };

  const headingStyle = { fontSize: '1rem', fontWeight: '700', marginBottom: '25px', color: '#fff', letterSpacing: '1px', textTransform: 'uppercase', borderLeft: '3px solid #ff6b00', paddingLeft: '15px' };
  const navUlStyle = { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }
  const linkItemStyle = { display: 'flex', alignItems: 'flex-start', gap: '15px', color: '#ccc', textDecoration: 'none', transition: '0.3s', fontSize: '0.95rem', lineHeight: '1.5' };
  const iconSvgStyle = { width: '20px', height: '20px', color: '#ff6b00', flexShrink: 0, marginTop: '2px' };
  const mapBtnStyle = { display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '25px', color: '#fff', textDecoration: 'none', backgroundColor: 'rgba(255, 107, 0, 0.15)', border: '1px solid rgba(255, 107, 0, 0.5)', padding: '12px 25px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600', transition: '0.3s', backdropFilter: 'blur(5px)' };
  const footerBottomStyle = { borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '70px', paddingTop: '30px', textAlign: 'center', color: '#777', fontSize: '0.85rem', position: 'relative', zIndex: 2 };

  const handleSocialEnter = (e) => { e.currentTarget.style.backgroundColor = '#ff6b00'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = '#ff6b00'; };
  const handleSocialLeave = (e) => { e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; };

  return (
    <footer style={footerStyle}>
      <div style={glowStyle}></div>
      <div style={containerStyle}>
        
        <div style={brandColStyle}>
          <img src={logoPadu} alt="Logo PADU" style={logoStyle} />
          <h3 style={brandTitleStyle}>PADU Jakarta</h3>
          <p style={descStyle}>Membangun sinergi alumni Daarul 'Uluum di Jakarta. Bersatu dalam visi, bergerak dalam aksi untuk kebermanfaatan bersama.</p>
          <div style={socialContainerStyle}>
             <a href="https://instagram.com/padu.jakarta" target="_blank" style={socialBtnStyle} onMouseEnter={handleSocialEnter} onMouseLeave={handleSocialLeave}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
             <a href="https://tiktok.com/@padu.jakarta" target="_blank" style={socialBtnStyle} onMouseEnter={handleSocialEnter} onMouseLeave={handleSocialLeave}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg></a>
             <a href="https://facebook.com/padu.jakarta" target="_blank" style={socialBtnStyle} onMouseEnter={handleSocialEnter} onMouseLeave={handleSocialLeave}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          </div>
        </div>

        <div>
          <h4 style={headingStyle}>Jelajahi</h4>
          <ul style={navUlStyle}>
            <li><a href="/#home" style={linkItemStyle} onMouseOver={(e)=>e.target.style.color='#ff6b00'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Beranda</a></li>
            <li><a href="/#profil" style={linkItemStyle} onMouseOver={(e)=>e.target.style.color='#ff6b00'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Tentang Kami</a></li>
            <li><a href="/#kegiatan" style={linkItemStyle} onMouseOver={(e)=>e.target.style.color='#ff6b00'} onMouseOut={(e)=>e.target.style.color='#ccc'}>Kegiatan & Berita</a></li>
          </ul>
        </div>

        <div>
          <h4 style={headingStyle}>Hubungi Kami</h4>
          <div style={{display:'flex', flexDirection:'column', gap:'15px'}}>
            <div style={linkItemStyle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconSvgStyle}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg><span>padu.jakarta@gmail.com</span></div>
            <div style={linkItemStyle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconSvgStyle}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg><span>+62 857-1637-3475</span></div>
            <div style={linkItemStyle}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={iconSvgStyle}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg><span style={{maxWidth: '250px'}}>Sekretariat PADU Jakarta,<br/>Ciputat Timur, Tangerang Selatan, 15412.</span></div>
          </div>
        </div>
      </div>
      <div style={footerBottomStyle}>&copy; {new Date().getFullYear()} <strong>PADU Jakarta</strong>. All rights reserved.</div>
      
      <style>{`
        @media (max-width: 768px) {
            div[style*="gridTemplateColumns"] { grid-template-columns: 1fr !important; gap: 40px !important; }
            div[style*="flexDirection: column"] { align-items: center !important; text-align: center; }
            div[style*="alignItems: flex-start"] { align-items: center !important; }
            div[style*="alignItems: center"] { justify-content: center !important; }
            /* Border left jadi border bottom di HP */
            h4[style*="borderLeft"] { border-left: none !important; border-bottom: 2px solid #ff6b00; padding-left: 0 !important; padding-bottom: 10px; display: inline-block; }
        }
      `}</style>
    </footer>
  );
}

export default Footer;