import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home3() {
  const [auth, setAuth] = useState(false);
  const [nome, setNome] = useState();

  useEffect(() => {
    setAuth(localStorage.getItem("aut"));
    const nombre = localStorage.getItem("nombre");
    nombre ? setNome(nombre) : setNome("no");
  }, []);
  if (!auth) {
    return <h1>Cagando....</h1>;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Homa 3</title>
        </Head>
        <main className={styles.main}>
          <h1>{nome === "no" ? "Bienvenido" : `Hola ${nome}`}</h1>
          <section>
            <article>
              <h3>Biencagado</h3>
              <hr />
              <p>
                Este es el inicio de la Hezniversidad, una universidad de mierda
                En esta universidad instamos a que dejes cagar tu imaginacón,
                impartiendo clases lo más de mierda posible Aquí las clases son
                100% online: queremos que cagues agusto, como en casa
              </p>
            </article>
            <article>
              <h3>Entrar</h3>
              <hr />
              <p>
                Vas a entrar en un espacio que facilita la gestión académica,
                incluye un entorno virtual de aprendizaje, posibilita la
                realización de cagadas educativas, promueve comunicación entre
                la comunidad educativa e impulsa la ingesta de fibra
              </p>
            </article>
            <article>
              <h3>Cursos:</h3>
              <hr />
              <div>
                <ul>
                  <li>Coprofología</li>
                  <li>Máster en coprofagia</li>
                  <li>Historia fecal</li>
                  <li>Ingeniería mierdil</li>
                  <li>Recursos Fecales</li>
                </ul>
              </div>
            </article>
          </section>
        </main>
      </div>
    );
  }
}
