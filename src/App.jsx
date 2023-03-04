import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <>
      <NavBar/>
      <section className="splash"></section>
      <section className="search"></section>
      <section className="cards"></section>
      <section className="footer"></section>
    </>
  );
}

export default App;
