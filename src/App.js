import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Servises from "./Pages/Servises";
import NavigationBar from "./Pages/NavigationBar";

function App() {
  return (
    <div >
      
     <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path = "/"
                   element = {<Login/>}/>
            <Route path = "/Servises"
                   element = {<Servises/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
