import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { db } from "./core/connection";

import ProductImpl from "./core/serviceImpl/ProductImpl";

function App() {
  const [count, setCount] = useState(0);

  const rootRef = db.collection("products");

  const [description, setDescription] = useState("initial");

  rootRef.onSnapshot((snapshot) => {
    console.log("A");
    snapshot.docChanges().forEach((change) => {
      console.log(change.doc.data());
    });
    console.log("B");
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {description}
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
