import React, { useContext } from 'react'
import Navbar from '../Navbar'
import { useState, createContext } from 'react'
 
const userContext= createContext()
function UseContext() {
const [name, setName]= useState('Simon Mwangi')
  return (
    <div>
      <Navbar/>
      <userContext.Provider value={name}>
      <h1>{`Hello ${name}!`}</h1>
      <Best1/>
      </userContext.Provider>
    
    </div>
  )
}
function Best1(){
  return(
    <>
    <Best2/>
    
    </>
  )
}
function Best2(){
  const name= useContext(userContext)
  return(
    <>
    <h1>{`${name} is the best software engineer on this planet`}</h1>
    
    </>
  )
}

export default UseContext
