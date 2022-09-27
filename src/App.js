import "./App.css";
import React from 'react';
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import ButtonGrp from "./components/ButtonGrp";
import TextArea from "./components/TextArea";
import About from "./components/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";




function App() {
  const [alert, setAlert] = useState(null);
  const [darkMode, setDarkMode] = useState('light');
  const [toDark, toLight] = useState('To Dark Mode');

  const showAlert = ((message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  })
  const toggleMode = (() => {
    if (darkMode === 'light') {
      setDarkMode('dark');
      toLight('To Light Mode');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      // document.querySelector('#firstBtn').style.backgroundColor = 'red'
      showAlert("Dark mood enabled", "success");
      document.title = "Text Utils App Demo {Dark}";
      // setInterval(() => {
      //   document.title = "Text Utils is wow";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Istall Text Utils now";
      // }, 1500);

    } else {
      setDarkMode('light');
      toLight('To Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      // document.querySelector('#firstBtn').style.backgroundColor = 'green'
      showAlert("Light mood enabled", "success");
    }
  })
  const redMode = (() => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
  })

  return (
    <>
      <Router>
        <Navbar title="Text Utils By Nasif" navItem1="HOME" navItem2="ABOUT" mode={darkMode} redMode={redMode} toggleMode={toggleMode} label={toDark} />
        <Alert alert={alert} />

        <ButtonGrp one="1st Btn" two={2} three="3rd Btn" four="4th Btn" five="5th Btn" six="6th Btn" />
        <Routes>
          {/* <Route path="/">
          <TextArea showAlert={showAlert} mode={darkMode} />
          </Route> */}
          <Route path='/' element={<TextArea showAlert={showAlert} mode={darkMode} />} />
          {/* <Route path="/about"><About /></Route> */}
          <Route path="/about" element={<About />} />
          <Route path="/buttons" element={<ButtonGrp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
