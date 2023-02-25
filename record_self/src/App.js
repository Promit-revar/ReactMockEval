/* eslint-disable no-unused-vars */
import React from "react"; 
import "./assets/style.css";

import Card from "./components/CardComponent/CardComponent";

import NavComponent from "./components/NavComponent/NavComponent";

import { DataContextProvider } from "./DataContext/dataContext";

function App() {
  return(
    <div>
      <NavComponent />
      <DataContextProvider>
      <Card />
      </DataContextProvider>
    </div>
  );
}

export default App;
