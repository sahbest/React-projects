import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Faqs from "./components/Faqs";
// import Contact from "./components/Contact";
import Contact1 from "./components/Contact1";

const App = () => {
  const [showside, setShowside] = useState(false);
  return (
    <div>
      <Navbar setShowside={setShowside} />
      <Rightbar setShowside={setShowside} showside={showside} />
      <Home />
      <About />
      <Skills />
      <Faqs />
      <Contact1 />
    </div>
  );
};

export default App;
