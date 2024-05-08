import Link from "next/link";
import Image from "next/image";

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
          <button className={styles.button}>Iniciar Sesión</button>
          <button className={styles.button}>Registrarse</button>
      </main>
      <footer className={styles.footer}>
          <Link href="#" className={styles.helpLink}>Ayuda</Link>
      </footer>
    </div>
  );
}
