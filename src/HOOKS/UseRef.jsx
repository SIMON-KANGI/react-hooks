import React, { useState } from 'react'
import Navbar from '../Navbar'
import { useRef, useEffect } from 'react'
function UseRef() {
  const inputRef=useRef(null)
const countRender=useRef(0)
const [stateCount, setStateCount]=useState(0)
countRender.current++;
const [count, setCount]=useState(0)
const prevCount=useRef(count)
  useEffect(()=>{
inputRef.current.focus()

  },[])
  useEffect(() => {
    prevCount.current = count;
  }, [count])
  return (
    <div>
      <Navbar/>
      <h4>1. The useRef hook is used for accessing Dom element</h4>
      <input ref={inputRef}/>
      <h4>2. Storing and updating values without re-renders</h4>
<h5>{countRender.current}</h5>
<button onClick={()=>setStateCount(stateCount+1)}>count</button>
<h4>3. You can use UseRef to track the previous state of an element</h4>
<h5>Current count: {count}</h5>
<h5>Previous count:{prevCount.current}</h5>
<button onClick={()=>setCount(count+1)}>increase count</button>
    </div>
  )
}

export default UseRef
