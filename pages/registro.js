import { Crear } from '../components/firebase';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
export default function Reg() {
  const entrusu = useRef();
  const entrusun = useRef();
  const entrpass = useRef();
  const [est, setEst] = useState(false);
  const rut = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = Crear(
      entrusu.current.value,
      entrpass.current.value,
      entrusun.current.value
    );
    setEst(true);
    rut.push('/messi');
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <h1>Registrar</h1>
        <hr />
        <input required ref={entrusun} type="text" placeholder="Nombre" />
        <input required ref={entrusu} type="email" placeholder="Usuario" />
        <input
          required
          ref={entrpass}
          type="password"
          placeholder="contraseña"
        />
        <button disabled={est}>Enviar</button>
      </form>
    </div>
  );
}
