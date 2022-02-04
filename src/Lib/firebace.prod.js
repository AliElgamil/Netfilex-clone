// This import loads the firebase namespace along with all its type information.
import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAcCm_60fGG-fMVbVUv_W6gGuMIewWMIk4',
  authDomain: 'netflex-cl.firebaseapp.com',
  projectId: 'netflex-cl',
  storageBucket: 'netflex-cl.appspot.com',
  messagingSenderId: '834071421847',
  appId: '1:834071421847:web:90842696ccc8235233dad2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore();

// console.log(data['movies']);

// const create = (nameColl) => {
//   const cr = async (item) => {
//     await addDoc(collection(db, nameColl), item);
//   };

//   data[nameColl].forEach((item) => {
//     cr(item);
//   });
// };

// create('movies');
// create('series');

export { app };
