import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Tombol hamburger */}
      <button 
        onClick={() => setOpen(true)} 
        className={`hamburger-btn ${open ? "active" : ""}`}
      >
        ☰
      </button>

      {/* Overlay */}
      <div 
        className={`overlay ${open ? "show" : ""}`} 
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar menu */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        <button 
          onClick={() => setOpen(false)} 
          className="close-btn"
        >
          ✕
        </button>
        <ul>
          <li><Link href="/manfaat">Manfaat</Link></li>
          <li><Link href="/carapakai">Cara Pakai</Link></li>
          <li><Link href="/testimoni">Testimoni</Link></li>
          <li><Link href="/deskripsi">Deskripsi</Link></li>
        </ul>
      </div>
    </div>
  );
}