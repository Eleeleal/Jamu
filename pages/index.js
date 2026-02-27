import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Layout>
      {!showMenu ? (
        // Tampilan awal
        <div className="page-container fade-in">
          <h1 className="welcome-title">Welcome to Our Page</h1>
          <p className="welcome-subtitle">
            Temukan informasi lengkap tentang jamu: manfaat, cara pakai, dan testimoni.
          </p>
          <button 
            className="next-btn" 
            onClick={() => setShowMenu(true)}
          >
            Next →
          </button>
        </div>
      ) : (
        // Tampilan menu setelah Next ditekan
        <div className="page-container fade-in">
          <button 
            className="back-btn" 
            onClick={() => setShowMenu(false)}
          >
            ← Kembali
          </button>
          <h1 className="page-title">Menu Utama</h1>
          <p className="page-subtitle">
            Pilih salah satu menu di bawah atau gunakan bar di kiri atas (☰).
          </p>
          <div className="menu-grid">
            <Link href="/deskripsi"><button className="menu-btn">Deskripsi Produk</button></Link>
            <Link href="/manfaat"><button className="menu-btn">Manfaat</button></Link>
            <Link href="/carapakai"><button className="menu-btn">Cara Pakai</button></Link>
            <Link href="/testimoni"><button className="menu-btn">Testimoni</button></Link>
          </div>
        </div>
      )}
    </Layout>
  );
}