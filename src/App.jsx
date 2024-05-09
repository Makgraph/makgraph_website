import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Header,
  Home,
  Gallery,
  Shop,
  About,
  Contact,
  Footer,
} from "./components";

const App = () => (
  <>
    <Header />
    {/* <main className="pt-20 md:pt-24 h-full"> */}
    <main className="mt-20 md:mt-24 h-[100%]">
      {/* <Home /> */}
      {/* <Gallery /> */}
      <Shop />
      {/* <About /> */}
      {/* <Contact /> */}
    </main>
    {/* <Footer /> */}
  </>
);

export default App;
