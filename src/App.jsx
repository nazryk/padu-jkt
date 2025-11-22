import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Kegiatan from './pages/Kegiatan';
import FloatingContact from './components/FloatingContact';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Navbar />
      
      <div style={{minHeight: '100vh'}}> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          {/* Sekarang Route ini akan menampilkan halaman yang cantik, bukan teks biasa */}
          <Route path="/kegiatan" element={<Kegiatan />} />
        </Routes>
      </div>

      <Footer />

      <FloatingContact />
      
    </>
  );
}

export default App;