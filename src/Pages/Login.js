import React from 'react'
import '../Style/Style.css'

export default function Login() {

  const Login = () => window.location.href = "/Servises";

  return (
            <div id='main'>

                <h1 id='heading'>Login Form</h1>
            
            <fieldset id='fieldsetLogin'>
                    <div >
            
                          <div id='Login-form' >
                            
                             <div id='input'>
                                <lable>User Nmae : </lable>
                                <input type='email'id='inputf'  placeholder='Enter User Name ' /><br/><br/>
                             </div>
                              <div id='input'>
                                <lable>Password : </lable>
                                <input type='password' id='inputf' placeholder='Enter Your Password ' /><br/><br/>
                              </div>
                          </div>
            
                          <div>
                              <button id='login-btn' onClick={Login} >Login </button>
                          </div>
            
                    </div>
            
            </fieldset>
            
            </div>
  )
}
