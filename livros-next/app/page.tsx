import 'bootstrap/dist/css/bootstrap.css';
import { Menu } from "@/componentes/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main className="styles.main">
        <h1 className="styles.title">
          Página inicial
        </h1>
      </main>
    </div>
  )
}