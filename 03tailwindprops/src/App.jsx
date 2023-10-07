import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {

  let myObj = {
    username: 'Abhishek',
    age: 25
  }

  let newArr = [1, 2, 3];

  return (
    <>
      {/* www.devui.io */}
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>

      <Card userhandle="Abhishek's coffee" />
      <Card userhandle="Abhishek Shukla" />
    </>
  );
}

export default App;
