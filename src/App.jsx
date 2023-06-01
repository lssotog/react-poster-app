import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Post } from "../src/components/Post";

function App() {
  return (
    <>
      <Post author="Misito" body="React.js is awesome!" />
      <Post author="Luz Stella" body="Amazing!" />
    </>
  );
}

export default App;
