import fotoKetua from '../assets/pak-ketua.jpg'; 
import fotoGroup from '../assets/kegiatan-sekre-2.jpg'; 

function Profil() {
  
  const pageStyle = {
    backgroundColor: 'var(--bg-secondary)', 
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden', 
    padding: '100px 5% 100px',
    transition: 'background-color 0.3s'
  };

  const decorativeCircle = {
    position: 'absolute',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, rgba(255, 107, 0, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
    top: '-10%',
    left: '-10%',
    zIndex: 0
  };

  const introSectionStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto 120px', 
    gap: '60px',
    position: 'relative',
    zIndex: 1,
    flexWrap: 'wrap'
  };

  const introTextStyle = { flex: 1, minWidth: '300px' };

  const badgeStyle = {
    display: 'inline-block',
    backgroundColor: 'var(--card-bg)', 
    color: '#ff6b00',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    boxShadow: '0 4px 15px var(--shadow-color)'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    marginBottom: '20px',
    color: 'var(--text-primary)',
    lineHeight: '1.1'
  };

  const descStyle = {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.8',
    marginBottom: '30px',
    textAlign: 'justify'
  };

  const imageWrapperStyle = {
    flex: 1,
    minWidth: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  };

  const mainImageStyle = {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '30px',
    boxShadow: '0 25px 50px -12px var(--shadow-color)',
    transform: 'rotate(2deg)', 
    border: '8px solid var(--card-bg)',
    position: 'relative',
    zIndex: 2,
    transition: 'transform 0.3s'
  };

  const accentBoxStyle = {
    position: 'absolute',
    width: '100%',
    maxWidth: '500px',
    height: '100%',
    backgroundColor: '#ffcc00',
    borderRadius: '30px',
    top: '20px',
    left: '20px', 
    zIndex: 1,
    opacity: 0.3,
    transform: 'rotate(-3deg)' 
  };

  const chairmanSectionStyle = {
    maxWidth: '1000px',
    margin: '0 auto 150px',
    position: 'relative',
    zIndex: 1
  };

  const glassCardStyle = {
    backgroundColor: 'var(--glass-bg)', 
    backdropFilter: 'blur(20px)',
    borderRadius: '40px', 
    padding: '50px',
    border: '1px solid var(--glass-border)',
    boxShadow: '0 20px 60px var(--shadow-color)',
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap'
  };

  const chairmanPhotoStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%', 
    border: '5px solid var(--card-bg)',
    boxShadow: '0 10px 25px rgba(255, 107, 0, 0.2)',
    flexShrink: 0
  };

  const quoteIconStyle = {
    fontSize: '4rem',
    color: '#ffcc00',
    fontFamily: 'serif',
    lineHeight: 0,
    marginBottom: '30px',
    display: 'block'
  };

  const vmContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    alignItems: 'stretch' 
  };

  // --- STYLE KARTU VISI (UPDATED) ---
  const visiCardStyle = {
    flex: '1.2',
    minWidth: '280px', // Kurangi minWidth agar aman di HP kecil
    backgroundColor: '#1a1a1a', 
    backgroundImage: 'linear-gradient(160deg, #222 0%, #111 100%)',
    color: '#fff',
    // Padding dinamis: besar di desktop, wajar di mobile
    padding: 'clamp(30px, 5vw, 60px)', 
    borderRadius: '30px',
    boxShadow: '0 30px 60px var(--shadow-color)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid #333'
  };

  const misiWrapperStyle = {
    flex: '1',
    minWidth: '280px', // Kurangi minWidth
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    gap: '20px'
  };

  const misiItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: 'var(--card-bg)', 
    padding: '25px', // Padding sedikit diperkecil
    borderRadius: '20px',
    boxShadow: '0 15px 35px var(--shadow-color)', 
    border: '1px solid var(--card-border)',
    transition: 'transform 0.3s',
    cursor: 'default'
  };

  const numberBoxStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
    color: '#ff6b00',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: '800',
    flexShrink: 0,
    border: '1px solid rgba(255, 107, 0, 0.2)'
  };

  return (
    <div style={pageStyle}>
      <div style={decorativeCircle}></div>

      <div style={introSectionStyle}>
        <div style={introTextStyle}>
          <span style={badgeStyle}>Tentang Kami</span>
          <h1 style={titleStyle}>Rumah Sinergi <br/><span style={{color:'#ff6b00'}}>Alumni di Jakarta</span></h1>
          <p style={descStyle}>
            PADU Jakarta hadir sebagai jembatan yang menghubungkan ribuan alumni Daarul ‘Uluum di Ibu Kota. Tidak hanya menjadi wadah silaturahmi, PADU Jakarta tumbuh sebagai ekosistem kolaboratif yang mendorong para alumni untuk berkembang bersama dalam berbagai bidang. Organisasi ini aktif menyelenggarakan forum diskusi, ruang berbagi gagasan, serta kegiatan yang memperkuat kapasitas intelektual, spiritual, sosial, hingga pengembangan karier dan dunia profesional.
            <br /> <br />
            Saat ini, PADU Jakarta dipimpin oleh <b>Mujib Ruhul Amin</b>, yang membawa semangat integrasi antara nilai-nilai kepesantrenan dengan tantangan kehidupan modern di perkotaan. Di bawah kepemimpinannya, PADU Jakarta berkomitmen membangun jaringan yang solid, produktif, dan memberi kontribusi nyata bagi masyarakat, khususnya di wilayah Jakarta dan sekitarnya.
          </p>
        </div>
        <div style={imageWrapperStyle}>
          <div style={accentBoxStyle}></div>
          <img src={fotoGroup} alt="Keluarga PADU" style={mainImageStyle} onMouseEnter={(e) => e.target.style.transform = 'rotate(0deg) scale(1.02)'} onMouseLeave={(e) => e.target.style.transform = 'rotate(2deg)'}/>
        </div>
      </div>

      <div style={chairmanSectionStyle}>
        <div style={glassCardStyle}>
          <img src={fotoKetua} alt="Ketua" style={chairmanPhotoStyle} />
          <div style={{flex:1}}>
            <span style={quoteIconStyle}>“</span>
            <p style={{fontSize:'1.2rem', fontStyle:'italic', color:'var(--text-primary)', marginBottom:'20px'}}>
              Website ini adalah langkah kecil digitalisasi, tapi lompatan besar untuk konektivitas kita.
            </p>
            <div>
              <h4 style={{fontSize:'1.4rem', fontWeight:'800', margin:'0 0 5px 0', color: 'var(--text-primary)'}}>Mujib Ruhul Amin</h4>
              <span style={{color:'#ff6b00', fontWeight:'600'}}>Koordinator PADU Regional Jakarta 2025-2026</span>
            </div>
          </div>
        </div>
      </div>

      <div style={vmContainerStyle}>
        {/* KARTU VISI */}
        <div style={visiCardStyle}>
          <div style={{position:'absolute', top:'-20px', right:'-20px', fontSize:'12rem', opacity:'0.03', fontWeight:'900', color:'#fff'}}>V</div>
          <div style={{position:'absolute', bottom:'-50px', left:'-50px', width:'200px', height:'200px', background:'radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(0,0,0,0) 70%)', borderRadius:'50%'}}></div>
          
          <h4 style={{color:'#ff9e40', textTransform:'', letterSpacing:'3px', marginBottom:'15px', fontSize:'0.9rem', fontWeight:'700'}}>VISI PADU Jakarta</h4>
          
          {/* Font Size Clamp untuk Responsif */}
          <h2 style={{fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', fontWeight:'700', marginBottom:'20px', lineHeight:'1.3', color:'#fff'}}>
            Mewujudkan Alumni yang Solid, Profesional & Kontributif.
          </h2>
          <p style={{color:'#ccc', lineHeight:'1.7', fontSize:'1.05rem', fontWeight:'300'}}>
            Menjadi organisasi alumni terdepan yang inklusif, berbasis nilai-nilai kepesantrenan, dan mampu memberikan dampak nyata.
          </p>
        </div>

        {/* DAFTAR MISI */}
        <div style={misiWrapperStyle}>
          <div style={misiItemStyle} onMouseEnter={(e)=>e.currentTarget.style.transform='translateX(10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateX(0)'}>
            <div style={numberBoxStyle}>1</div>
            <div><h4 style={{margin:'0 0 5px 0', fontSize:'1.1rem', fontWeight:'700', color:'var(--text-primary)'}}>Konektivitas</h4><p style={{margin:0, color:'var(--text-secondary)', fontSize:'0.9rem'}}>Mempererat ukhuwah alumni lintas angkatan.</p></div>
          </div>
          <div style={misiItemStyle} onMouseEnter={(e)=>e.currentTarget.style.transform='translateX(10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateX(0)'}>
            <div style={numberBoxStyle}>2</div>
            <div><h4 style={{margin:'0 0 5px 0', fontSize:'1.1rem', fontWeight:'700', color:'var(--text-primary)'}}>Pengembangan</h4><p style={{margin:0, color:'var(--text-secondary)', fontSize:'0.9rem'}}>Memfasilitasi karir & bisnis anggota.</p></div>
          </div>
          <div style={misiItemStyle} onMouseEnter={(e)=>e.currentTarget.style.transform='translateX(10px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateX(0)'}>
            <div style={numberBoxStyle}>3</div>
            <div><h4 style={{margin:'0 0 5px 0', fontSize:'1.1rem', fontWeight:'700', color:'var(--text-primary)'}}>Kontribusi</h4><p style={{margin:0, color:'var(--text-secondary)', fontSize:'0.9rem'}}>Aksi sosial nyata untuk masyarakat Jakarta.</p></div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="flexDirection: row"] { flexDirection: column-reverse !important; text-align: center; }
          div[style*="textAlign: justify"] { text-align: center !important; }
          div[style*="display: flex"][style*="gap: 40px"] { justify-content: center; }
          
          /* Gambar Lurus di HP */
          img[style*="rotate"] { transform: rotate(0deg) !important; margin-bottom: 30px; }
          div[style*="rotate"] { transform: rotate(0deg) !important; }
          
          /* Card Ketua Vertikal */
          div[style*="gap: 50px"] { flex-direction: column; text-align: center; gap: 20px !important; }
          
          /* Visi Misi Stacked */
          div[style*="flexWrap: wrap"] { flex-direction: column; }
          
          /* Misi Item Vertikal di HP kecil */
          div[style*="display: flex"][style*="padding: 30px"] {
             flex-direction: column;
             text-align: center;
          }
          
          /* Override Padding Card di HP agar tidak terlalu besar */
          div[style*="minWidth: 350px"] { min-width: 100% !important; }
          div[style*="minWidth: 280px"] { min-width: 100% !important; }
        }
      `}</style>
    </div>
  );
}

export default Profil;