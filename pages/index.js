import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Sistema de testes - Adm Tiago</title>
          <meta name="description" content="Sistema de testes - Adm. Tiago" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <p>
            <button onClick={() => signOut()}>Sair</button>
          </p>
        </header>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Bem vindo(a) ao sistema de testes do Adm. Tiago
          </h1>
        </main>

        <footer className={styles.footer}>Powered by Adm. Tiago</footer>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>
          {" "}
          Não logado <button onClick={() => signIn()}>Sign in</button>{" "}
        </p>
      </main>
    </div>
  );
}
