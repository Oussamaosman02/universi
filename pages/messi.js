import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef, useState, useEffect } from 'react';
import { Crear, Iniciar } from '../components/firebase';
import styles from '../styles/Home.module.css';

export default function Home2() {
  const entrusu = useRef();
  const entrpass = useRef();
  const regusu = useRef();
  const regpass = useRef();
  const [est, setEst] = useState(false);
  const [estd, setEstd] = useState(false);
  const rut = useRouter();
  useEffect(() => {
    const aut = localStorage.getItem('aut');
    if (aut) {
      rut.push('/ajustes');
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = Crear(entrusu.current.value, entrpass.current.value);
    setEst(true);
  };
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
                handleSubmit(e);
              }}
            >
              <h3>Registrar</h3>
              <hr />
              <input
                required
                ref={entrusu}
                type="email"
                placeholder="Usuario"
              />
              <input
                required
                ref={entrpass}
                type="password"
                placeholder="contraseña"
              />
              <button disabled={est}>Enviar</button>
            </form>
          </article>
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
          </article>
        </section>
      </div>
    </div>
  );
}
