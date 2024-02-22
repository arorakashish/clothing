// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAA1Q9RK_ol-yNvJRNSEgGwKhG2n8Fp1MU',
  authDomain: 'mockts-2a9bf.firebaseapp.com',
  databaseURL: 'https://mockts-2a9bf.firebaseio.com',
  projectId: 'mockts-2a9bf',
  storageBucket: 'mockts-2a9bf.appspot.com',
  messagingSenderId: '81744833094',
  appId: '1:81744833094:web:6185c54963fb38f2687847',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.getCustomParameters({ promt: 'select_account' });
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
