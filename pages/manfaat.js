import Layout from "../components/Layout";
import { db } from "../lib/firebaseAdmin";
import Link from "next/link";

export async function getServerSideProps() {
  const snapshot = await db.collection("manfaat").get();
  const data = snapshot.docs.map(doc => doc.data());
  return { props: { data } };
}

export default function Manfaat({ data }) {
  return (
    <Layout>
      <div className="page-container">
        <Link href="/">
          <button className="back-btn">← Kembali</button>
        </Link>
        <h1 className="page-title">Manfaat</h1>
        <p className="page-subtitle">
          Berikut adalah manfaat utama dari jamu yang tersedia:
        </p>
        <ul className="styled-list">
          {data.map((item, idx) => (
            <li key={idx}>{item.keterangan}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}