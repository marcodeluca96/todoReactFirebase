// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCPRvooFmWRBvcQO-Um92gwqXZqQ3ZEA_s',
  authDomain: 'todoreactbe.firebaseapp.com',
  projectId: 'todoreactbe',
  storageBucket: 'todoreactbe.appspot.com',
  messagingSenderId: '525170935720',
  appId: '1:525170935720:web:c6b6bd7e489eb583f03f9d',
  databaseURL:
    'https://todoreactbe-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
