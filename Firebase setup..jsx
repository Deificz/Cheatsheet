//FIREBASE CONFIG

import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgYgGaKlhItSKQk7BB_hWcHUCUuEsae-o",
  authDomain: "simple-form-de512.firebaseapp.com",
  projectId: "simple-form-de512",
  storageBucket: "simple-form-de512.appspot.com",
  messagingSenderId: "1060701594352",
  appId: "1:1060701594352:web:77fd29ead4c1fe8d74d835"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app);


//IMPORT THE MODULES

import {db} from '../config/firebase';
import {doc, collection, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const getUserCollection = collection(db, 'user_data');

//METHODS

//GET
 
  useEffect(() => {
      const getUsers = async () =>{

        const data = await getDocs(getUserCollection);
        setUsers(data.docs.map(doc => 
          ({...doc.data(), id: doc.id})
         ))

      };
      getUsers();
      
  },[]);

//POST

 const addData = async () => {
  await addDoc(getUserCollection,{/*fields*/})
 }


//PUT

const updateData = (id) => {
  const userDoc = doc(db, 'user_data', id);
  const newFields = //fields;
  updateDoc(userDoc, newFields);
 }

//DELETE

 const deleteData = (id) => {
  const userDoc = (db, 'user_data', id);
  deleteDoc(userDoc);
 }