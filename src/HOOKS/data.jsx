import React from 'react'
import { Link } from 'react-router-dom'
function Data() {
    const DataSet=[
{
    name:"UseEffect",
    path:'/UseEffect',
    id:1
},
{
    name:"UseState",
    path:'/UseState',
    id:2
},
{
    name:"UseContext",
    path:'/UseContext',
    id:3
},
{
    name:"UseReducer",
    path:'/UseReducer',
    id:4
},
{
    name:"UseCallback",
    path:'/UseCallback',
    id:5
}


    ]
  return (
    <div>
    <ul>
    {
        DataSet.map((data, id)=><Link key={id} to={data.path}><li >{data.name}</li></Link>)
     }
    </ul>
     
    </div>
  )
}

export default Data
