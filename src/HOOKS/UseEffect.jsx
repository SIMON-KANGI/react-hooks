import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';

function UseEffect() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
   const fetchData= async()=>{
    try{
      const response= await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
    } catch(error){
      console.error(`error fetching Data:`, error)
    }
   }
       
      
  fetchData()
    
  },[])
  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
      {
        users.map((user)=>{
          return(
            <div key={user.id}>
            <h2>Name:{user.name}</h2>
       <p>email:{user.email}</p>
            </div>
          )
        })
      }
       
      </div>
    </div>
  );
}

export default UseEffect;
