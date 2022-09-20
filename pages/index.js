import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hezniversidad, el entorno fecal de la Consejería de Cagación</h1>
      <div className={styles.main}>
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
              realización de cagadas educativas, promueve comunicación entre la
              comunidad educativa e impulsa la ingesta de fibra
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
      </div>
    </div>
  );
}
