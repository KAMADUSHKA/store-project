import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../componant/Header'

export default function AuthorHeader() {
  return (
    <div>
      <Header/>
        <Outlet/>
        
    </div>
  )
}
