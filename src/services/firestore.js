import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import * as firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
// };

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

// console.log(firebase);
// console.log(db);

// firebase.initializeApp(firebaseConfig);
// const app = firebase.firestore();
// const db = getFirestore(app);

const app = initializeApp(firebaseConfig);
const firebase = getFirestore(app);

const db = firebase;

export const authenticateAnonymously = () => {
  return firebase.auth().signInAnonymously();
};

export const createGroceryList = (userName, userId) => {
  return db.collection("groceryLists").add({
    created: firebase.firestore.FieldValue.serverTimestamp(),
    createdBy: userId,
    users: [
      {
        userId: userId,
        name: userName,
      },
    ],
  });
};

export const getGroceryList = (groceryListId) => {
  return db.collection("groceryLists").doc(groceryListId).get();
};

export const getGroceryListItems = (groceryListId) => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .collection("items")
    .get();
};

export const streamGroceryListItems = (groceryListId, observer) => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .collection("items")
    .orderBy("created")
    .onSnapshot(observer);
};

export const addUserToGroceryList = (userName, groceryListId, userId) => {
  return db
    .collection("groceryLists")
    .doc(groceryListId)
    .update({
      users: firebase.firestore.FieldValue.arrayUnion({
        userId: userId,
        name: userName,
      }),
    });
};

export const addGroceryListItem = (item, groceryListId, userId) => {
  return getGroceryListItems(groceryListId)
    .then((querySnapshot) => querySnapshot.docs)
    .then((groceryListItems) =>
      groceryListItems.find(
        (groceryListItem) =>
          groceryListItem.data().name.toLowerCase() === item.toLowerCase()
      )
    )
    .then((matchingItem) => {
      if (!matchingItem) {
        return db
          .collection("groceryLists")
          .doc(groceryListId)
          .collection("items")
          .add({
            name: item,
            created: firebase.firestore.FieldValue.serverTimestamp(),
            createdBy: userId,
          });
      }
      throw new Error("duplicate-item-error");
    });
};
