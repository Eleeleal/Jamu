import Layout from "../components/Layout";
import { db } from "../lib/firebaseAdmin";
import Link from "next/link";

export async function getServerSideProps() {
  const snapshot = await db.collection("carapakai").get();
  const data = snapshot.docs.map(doc => doc.data());
  return { props: { data } };
}

export default function CaraPakai({ data }) {
  return (
    <Layout>
      <div className="page-container">
        <Link href="/">
          <button className="back-btn">← Kembali</button>
        </Link>
        <h1 className="page-title">Cara Pakai</h1>
        <p className="page-subtitle">
          Ikuti langkah-langkah berikut untuk penggunaan jamu yang tepat:
        </p>
        <ul className="styled-list">
          {data.map((item, idx) => (
            <li key={idx}>{item.instruksi}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}