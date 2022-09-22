import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuL9dRWvKKAr-fq60DvlRy_FHQy77gp8w',
  authDomain: 'hezniversidad.firebaseapp.com',
  projectId: 'hezniversidad',
  storageBucket: 'hezniversidad.appspot.com',
  messagingSenderId: '1019001835540',
  appId: '1:1019001835540:web:1af14f3a8efc54cddc1701',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export function Crear(email, password, nombre) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: nombre,
      });
      alert(`Bienvenido ${nombre}.Inicia sesion`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('No se ha podido registrar el usuario');
    });
}
export function Iniciar(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('aut', true);
      localStorage.setItem('nombre', user.displayName);
      location.reload();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('No se ha podido iniciar sesion');
    });
}
