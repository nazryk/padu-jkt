import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logoPadu from '../assets/logo-padu.png';
import heroImage from '../assets/heroes.jpg'; 
import Profil from './Profil';
import Kegiatan from './Kegiatan';
import feed1 from '../assets/ig1.jpg';
import feed2 from '../assets/ig2.jpg';
import feed3 from '../assets/ig3.jpg';
import feed4 from '../assets/ig4.jpg';



// --- DATA QUOTES ---
const quotesData = [
  {
    id: 1,
    text: "Tidak ada Persoalan dan tidak ada kesulitan yang tidak selesai dengan bertawajjuh, dengan Allah SWT",
    author: "K.H. Nasrudin Latief",
  },
  {
    id: 2,
    text: "Kunci kesuksesan bukan hanya pada kecerdasan, tapi pada akhlak dan kegigihan dalam menjaga silaturahmi.",
    author: "Al-Ust. Iqbal Harafa",
  },
  {
    id: 3,
    text: "Bukan kemana engkau akan pergi, tapi kemana engkau akan kembali.",
    author: "Al-Ust. Fauzi Ba'ats ",
  }
];

function Home() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  // --- LOGIKA SLIDER QUOTES ---
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotesData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToQuote = (index) => setCurrentQuote(index);

  // --- STYLE UTAMA ---
  const heroSectionStyle = {
    backgroundColor: 'var(--bg-primary)',
    minHeight: '100vh', 
    position: 'relative', 
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 5% 80px', 
    transition: 'background-color 0.3s'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Split Layout (Sebelahan)
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1280px', 
    width: '100%',
    gap: '60px',
    zIndex: 1,
    flexWrap: 'wrap-reverse' 
  };

  // --- KOLOM KIRI (TEKS) ---
  const leftColumnStyle = {
    flex: '1',
    minWidth: '300px',
    textAlign: 'left', 
    position: 'relative',
    zIndex: 2
  };

  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 107, 0, 0.1)', 
    color: '#ff6b00',
    padding: '8px 18px',
    borderRadius: '50px',
    fontWeight: '700',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '25px',
    border: '1px solid rgba(255, 107, 0, 0.2)'
  };

  const titleStyle = {
    fontSize: 'clamp(3rem, 6vw, 5rem)', 
    lineHeight: '1', 
    color: 'var(--text-primary)', 
    fontWeight: '900', 
    letterSpacing: '-2px', 
    marginBottom: '20px'
  };

  const spanGradient = {
    background: '-webkit-linear-gradient(120deg, #ffcc00, #ff6b00)', 
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const descStyle = {
    color: 'var(--text-secondary)', 
    fontSize: '1.15rem',
    lineHeight: '1.8',
    marginBottom: '45px',
    maxWidth: '550px',
    textAlign: 'justify' 
  };

  const btnMain = {
    backgroundColor: '#ff6b00', 
    color: 'white',
    padding: '18px 45px', 
    borderRadius: '12px', 
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 15px 30px rgba(255, 107, 0, 0.3)', 
    transition: 'all 0.3s ease',
    border: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer'
  };

  const socialContainer = {
    marginTop: '50px',
    display: 'flex',
    gap: '25px',
    alignItems: 'center'
  };

  const socialIcon = {
    width: '28px',
    height: '28px',
    opacity: 0.7,
    transition: '0.3s',
    cursor: 'pointer',
    filter: 'grayscale(10%) brightness(1.5)', 
  };

  // --- KOLOM KANAN (GAMBAR BERSIH) ---
  const rightColumnStyle = {
    flex: '1.2', 
    display: 'flex',
    justifyContent: 'center',
    minWidth: '320px',
    position: 'relative'
  };

  // Frame Gambar Bersih (Clean Rounded Rectangle)
  const imageWrapperStyle = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    aspectRatio: '4/3',
    position: 'relative',
    borderRadius: '10px', // Radius halus
    overflow: 'hidden',
    boxShadow: '0 20px 60px var(--shadow-color)',
    // TIDAK ADA BORDER, TIDAK ADA ROTATE
    border: 'none', 
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  };

  const innerImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  };

  // Aksen Kotak di Belakang (Optional, bisa dihapus jika ingin polos total)
  const accentBoxStyle = {
    position: 'absolute',
    top: '20px',
    right: '-20px',
    width: '100%',
    height: '100%',
    border: '2px solid #ff6b00',
    borderRadius: '20px',
    zIndex: -1,
    opacity: 0.3,
    transform: 'rotate(-3deg)'
  };

  // --- STYLE QUOTE SLIDER ---
  const quoteSectionStyle = { padding: '120px 5%', backgroundColor: '#111', backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '500px' };
  const quoteTextStyle = { fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '300', lineHeight: '1.6', fontStyle: 'italic', fontFamily: 'serif', maxWidth: '900px', margin: '0 auto 30px', position: 'relative', zIndex: 2, transition: 'opacity 0.5s ease-in-out', minHeight: '120px' };
  const quoteDot = (isActive) => ({ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: isActive ? '#ff6b00' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: '0.3s' });

  // --- INSTAGRAM FEED ---
  const instaSectionStyle = { padding: '80px 5%', backgroundColor: 'var(--bg-secondary)', textAlign: 'center' };
  const instaGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', maxWidth: '1000px', margin: '40px auto' };
  const instaItemStyle = { aspectRatio: '1/1', borderRadius: '0px', overflow: 'hidden', position: 'relative', cursor: 'pointer' };
  const instaImgStyle = { width: '80%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' };
  const instaPosts = [feed1, feed2, feed3, feed4]; 

  const dotPattern = { position: 'absolute', width: '200px', height: '200px', backgroundImage: 'radial-gradient(var(--text-secondary) 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.15, zIndex: -1 };

  return (
    <div>
      
      {/* 1. HERO SECTION (SPLIT LAYOUT) */}
      <section id="home" style={heroSectionStyle}>
        <div style={{...dotPattern, top: '150px', left: '50px'}}></div>
        <div style={{...dotPattern, bottom: '50px', right: '50px'}}></div>

        <div style={containerStyle}>
          {/* Kiri */}
          <div style={leftColumnStyle}>
            <div style={badgeStyle}><img src={logoPadu} alt="Icon" style={{height:'24px'}}/><span>Est. 2023</span></div>
            <h1 style={titleStyle}>PADU <br/><span style={spanGradient}>Jakarta</span></h1>
            <p style={descStyle}>Wadah silaturahmi, kolaborasi, dan sinergi alumni Pesantren Daarul 'Uluum Kota Bogor di wilayah Jakarta. Bersama membangun jaringan profesional dan kontribusi nyata.</p>
            <a href="#profil" style={btnMain} 
               onMouseEnter={(e) => {e.target.style.transform = 'translateY(-5px)'; e.target.style.boxShadow = '0 20px 40px rgba(255, 107, 0, 0.4)'}}
               onMouseLeave={(e) => {e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 15px 30px rgba(255, 107, 0, 0.3)'}}>
              Jelajahi Profil <span>→</span>
            </a>
            <div style={socialContainer}>
                <a href="https://instagram.com/padu.jakarta" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" style={socialIcon} alt="IG"/></a>
                <a href="https://tiktok.com" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" style={socialIcon} alt="TikTok"/></a>
                <a href="https://facebook.com" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" style={socialIcon} alt="FB"/></a>
            </div>
          </div>
          
          {/* Kanan (Gambar Clean) */}
          <div style={rightColumnStyle}>
            <div style={{position: 'relative'}}> 
                
                <div style={imageWrapperStyle}
                    onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}
                >
                    <img src={heroImage} alt="Kegiatan Alumni" style={innerImageStyle} />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SLIDER NASIHAT */}
      <section style={quoteSectionStyle}>
        <div style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', opacity:0.05, background:'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize:'30px 30px'}}></div>
        
        <div style={{position:'relative', zIndex:2, width:'100%', maxWidth:'900px'}}>
            <span style={{fontSize:'4rem', color:'#ff6b00', fontFamily:'serif', display:'block', lineHeight:0, marginBottom:'40px'}}>“</span>
            
            <p key={currentQuote} style={quoteTextStyle} className="fade-in">
              "{quotesData[currentQuote].text}"
            </p>
            
            <div style={{marginTop:'20px'}}>
               <span style={{display:'block', fontSize:'1.2rem', fontWeight:'700', color:'#fff', marginBottom:'5px'}}>
                 {quotesData[currentQuote].author}
               </span>
               <span style={{fontSize:'0.9rem', color:'#888'}}>
                 {quotesData[currentQuote].role}
               </span>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'40px'}}>
              {quotesData.map((_, index) => (
                <div 
                  key={index}
                  style={quoteDot(index === currentQuote)}
                  onClick={() => goToQuote(index)}
                />
              ))}
            </div>
        </div>
      </section>

      {/* 2. PROFIL */}
      <section id="profil"><Profil /></section>

      

      {/* 4. KEGIATAN & INSTAGRAM */}
      <section id="kegiatan"><Kegiatan /></section>

      {/* 5. INSTAGRAM FEED */}
      <section style={instaSectionStyle}>
        <h3 style={{fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px'}}>Galeri</h3>
        <p style={{color: 'var(--text-secondary)'}}>Intip keseruan terbaru di Instagram <a href="https://instagram.com/padu.jakarta" target="_blank" style={{color: '#ff6b00', textDecoration: 'none'}}>@padu.jakarta</a></p>
        <div style={instaGridStyle}>
          {instaPosts.map((img, idx) => (
            <div key={idx} style={instaItemStyle} onMouseEnter={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}>
              <img src={img} alt="IG Post" style={instaImgStyle} />
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s'}} onMouseEnter={(e) => e.currentTarget.style.opacity = 1} onMouseLeave={(e) => e.currentTarget.style.opacity = 0}>
                  <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" style={{width: '30px', filter: 'invert(1)'}} />
              </div>
            </div>
          ))}
        </div>
        <a href="https://instagram.com/padu.jakarta" target="_blank" style={{...btnMain, backgroundColor: 'transparent', border: '2px solid var(--text-primary)', color: 'var(--text-primary)', boxShadow: 'none'}}>Follow Instagram</a>
      </section>

      <style>{`
        .fade-in { animation: fadeIn 0.8s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        
        @media (max-width: 900px) {
           section#home > div { flex-direction: column-reverse !important; text-align: center !important; padding-top: 20px; gap: 40px !important; padding-left: 20px; padding-right: 20px; }
           div[style*="textAlign: left"] { text-align: center !important; alignItems: center; display: flex; flexDirection: column; }
           div[style*="aspectRatio"] { width: 100% !important; max-width: 400px !important; }
           div[style*="border: 2px solid"] { display: none; } 
           p[style*="textAlign: justify"] { text-align: center !important; }
           div[style*="marginTop: 50px"] { justify-content: center; }
        }
      `}</style>

    </div>
  );
}

export default Home;