import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articlesData';

function Kegiatan() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const pageStyle = {
    backgroundColor: 'var(--bg-secondary)', 
    minHeight: '100vh', position: 'relative', overflow: 'hidden', padding: '100px 5% 100px'
  };

  const decorationStyle = {
    position: 'absolute', width: '100%', height: '300px',
    background: 'linear-gradient(3deg, var(--bg-primary) 50%, var(--bg-secondary) 50%)', 
    top: 0, left: 0, zIndex: 0 
  };

  const contentContainer = { 
    position: 'relative', 
    zIndex: 2, 
    maxWidth: '1200px', 
    margin: '0 auto' 
  };

  const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '20px' };
  const titleStyle = { fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.1', marginBottom: '10px' };
  const subtitleStyle = { fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '500px' };
  const btnViewAll = { display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#ff6b00', fontWeight: '700', textDecoration: 'none', borderBottom: '2px solid #ff6b00', paddingBottom: '5px', transition: '0.3s' };

  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', alignItems: 'start' };

  // --- STYLE KARTU ---
  const featuredCardStyle = {
    gridColumn: '1 / -1', display: 'flex', flexDirection: 'row', 
    backgroundColor: 'var(--card-bg)', 
    borderRadius: '30px', overflow: 'hidden',
    boxShadow: '0 20px 60px var(--shadow-color)', border: '1px solid var(--card-border)',
    cursor: 'pointer', 
    transition: 'transform 0.3s ease', 
    minHeight: '400px',
    position: 'relative',
    zIndex: 10 
  };

  const featuredImgContainer = { flex: '1.2', minHeight: '300px', position: 'relative', overflow: 'hidden' };
  const featuredImgStyle = { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' };
  const featuredContent = { flex: '1', padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };

  const standardCardStyle = {
    backgroundColor: 'var(--card-bg)', 
    borderRadius: '25px', padding: '30px', border: '1px solid var(--card-border)',
    boxShadow: '0 10px 30px var(--shadow-color)', cursor: 'pointer', transition: 'transform 0.3s ease',
    position: 'relative', zIndex: 10
  };

  const tagStyle = { display: 'inline-block', backgroundColor: '#ff6b00', color: '#fff', fontSize: '0.75rem', fontWeight: '700', padding: '6px 14px', borderRadius: '50px', textTransform: 'uppercase', marginBottom: '20px', alignSelf: 'flex-start', letterSpacing: '1px' };
  const dateStyle = { fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '15px', display: 'block', textTransform: 'uppercase', letterSpacing: '1px' };
  const headingFeatured = { fontSize: '2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.3' };
  const excerptFeatured = { fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '30px' };

  const readMoreBtnStyle = {
    marginTop: 'auto', fontWeight: '700', color: '#ff6b00', fontSize: '1rem', 
    display: 'inline-flex', alignItems: 'center', gap: '8px', 
    padding: '10px 0', cursor: 'pointer', transition: '0.2s'
  };

  // --- MODAL STYLE DIPERBAIKI UNTUK MOBILE ---
  const modalOverlayStyle = { 
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(15px)',
    zIndex: 10000, // Z-Index paling tinggi
    display: 'flex', justifyContent: 'center', alignItems: 'center', 
    padding: '40px'
  };
  
  const modalContentStyle = { 
    backgroundColor: 'var(--card-bg)', 
    width: '100%', maxWidth: '900px', 
    height: 'auto', maxHeight: '90vh', // Batasi tinggi agar scroll muncul
    overflowY: 'auto', // Scroll otomatis jika konten panjang
    position: 'relative', 
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    borderRadius: '25px',
    // Hapus display flex agar scroll lebih aman di mobile
    display: 'block' 
  };

  const closeButtonStyle = { 
    position: 'fixed', top: '20px', right: '20px', 
    background: 'var(--text-primary)', color: 'var(--bg-primary)',
    border: 'none', borderRadius: '50%', width: '45px', height: '45px', fontSize: '24px', 
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', 
    transition: '0.2s', zIndex: 10001, boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
  };

  const modalHeaderStyle = {
    padding: '60px 40px 30px', borderBottom: '1px solid var(--card-border)',
    backgroundColor: 'var(--bg-secondary)'
  };

  const modalBodyStyle = { 
    padding: '40px', maxWidth: '800px', margin: '0 auto', width: '100%',
    paddingBottom: '100px' // Ruang ekstra di bawah agar text tidak mentok
  };
  
  const modalImageGridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px'
  };

  const openArticle = (article) => { if (!article.isPlaceholder) { setSelectedArticle(article); document.body.style.overflow = 'hidden'; } };
  const closeArticle = () => { setSelectedArticle(null); document.body.style.overflow = 'auto'; };

  return (
    <div style={pageStyle}>
      <div style={decorationStyle}></div>
      <div style={contentContainer}>
        <div style={headerStyle}>
            <div><h1 style={titleStyle}>Jurnal Kegiatan</h1><p style={subtitleStyle}>Rekam jejak langkah dan kontribusi PADU Jakarta.</p></div>
            <a href="#" style={btnViewAll} onMouseEnter={e=>e.target.style.color='var(--text-primary)'} onMouseLeave={e=>e.target.style.color='#ff6b00'}>Lihat Arsip Lengkap <span>→</span></a>
        </div>
        <div style={gridStyle}>
            {articlesData.filter(item => !item.isPlaceholder).map((item) => (
                <div 
                    key={item.id} 
                    className="featured-card" 
                    style={featuredCardStyle} 
                    onClick={() => openArticle(item)}
                    onMouseEnter={(e) => { 
                        e.currentTarget.style.transform = 'translateY(-5px)'; 
                        const img = e.currentTarget.querySelector('img');
                        if(img) img.style.transform = 'scale(1.05)'; 
                    }} 
                    onMouseLeave={(e) => { 
                        e.currentTarget.style.transform = 'translateY(0)'; 
                        const img = e.currentTarget.querySelector('img');
                        if(img) img.style.transform = 'scale(1)'; 
                    }}
                >
                    <div style={featuredImgContainer}><img src={item.cover} alt={item.title} style={featuredImgStyle} /></div>
                    <div style={featuredContent}>
                        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}><span style={tagStyle}>{item.category}</span><span style={dateStyle}>{item.date}</span></div>
                        <h2 style={headingFeatured}>{item.title}</h2>
                        <p style={excerptFeatured}>{item.excerpt}</p>
                        <span style={readMoreBtnStyle}>Baca Selengkapnya <span style={{fontSize:'1.2rem'}}>→</span></span>
                    </div>
                </div>
            ))}
            
            {articlesData.filter(item => item.isPlaceholder).map((item) => (
                <div key={item.id} style={{...standardCardStyle, gridColumn: 'auto'}} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                    <div style={{display:'flex', alignItems:'center', gap:'15px', marginBottom:'20px'}}>
                        <div style={{width:'50px', height:'50px', backgroundColor:'rgba(255,107,0,0.1)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem'}}>📅</div>
                        <div><span style={{fontSize:'0.8rem', fontWeight:'700', color:'#ff6b00', textTransform:'uppercase', letterSpacing:'1px'}}>Upcoming</span><h4 style={{margin:0, fontSize:'1.1rem', fontWeight:'700', color: 'var(--text-primary)'}}>Agenda Berikutnya</h4></div>
                    </div>
                    <div style={{padding:'20px', backgroundColor:'rgba(0,0,0,0.02)', borderRadius:'15px', border:'1px dashed var(--text-secondary)'}}>
                        <h3 style={{fontSize:'1.2rem', fontWeight:'700', marginBottom:'10px', color:'var(--text-secondary)'}}>Belum Ada Jadwal</h3>
                        <p style={{color:'var(--text-secondary)', fontSize:'0.95rem', lineHeight:'1.6'}}>Pantau terus Instagram kami untuk update kegiatan terbaru.</p>
                        <button style={{marginTop:'15px', width:'100%', padding:'10px', border:'none', backgroundColor:'var(--text-primary)', color:'var(--bg-primary)', borderRadius:'8px', fontWeight:'600', cursor:'pointer'}}>Cek Instagram</button>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* MODAL POPUP */}
      {selectedArticle && (
        <div style={modalOverlayStyle} onClick={closeArticle}>
            <button style={closeButtonStyle} onClick={closeArticle}>&times;</button>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                <div style={modalHeaderStyle}>
                    <div style={{maxWidth: '800px', margin: '0 auto'}}>
                        <span style={tagStyle}>{selectedArticle.category}</span>
                        <h1 style={{fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '800', marginBottom: '15px', lineHeight: '1.2', color:'var(--text-primary)'}}>
                            {selectedArticle.title}
                        </h1>
                        <span style={{color:'var(--text-secondary)', fontSize:'1rem', textTransform:'uppercase', letterSpacing:'1px'}}>
                            {selectedArticle.date} • PADU JAKARTA
                        </span>
                    </div>
                </div>
                <div style={modalBodyStyle}>
                    {selectedArticle.gallery && (
                        <div className="modal-gallery" style={modalImageGridStyle}>
                            {selectedArticle.gallery.map((img, index) => (
                                <img key={index} src={img} alt="Doc" style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}} />
                            ))}
                        </div>
                    )}
                    <div style={{fontSize: '1.25rem', lineHeight: '2', color: 'var(--text-secondary)', fontFamily: 'serif'}}> 
                        {selectedArticle.content}
                    </div>
                </div>
            </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { 
            /* Perbaikan Kartu di HP agar tingginya fleksibel */
            .featured-card { 
                flex-direction: column !important; 
                height: auto !important; /* Pastikan tinggi auto */
            } 
            .featured-card > div:first-child { min-height: 250px !important; } 
            .featured-card > div:last-child { padding: 30px !important; } 
            
            /* MODAL FULL SCREEN FIX */
            .modal-overlay { padding: 0 !important; align-items: flex-start !important; }
            .modal-content { 
                border-radius: 0 !important; 
                height: 100% !important; 
                max-height: 100% !important; /* Paksa full height */
                max-width: 100% !important; 
            }
            .close-btn { top: 15px !important; right: 15px !important; }
            .modal-gallery { display: grid; grid-template-columns: 1fr !important; gap: 15px; } 
            .modal-header { padding: 80px 20px 20px !important; } /* Tambah padding atas biar ga ketabrak tombol close */
            .modal-body { padding: 20px !important; padding-bottom: 100px !important; } /* Ruang scroll bawah */
        }
      `}</style>
    </div>
  );
}

export default Kegiatan;