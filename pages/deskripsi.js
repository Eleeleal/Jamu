import Layout from "../components/Layout";
import Link from "next/link";

export default function Deskripsi() {
  return (
    <Layout>
      <div className="page-container">
        <Link href="/">
          <button className="back-btn">← Kembali</button>
        </Link>
        <h1 className="page-title">Deskripsi Produk</h1>
        <p className="page-subtitle">
          Jamu kami dibuat dari bahan alami pilihan untuk menjaga kesehatan tubuh.
        </p>
      </div>
    </Layout>
  );
}