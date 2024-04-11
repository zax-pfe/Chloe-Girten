import "../styles/App.css";
import Banner from "./Banner";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contacts";
import { useState } from "react";

function App() {
  const [activePage, updateActivePage] = useState("");

  return (
    <div className="app">
      <Banner />
      <Hero />
      <About />
      <Gallery activePage={activePage} updateActivePage={updateActivePage} />
      <Contact />
    </div>
  );
}

export default App;
