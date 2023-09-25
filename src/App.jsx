import React from "react";
import Home from "./components/Page/Home";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Home />
      </Routes>
    </>
  );
};

export default App;
