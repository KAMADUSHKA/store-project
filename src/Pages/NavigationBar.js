import React from 'react'
import { IconContext } from 'react-icons';
import '../Style/NavigationBar.css';
import AdeonaLogo from '../componant/AdeonaLogo.png';

export default function NavigationBar() {
  return (
    <div id='NavBar'>
        <div id='NavBar-Data'>
            <img src={AdeonaLogo} alt='Adeona Logo'  id='NavImg'/>
            <span id='NavBar-Text'>Adeona Technology</span>  
            <button id='NavBar-Btn'> Login </button>   
        </div> 
    </div>
  )
}
