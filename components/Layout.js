import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
  const router = useRouter();
  const ruta = router.route;
  return (
    <>
      <header className={styles.header}>
        <hgroup>
          <h1>HEZNIVERSIDAD</h1>
          <h3>A la shit ni un pis</h3>
          <h6>Una universidad de mierda</h6>
        </hgroup>
        <nav>
          <ul className={styles.icons}>
            <li>
              <Link href="/messi">
                <div className="iconos">
                  <Image
                    src={`/icons/homa_${ruta === '/messi' ? 'f' : 'nf'}.png`}
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="iconos">
                  <Image
                    src={`/icons/school_${ruta === '/' ? 'f' : 'nf'}.png`}
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/ajustes">
                <div className="iconos">
                  <Image
                    src={`/icons/settings_${
                      ruta === '/ajustes' ? 'f' : 'nf'
                    }.png`}
                    width={48}
                    height={48}
                    layout="responsive"
                  />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
