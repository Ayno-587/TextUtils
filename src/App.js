import './App.css';
import About from './components/About';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/textform';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  document.title="TextUtils";

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#1c2c43";
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    // This is JSX: <>
    // It can only return one element.
    <>
      <Router>
      <Navbar title="TextUtils" abouttext="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert}heading="Enter the text to analyse below" mode={mode}/>
          </Route>
        </Switch>
      </div>
      {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
