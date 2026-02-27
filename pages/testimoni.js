import Layout from "../components/Layout";
import { db } from "../lib/firebaseAdmin";
import Link from "next/link";

export async function getServerSideProps() {
  const snapshot = await db.collection("testimoni").get();
  const data = snapshot.docs.map(doc => doc.data());
  return { props: { data } };
}

export default function Testimoni({ data }) {
  return (
    <Layout>
      <div className="page-container fade-in">
        <Link href="/">
          <button className="back-btn">← Kembali</button>
        </Link>
        <h1 className="page-title">Testimoni</h1>
        <p className="page-subtitle">
          Berikut adalah pengalaman pengguna jamu kami:
        </p>
        <ul className="styled-list">
          {data.map((item, idx) => (
            <li key={idx}>
              <strong>{item.nama}</strong> — "{item.pesan}"
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}