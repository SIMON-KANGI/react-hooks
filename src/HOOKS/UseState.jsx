import React, {useState} from 'react'
import Navbar from '../Navbar'
import '../styles.css'
import {Link} from 'react-router-dom'
function UseState() {
    const [count, setCount] = useState(0)

 function Increment(){
    setCount(prevCount => prevCount + 1)
 }
 function Decrement(){
    setCount(prevCount => prevCount-1)
 }

    const [display, setDisplay] = useState("") 

    function HideDisplay(){
        setDisplay(prevState=> !prevState)
        console.log(display)
    }
    const [currentPages, setCurrentPage] = useState({
        currentPage:null,
        NumberOfPages:[
            {
                id:1,
                name:"page1"
            },
            {
                id:2,
                name:"page2"
            },
            {
                id:3,
                name:"page3"
            },
            {
                id:4,
                name:"page4"
            }
        ]
    })
    function changeState(index){
        setCurrentPage({...currentPages, currentPage: currentPages.NumberOfPages[index] })
    }
    function changeStyle(index){
        if(currentPages.NumberOfPages[index]===currentPages.currentPage){
            return "box active"
        }else{
            return "box inactive"
        }
    }
    function ShowDisplay(){
        setDisplay(
             <div>
        
            <h1>Simon Mwangi</h1>
            <p>When the button display is clicked it displays the infomation</p>
            </div>)
        console.log(display)
    }

  return (
    <>
    <Navbar/>
     <div className='container'>
    
      <h1 className='text-center'>The useState hook</h1>
<div><button onClick={Decrement} >-</button>
      <span id="text">{count}</span>
      <button onClick={Increment}>+</button>
      <p>When the button is clicked the count icements or decrements by one.</p>
      <p>const [count, setCount] = useState(0)
      </p>
      </div>
      
<div> 
<button onClick={ShowDisplay}>display</button> 
<button onClick={HideDisplay}>Hide</button>
<h1>{display}</h1>
</div>
<div id="somepage">
{
    currentPages.NumberOfPages.map((page, index)=>{
return(<div id="pages" className={changeStyle(index)} onClick={()=>changeState(index)} key={index}>
    <h1>{page.name}</h1>
    </div>)
})
}

</div>
   <Link to="/UseEffect"><button className='btn btn-info'>Next</button></Link> 
    </div>
    </>
   
  )
}

export default UseState
