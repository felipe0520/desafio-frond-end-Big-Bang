import React from "react";
import "./App.css";
import Header from "./containers/header/";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import MamahShop from "./pages/manahShop";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <BlogPage />
      <MamahShop />
    </div>
  );
}

export default App;
