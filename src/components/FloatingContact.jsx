import { useState } from 'react';
// Pastikan nama file gambar ikon Anda benar
import chatIcon from '../assets/gif-wa.gif'; 

function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false); 

  // --- STYLE ---
  const wrapperStyle = {
    position: 'fixed',
    bottom: '20px', // Jarak sedikit dikurangi di HP
    right: '20px',
    zIndex: 9999, // Paling atas banget
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end', 
    gap: '15px'
  };

  // Style Tombol Utama (Tanpa Lingkaran Background)
  const buttonStyle = {
    width: '65px', // Ukuran sedikit diperbesar
    height: '65px',
    backgroundColor: 'transparent', // Transparan total
    border: 'none', // Hapus border
    cursor: 'pointer',
    // Hapus shadow kotak, kita andalkan shadow gambar jika ada (atau biarkan clean)
    boxShadow: 'none', 
    padding: '0',
    transition: 'transform 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // --- STYLE POPUP (GLASSMORPHISM) ---
  const popupStyle = {
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--glass-border)',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 8px 32px 0 var(--shadow-color)', 
    width: '240px',
    marginBottom: '10px',
    transform: isOpen ? 'scale(1)' : 'scale(0)',
    transformOrigin: 'bottom right',
    opacity: isOpen ? 1 : 0,
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  };

  const itemStyle = {
    display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'var(--text-primary)',
    fontWeight: '600', padding: '12px', borderRadius: '12px', marginBottom: '8px', transition: '0.2s',
    fontSize: '0.95rem', border: '1px solid transparent'
  };

  return (
    <div style={wrapperStyle}>
      
      {/* POPUP MENU */}
      <div style={popupStyle}>
        <h4 style={{
            margin: '0 0 15px 0', 
            color: '#ff6b00', 
            borderBottom: '1px solid var(--glass-border)', 
            paddingBottom: '10px',
            fontSize: '0.9rem',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontWeight: '700'
        }}>
          Hubungi Kami
        </h4>
        
        <a 
          href="https://wa.me/6285716373475?text=Halo%20Admin%20PADU%20Jakarta" 
          target="_blank" 
          style={{...itemStyle, backgroundColor: 'rgba(37, 211, 102, 0.15)'}} 
          onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.3)';
              e.currentTarget.style.borderColor = '#25D366';
          }}
          onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.15)';
              e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <span style={{fontSize: '1.2rem'}}>💬</span> WhatsApp
        </a>

        <a 
          href="mailto:padu.jakarta@gmail.com" 
          style={{...itemStyle, backgroundColor: 'rgba(0, 123, 255, 0.15)'}} 
          onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.3)';
              e.currentTarget.style.borderColor = '#007bff';
          }}
          onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 123, 255, 0.15)';
              e.currentTarget.style.borderColor = 'transparent';
          }}
        >
          <span style={{fontSize: '1.2rem'}}>📧</span> Email
        </a>
      </div>

      {/* TOMBOL UTAMA (TANPA LINGKARAN BACKGROUND) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={buttonStyle}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Efek shadow ditambahkan langsung ke gambar icon agar terlihat mengambang */}
        <img 
            src={chatIcon} 
            alt="Chat Us" 
            style={{
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' // Shadow mengikuti bentuk icon
            }} 
        />
      </button>

    </div>
  );
}

export default FloatingContact;