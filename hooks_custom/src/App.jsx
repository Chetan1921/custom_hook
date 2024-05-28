import { useState } from 'react'
import { useLogin } from './useLogin'
import './App.css'

function App() {
  
const {isLog,handlelogin,handlelogout}=useLogin();
  return (
    <>
      <div>
        <button onClick={isLog?handlelogout:handlelogin}>{isLog?'Log Out':'Log In'}</button>
      </div>
        
    </>
  )
}

export default App
