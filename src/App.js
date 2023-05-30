import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Servises from "./Pages/Servises";
import NavigationBar from "./Pages/NavigationBar";
import DigiBill from './Pages/DigiBill';
import SmartPose from "./Pages/SmartPose";
import SmartMsg from "./Pages/SmartMsg";
import CocaCola from "./Pages/CocaCola";
import InApp from "./Pages/InApp";
import EBCM from "./Pages/EBCM";
import SmartCnt from "./Pages/SmartCnt";
import VCard from './Pages/VCard';


function App() {
  return (
    <div >
      
     <BrowserRouter>
        <NavigationBar/>
        <Routes>
            <Route path = "/"
                   element = { <Login/> } />
            <Route path = "/Servises"
                   element = { <Servises/> } />
            <Route path = "DigiBill"
                   element = { <DigiBill/> } />
            <Route path="/SmartPose"
                   element = { <SmartPose/> } /> 
            <Route path="/SmartMsg"
                   element = { <SmartMsg/> } />
            <Route path="/CocaCola"
                   element = { <CocaCola/> } />
            <Route path="/InApp"
                   element = { <InApp/> } />
            <Route path="/EBCM"
                   element = { <EBCM/> } /> 
            <Route path="/VCard"
                   element = { <VCard/> } /> 
            <Route path="/SmartCnt"
                   element = { <SmartCnt/> } />  
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;