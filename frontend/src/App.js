import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <MainContainer /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;