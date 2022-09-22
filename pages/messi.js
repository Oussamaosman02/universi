import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { Iniciar } from '../components/firebase';
import styles from '../styles/Home.module.css';

export default function Home2() {
  const regusu = useRef();
  const regpass = useRef();
  const [estd, setEstd] = useState(false);
  const rut = useRouter();
  useEffect(() => {
    const aut = localStorage.getItem('aut');
    if (aut) {
      rut.push('/ajustes');
    }
  });
  const handleSubmitIni = (e) => {
    e.preventDefault();
    const todos = Iniciar(regusu.current.value, regpass.current.value);
    setEstd(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Homa 2</title>
      </Head>
      <div className={styles.main}>
        <h1>Entrar</h1>
        <section>
          <article>
            <form
              onSubmit={(e) => {
                handleSubmitIni(e);
              }}
            >
              <h3>Iniciar sesion</h3>
              <hr />
              <input type="email" required ref={regusu} placeholder="Usuario" />
              <input
                type="password"
                required
                ref={regpass}
                placeholder="contraseña"
              />
              <button disabled={estd}>Enviar</button>
            </form>
            <Link href="/registro">
              <a>Registrarse</a>
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
}
