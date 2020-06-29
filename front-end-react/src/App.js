import React from "react";
import Header from "./containers/header/";
import HomePage from "./pages/home";
import BlogPage from "./pages/blog";
import MamahShop from "./pages/manahShop";
import CursosPage from "./pages/cursos";
import PodcastsPage from "./pages/podcasts";
import ConceptPage from "./pages/concept";
import Footer from "./containers/footer/index";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <BlogPage />
      <MamahShop />
      <CursosPage />
      <PodcastsPage />
      <ConceptPage />
      <Footer />
    </div>
  );
}

export default App;
