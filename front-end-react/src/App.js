import React from "react";
import "./App.css";
import Header from "./containers/header/";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <BlogPage />
    </div>
  );
}

export default App;
