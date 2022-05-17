// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {
  getFirestore,
  doc,
  setDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRzMRT9_V3Grc4hzgkwAcW4Xia2nzJ60",
  authDomain: "airline-7b543.firebaseapp.com",
  projectId: "airline-7b543",
  storageBucket: "airline-7b543.appspot.com",
  messagingSenderId: "914142872326",
  appId: "1:914142872326:web:f31f93bc582939ddde5487",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const storage = getStorage(app);

const db = getFirestore(app);

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};

// Storage functions
export const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid + ".png");
  setLoading(true);

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, { photoURL });

  setLoading(false);
  alert("Uploaded File");
};

// Document functions
export const setProfileValue = async (
  currentUser,
  name,
  email,
  phone,
  age,
  sex,
  address,
  state,
  country
) => {
  return await setDoc(doc(db, "users", currentUser.uid), {
    name: name,
    email: email,
    phone: phone,
    age: age,
    sex: sex,
    address: address,
    state: state,
    country: country,
  });
};

export const getProfileValue = async (currentUser) => {
  const docRef = doc(db, "users", currentUser.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else
    return {
      name: "",
      email: "",
      phone: "",
      age: "",
      sex: "",
      address: "",
      state: "",
      country: "",
    };
};
