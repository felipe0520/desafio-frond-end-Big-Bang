import React from "react";
import "./App.css";
import Header from "./containers/header/";
import HomePage from "./pages/home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
