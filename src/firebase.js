import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// import "firebase/firestore";

// console.log(initializeApp);

// const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyCeMVTiRp1uSTOVSFhzuXNE47jnE7X6gyk",
//   authDomain: "todoist-tut-9a214.firebaseapp.com",
//   databaseURL:
//     "https://todoist-tut-9a214-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "todoist-tut-9a214",
//   storageBucket: "todoist-tut-9a214.appspot.com",
//   messagingSenderId: "571265843576",
//   appId: "1:571265843576:web:70566844c065e3a35bc88d",
// });

const firebaseConfig = {
  apiKey: "AIzaSyCeMVTiRp1uSTOVSFhzuXNE47jnE7X6gyk",
  authDomain: "todoist-tut-9a214.firebaseapp.com",
  databaseURL:
    "https://todoist-tut-9a214-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoist-tut-9a214",
  storageBucket: "todoist-tut-9a214.appspot.com",
  messagingSenderId: "571265843576",
  appId: "1:571265843576:web:70566844c065e3a35bc88d",
};

const app = initializeApp(firebaseConfig);

// console.log(app);

const db = getFirestore(app);



console.log(db);

export { db as firebase };
