// home.tsx

import Link from "next/link";
import Image from "next/image";
import Button from "../components/Button";

import styles from "./home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Cardio Analyzer</h1>
        <Image
          src="/img-logo-white.png"
          alt="Heart"
          className={styles.heart}
          width={415}
          height={415}
          priority
        />
        <Link href="/auth/login">
          <Button id="send_auth" content="Iniciar sesión" disabled={false} />
        </Link>
        <Link href="/auth/register">
          <Button id="send_auth" content="Registrarse" disabled={false} type="secundary" customStyles="text-[50px]" />
        </Link>
        <Link href="/help" className={styles.helpLink}>
          Ayuda
        </Link>
      </main>
    </div>
  );
};

export default Home;
