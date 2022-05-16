//CALL MODULES AND METHODS
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//IMPORTING FIREBASE SETTINGS
import firebaseConfig from './config';

//INITIALIZATION
const firebaseApp = initializeApp(firebaseConfig);

//GETTING ACCESS
const db = getFirestore(firebaseApp);

//EXPORTING ACCESS
export { db };