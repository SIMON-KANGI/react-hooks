import React from 'react'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'
function Home() {
  return (
    <div>
    <Navbar/>
    <div className='text-center'> 
    <h1>HOOKS IN REACT</h1>
    </div>
    <div className='text-center'>    
    <Link className="btn btn-info" to="/useState">Start</Link>
    </div>

     
    </div>
  )
}

export default Home
