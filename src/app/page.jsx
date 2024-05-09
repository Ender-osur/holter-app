import Link from "next/link";
import Image from "next/image";
import Button from "./components/button";

import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <h1 className={styles.title}>Cardio Analyzer</h1>
          <Image 
            src="/img-logo-white.png" 
            alt="Heart" className={styles.heart} 
            width={415}
            height={415}
          />
          <Link href="/auth/login">
            <Button id="send_auth" content="Iniciar sesión" />
          </Link>
          <Link href="/auth/register">
            <Button id="send_auth" content="Registrarse" />
          </Link>
      </main>
      <footer className={styles.footer}>
          <Link href="#" className={styles.helpLink}>Ayuda</Link>
      </footer>
    </div>
  );
}
