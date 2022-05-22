//CALL MODULES AND METHODS
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

//IMPORTING FIREBASE SETTINGS
import firebaseConfig from './config';

//INITIALIZATION
const firebaseApp = initializeApp(firebaseConfig);

//GETTING ACCESS
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

//EXPORTING ACCESS
export { db, auth };