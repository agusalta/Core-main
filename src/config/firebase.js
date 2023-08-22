import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBWGrJWxf_AkKmLtk4kkNebvPLqFUhw0D0",
  authDomain: "altamirano2023-97a39.firebaseapp.com",
  projectId: "altamirano2023-97a39",
  storageBucket: "altamirano2023-97a39.appspot.com",
  messagingSenderId: "388372283665",
  appId: "1:388372283665:web:a3f35021b92c623c93ccb0",
  measurementId: "G-82TRRFTFNW"
};

firebase.initializeApp(firebaseConfig)

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const user = auth.currentUser;
export const db = getFirestore(app)

export default firebase;