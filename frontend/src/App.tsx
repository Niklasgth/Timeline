import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Timeline from "./components/timeline/Timeline";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <Timeline />
      </main>
      <Footer />
    </>
  );
}

export default App;
