// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0kwqwdfazDtXB7eaeodbxOzHsPfPjGkM",
  authDomain: "ph-gym-client.firebaseapp.com",
  projectId: "ph-gym-client",
  storageBucket: "ph-gym-client.firebasestorage.app",
  messagingSenderId: "541272239160",
  appId: "1:541272239160:web:e155a4e10e356ba006cacd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD2V9O7gmtwp0Lv_beqY8neK5u7hzV1JaY",
//   authDomain: "coffee-store-e3bdf.firebaseapp.com",
//   projectId: "coffee-store-e3bdf",
//   storageBucket: "coffee-store-e3bdf.appspot.com",
//   messagingSenderId: "250605594578",
//   appId: "1:250605594578:web:3c37ceb66cdde01248ca0b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export default auth;
