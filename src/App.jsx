import { useState } from "react";
import "./App.css";
import MainNav from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AnalogClock from "./Pages/AnalogClock/AnalogClock";
import AutoComplete from "./Pages/AutoComplete/AutoComplete";

function App() {
  return (
    <>
      <MainNav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Analog_Clock" element={<AnalogClock />} />
          <Route path="Auto_Complete" element={<AutoComplete />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
