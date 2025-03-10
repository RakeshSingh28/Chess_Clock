import AppContainer from "./components/AppContainer";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Notice from "./components/Notice";
import Game from "./components/Game";

function App() {
  return (
    <div className="bg-gray-800 w-full h-screen">
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
