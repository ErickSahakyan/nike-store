import React from "react";
import {
  Hero,
  Sales,
  Stories,
  FLexContent,
  Footer,
  Navbar,
} from "./components";
import {
  heroapi,
  popularsales,
  footerAPI,
  toprateslaes,
  highlight,
  sneaker,
  story,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FLexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FLexContent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
