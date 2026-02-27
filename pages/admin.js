import Layout from "../components/Layout";
import { db } from "../lib/firebaseAdmin";
import { useState } from "react";

export async function getServerSideProps() {
  // Ambil semua koleksi untuk ditampilkan
  const manfaatSnap = await db.collection("manfaat").get();
  const carapakaiSnap = await db.collection("carapakai").get();
  const testimoniSnap = await db.collection("testimoni").get();
  const deskripsiSnap = await db.collection("deskripsi").get();

  return {
    props: {
      manfaat: manfaatSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
      carapakai: carapakaiSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
      testimoni: testimoniSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
      deskripsi: deskripsiSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })),
    }
  };
}

export default function Admin({ manfaat, carapakai, testimoni, deskripsi }) {
  const [activeTab, setActiveTab] = useState("manfaat");

  return (
    <Layout>
      <div className="page-container">
        <h1 className="page-title">⚙️ Admin Panel</h1>
        <p className="page-subtitle">Kelola semua konten jamu di sini.</p>

        {/* Tab navigasi */}
        <div className="admin-tabs">
          <button onClick={() => setActiveTab("manfaat")}>Manfaat</button>
          <button onClick={() => setActiveTab("carapakai")}>Cara Pakai</button>
          <button onClick={() => setActiveTab("testimoni")}>Testimoni</button>
          <button onClick={() => setActiveTab("deskripsi")}>Deskripsi</button>
        </div>

        {/* Konten tab */}
        <div className="admin-content">
          {activeTab === "manfaat" && (
            <Section title="Manfaat" data={manfaat} />
          )}
          {activeTab === "carapakai" && (
            <Section title="Cara Pakai" data={carapakai} />
          )}
          {activeTab === "testimoni" && (
            <Section title="Testimoni" data={testimoni} />
          )}
          {activeTab === "deskripsi" && (
            <Section title="Deskripsi" data={deskripsi} />
          )}
        </div>
      </div>
    </Layout>
  );
}

// Komponen Section untuk menampilkan data
function Section({ title, data }) {
  return (
    <div>
      <h2>{title}</h2>
      <button className="add-btn">+ Tambah {title}</button>
      <ul className="admin-list">
        {data.map(item => (
          <li key={item.id}>
            <strong>{item.nama || item.judul || "Item"}</strong>
            <p>{item.pesan || item.isi || ""}</p>
            <div className="admin-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Hapus</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}