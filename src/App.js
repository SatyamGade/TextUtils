import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("Light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
      document.body.style.backgroundColor = "rgb(26 27 28)";
      showAlert("Dark mode anable", "success");
    } else {
      setMode("Light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode anable", "success");
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router basename="/TextUtils">
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter text below. To analyze!" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About title="TextUtils" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
