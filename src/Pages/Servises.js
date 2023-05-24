import React from 'react'
import DigiBill from'../componant/DigiBill.jpg'

export default function Servises() {
  return (
    <div>
      <div id='main-Services'>
        <div id='single-Service-line'>
          <div id='single-Services'>

                
                <div id='image-Area'>
                  <img src={DigiBill} alt='' id='Server-Image'/><br/>
                  <span id='Server-Text'>Digi Bill</span>
                </div>

                <div id='image-Area'>
                  <img src={DigiBill} alt='' id='Server-Image'/><br/>
                  <span id='Server-Text'>Digi Bill</span>
                </div>

                <div id='image-Area'>
                  <img src={DigiBill} alt='' id='Server-Image'/><br/>
                  <span id='Server-Text'>Digi Bill</span>
                </div>

                <div id='image-Area'>
                  <img src={DigiBill} alt='' id='Server-Image'/><br/>
                  <span id='Server-Text'>Digi Bill</span>
                </div>

          </div>
        </div>
      </div>
    </div>
  )
}

