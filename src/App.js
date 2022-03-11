import React, { useEffect, useState } from "react";
import * as FirestoreService from "./services/firestore";
import Content from "./components/layout/Content";
import { Header } from "./components/layout/Header";

export const App = () => {
  const [user, setUser] = useState();
  const [groceryList, setGroceryList] = useState();
  useEffect(() => {
    FirestoreService.getGroceryList()
      .then((groceryList) => {
        if (groceryList.exists) {
          setError(null);
          console.log(groceryList);
        } else {
          setError("grocery-list-not-found");
        }
      })
      .catch(() => setError("grocery-list-get-fail"));
  }, []);

  return (
    <div className="App">
      {/* <Header />
      <Content /> */}
    </div>
  );
};

export default App;
